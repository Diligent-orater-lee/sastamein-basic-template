import { createAction, props } from "@ngrx/store";

export const loadProducts = createAction('[Products] Load Products');
export const searchProducts = createAction('[Search] Search', (query: string) => ({ query }));
export const loadProductsPredictedTexts = createAction('[Products] Load Products Predicted Texts', (result: string) => ({ result }));
export const setProductsPredictedTexts = createAction('[Products] Set Products Predicted Texts', props<{ result: string[] }>());
