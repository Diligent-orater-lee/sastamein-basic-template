import { createReducer, on } from "@ngrx/store";
import { getUserDetails, logoutAction } from "./auth.actions";
import { AuthState } from "./auth.state";

const initialState: AuthState = {
  user: {},
  error: '',
  loading: false,
  isLoggedIn: false
}

export const authReducer = createReducer<AuthState>(
  initialState,
  on(getUserDetails, (state, action) => ({
    ...state,
    loading: true
  })),
  on(logoutAction, (state, action) => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');

    return {
      ...state,
      isLoggedIn: false
    }
  })
)
