import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.state";

const fieldSelector = createFeatureSelector<AuthState>("auth");

export const isLoggedInSelector = createSelector(
  fieldSelector,
  (state: AuthState) => state.isLoggedIn
)
