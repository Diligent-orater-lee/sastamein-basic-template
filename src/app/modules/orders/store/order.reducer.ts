import { createReducer, on } from "@ngrx/store";
import { getOrders } from "./order.actions";
import { OrderState } from "./order.state";

const initialState: OrderState = {
  orders: [],
  error: '',
  loading: false
}

export const orderReducer = createReducer<OrderState>(
  initialState,
  on(getOrders, (state, action) => ({
    ...state,
    loading: true
  }))
)
