import UnexpectedTask from './UnexpectedTask';
import Story from './Story';
import Member from './Member';

export default class Task {
	id: string = '';
	name: string = '';
	storypoint: number = 0;
	listOfUnexpectedTask: UnexpectedTask[] = [];
	story: Story;
	member: Member;

	constructor(story: Story, member: Member) {
		this.story = story;
		this.member = member;
	}

	// Load Task Progress
	canBeDoneTaskUntil = (date: Date) => {
		let unexpectedlyConsumedStorypoints = 0;
		this.listOfUnexpectedTask.forEach(
			(t) => (unexpectedlyConsumedStorypoints += t.storypoint)
		);

		const memberStorypoint = this.member.availableStorypointUntil(date);
		const canBeDone =
			memberStorypoint > this.storypoint + unexpectedlyConsumedStorypoints;

		return canBeDone;
	};
}
