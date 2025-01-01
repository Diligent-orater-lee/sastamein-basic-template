import { createAction } from "@ngrx/store";

export const loadProducts = createAction('[Products] Load Products');
export const searchProducts = createAction('[Search] Search', (query: string) => ({ query }));
