import { createAction, props } from '@ngrx/store';
import { TodoTask } from '../../model/todotask';

export const AddTask = createAction(
    '[Todo] Add Task',
    props<{ payload: {todo: TodoTask} }>()
);

export const DeleteTask = createAction(
    '[Todo] Delete Task',
    props<{ id: number }>()
);

export const EditTask = createAction(
    '[Todo] Edit Task',
    props<{ payload: {todo: TodoTask}, idx : number }>()
);

export const CompleteTask = createAction(
    '[Todo] Edit Task',
    props<{ id: number }>()
);
