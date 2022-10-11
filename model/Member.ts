import Schedule from './Schedule';
import Task from './Task';
import UnexpectedTask from './UnexpectedTask';

export const TAG = {
	FIXED: '[고정]',
	BUFFER: '[버퍼]',
};

export default class Member {
	id: string;
	name: string;
	timeRequiredPerStorypointInHour: number;
	scheduleForThisSprint: Schedule[];
	taskList: Task[];
	unexpectedTask: UnexpectedTask[];

	constructor(sprintStartDate: Date, sprintEndDate: Date) {
		this.loadGoogleCalendar(sprintStartDate, sprintEndDate);
	}

	// TODO Bind api function
	// Load Google Calendar schedule - by 5 minutes
	loadGoogleCalendar = async (
		sprintStartDate: Date,
		sprintEndDate: Date
	): Promise<Schedule[]> => {
		return new Promise(() => {
			this.scheduleForThisSprint = [];
		});
	};

	// Load Storypoints
	availableStorypoint = (schedule) => {
		const total = 8;
		let fixedHours = 0;
		let bufferHours = 0;

		schedule.forEach((s) => {
			const regex = /\[[가-힣a-zA-Z0-9]*\]/g;
			const tag = s.name.matchAll(regex)[0];
			switch (tag) {
				case TAG.FIXED:
					fixedHours += s.durationInHour;
					break;
				case TAG.BUFFER:
					bufferHours += s.durationInHour;
					break;
				default:
					break;
			}
		});

		return (
			(total - fixedHours - bufferHours) / this.timeRequiredPerStorypointInHour
		);
	};
	availableStorypointOn = (date: Date) => {
		const schedule = this.scheduleForThisSprint.filter((s) => {
			return s.date.toLocaleDateString() === date.toLocaleDateString();
		});
		return this.availableStorypoint(schedule);
	};
	availableStorypointUntil = (date: Date) => {
		const schedule = this.scheduleForThisSprint.filter((s) => {
			return s.date.getDate() <= date.getDate();
		});
		return this.availableStorypoint(schedule);
	};
}
