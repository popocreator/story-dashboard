import Sprint from './Sprint';
import Task from './Task';
import UnexpectedTask from './UnexpectedTask';

export default class Story {
	id: string = '';
	name: string = '';
	storypoint: number = 0;
	taskList: Task[] = [];
	sprint: Sprint;

	constructor(sprint: Sprint) {
		this.sprint = sprint;
	}

	// Expected Task
	addTask = (task: Task) => {};
	removeTask = (task: Task) => {};

	// Unexpected Task
	addUnexpectedTask = (unexpectedTask: UnexpectedTask) => {};
	removeUnexpectedTask = (unexpectedTask: UnexpectedTask) => {};
}
