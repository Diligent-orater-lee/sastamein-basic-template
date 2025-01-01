import { createReducer, on } from "@ngrx/store";
import { getUserDetails } from "./auth.actions";
import { AuthState } from "./auth.state";

const initialState: AuthState = {
  user: {},
  error: '',
  loading: false
}

export const authReducer = createReducer<AuthState>(
  initialState,
  on(getUserDetails, (state, action) => ({
    ...state,
    loading: true
  }))
)
