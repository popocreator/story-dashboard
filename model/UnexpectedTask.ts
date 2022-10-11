import Member from './Member';
import Task from './Task';

export default class UnexpectedTask {
	id: string;
	name: string;
	storypoint: number;
	task: Task;
	member: Member;
}
