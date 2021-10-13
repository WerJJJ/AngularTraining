import * as productAction from '../actions/product.actions';
import { createReducer, on, Action } from '@ngrx/store';
import { TodoTask } from '../../model/todotask';
import { getTodoTask } from '../selectors/product.selector';


export const TODO_FEATURE_KEY = 'todo';

const todosState : {todo: TodoTask[]} = {
    todo: [
        {
          id: 1,
          title:'Learn Angular',
          description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fugiat ratione dignissimos voluptatem neque nesciunt?',
          date: '2021-10-22',
          isDone: false
        },
        {
          id: 2,
          title:'Tell Nataliya that she is a great mentor',
          description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos adipisci facilis commodi consequuntur inventore omnis autem vitae architecto, iure quos, illo laborum explicabo! Sunt est quos cupiditate, minima ea aspernatur cumque deleniti iure delectus praesentium non esse. Quae facere dignissimos, corporis vel, magni, placeat doloribus fuga officiis aliquam velit veritatis?',
          date: '2021-10-24',
          isDone: true
        },
        {
          id: 3,
          title:'Self-develop',
          description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto autem commodi dolor qui molestias debitis cum voluptate ipsa corrupti minima similique maxime accusantium ut eos, nisi cumque esse rem consequatur odio aliquam. Vero, quisquam voluptatum rerum porro amet tempora nisi mollitia debitis doloremque maxime! Quaerat voluptas magni ea cupiditate qui.',
          date: '2100-01-01',
          isDone: false
        }
      ]
};

export const reducerTodo = createReducer(todosState,
    on(productAction.AddTask, (state, {payload}) => {
        return {
            ...state,
            todo: [...state.todo, payload.todo]
        };
    }),
    on(productAction.DeleteTask, (state, {id}) => {
      return {
          ...state,
          todo: state.todo.filter(item => item.id !== id)
      };
  }),
    on(productAction.EditTask, (state, {payload, idx}) => {
      return {
          ...state,
          todo: state.todo.map((item,index) => {
            if (index === idx) {
              return payload.todo;
            }
            return item;
          })
      };
    }),
    on(productAction.CompleteTask, (state, {id}) => {
      return {
          ...state,
          todo: state.todo.map(item => {
            if (item.id === id) {
              return {...item, isDone: !item.isDone}
            } else {
              return item;
            }
          })
      };
    }),



);

export function reducer(state: {todo: TodoTask[]} | undefined, action: Action) {
    return reducerTodo(state, action);
}
