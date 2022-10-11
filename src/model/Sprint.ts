import Story from './Story';

export default class Sprint {
	id: string = '';
	order: number = 0;
	startDate: Date = new Date();
	endDate: Date = new Date();
	stories: Story[] = [];

	constructor(startDate: Date, endDate: Date) {
		this.startDate = startDate;
		this.endDate = endDate;
	}
}
