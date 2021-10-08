import * as productAction from '../actions/product.actions';
import { createReducer, on, Action } from '@ngrx/store';
import { TodoTask } from '../../model/todotask';


export const TODO_FEATURE_KEY = 'todo';

const todosState : {todo: TodoTask[]} = {
    todo: [
        {
          id: 1,
          title:'Learn Angular',
          description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fugiat ratione dignissimos voluptatem neque nesciunt obcaecati officiis totam ipsam sit itaque culpa debitis laudantium quod rerum autem, ipsum asperiores quisquam, provident nemo. Illo optio, ex suscipit, officia in alias magni perspiciatis officiis animi dicta quos possimus minima aperiam atque harum?',
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
   /*  showProductCode: true,
    products: [],
    error: '' */
};

export const reducerTodo = createReducer(todosState,
    // on(productAction.ToggleProductCode, (state, { payload }: any) => {
    //     return {
    //         ...state,
    //         showProductCode: payload
    //     };
    // }),
    // on(productAction.LoadSuccess, (state, { payload }: any) => {
    //     return {
    //         ...state,
    //         products: payload,
    //         error: ''
    //     };
    // }),
    // on(productAction.LoadFail, (state, { payload }: any) => {
    //     return {
    //         ...state,
    //         products: [],
    //         error: payload
    //     };
    // })
    on(productAction.AddTask, (state, {payload}) => {
        return {
            ...state,
            todo: [...state.todo, payload.todo]
        };
    })



);

export function reducer(state: {todo: TodoTask[]} | undefined, action: Action) {
    return reducerTodo(state, action);
}
