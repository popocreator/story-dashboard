import Member from './Member';
import Task from './Task';

export default class UnexpectedTask {
	id: string = '';
	name: string = '';
	storypoint: number = 0;
	task: Task;
	member: Member;

	constructor(task: Task, member: Member) {
		this.task = task;
		this.member = member;
	}
}
