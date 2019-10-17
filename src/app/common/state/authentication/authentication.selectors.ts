import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReducers from '@sfo-store/reducers';

const selectLoginData = createFeatureSelector('auth');

export const selectAccessToken = createSelector(
	selectLoginData,
	(state: fromReducers.auth.AuthState) => state.access_token
);

export const selectRefreshToken = createSelector(
	selectLoginData,
	(state: fromReducers.auth.AuthState) => state.refresh_token
);
