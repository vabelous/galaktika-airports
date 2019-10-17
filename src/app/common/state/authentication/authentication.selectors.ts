import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReducers from '@air-common/state/reducers';

const selectLoginData = createFeatureSelector('auth');

export const selectAccessToken = createSelector(
	selectLoginData,
	(state: fromReducers.authentication.AuthenticationState) => state.access_token
);

export const selectRefreshToken = createSelector(
	selectLoginData,
	(state: fromReducers.authentication.AuthenticationState) => state.refresh_token
);
