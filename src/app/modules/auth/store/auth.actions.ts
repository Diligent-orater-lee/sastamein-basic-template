import { createAction } from "@ngrx/store";

export const getUserDetails = createAction('[Auth] Load User Details');
export const logoutAction = createAction('[Auth] Logout');
