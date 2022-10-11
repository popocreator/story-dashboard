import Story from './Story';

export default class Sprint {
	id: string;
	order: number;
	startDate: Date;
	endDate: Date;
	stories: Story[];

	constructor(startDate: Date, endDate: Date) {
		this.startDate = startDate;
		this.endDate = endDate;
	}
}
