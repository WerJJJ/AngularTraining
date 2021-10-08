import { createFeatureSelector, createSelector } from '@ngrx/store';
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

// export const getProducts = createSelector(
//     getProductFeatureState,
//     state => state.products
// );

// export const getError = createSelector(
//     getProductFeatureState,
//     state => state.error
// );
