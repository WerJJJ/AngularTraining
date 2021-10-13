
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { memoize } from 'lodash';
// import { ProductState } from '../../models/product.model';
// import * as fromRoot from '../../../state/app.state';

// export interface State extends fromRoot.State {
//     product: ProductState;
// }
const getProductFeatureState = createFeatureSelector<any>('todo');

export const getTodoTask = createSelector(
    getProductFeatureState,
    state => state.todo
);

export const getCurrentTask = memoize((id: number) => 
  createSelector(
    getProductFeatureState,
    state => state.todo.find((item: { id: number; }) => item.id === +id)
));

// export const getProducts = createSelector(
//     getProductFeatureState,
//     state => state.products
// );

// export const getError = createSelector(
//     getProductFeatureState,
//     state => state.error
// );
