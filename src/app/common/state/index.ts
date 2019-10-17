import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../../environments/environment';
import * as fromReducers from './reducers';
import { RouterStateUrl } from '@air-common/state/router';

import {
	AuthEffects,
	RouterEffects,
} from '@air-common/state/effects';

export interface State {
	authentication: fromReducers.authentication.AuthenticationState;
	router: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
	authentication: fromReducers.authentication.reducer,
	router: routerReducer
};

export const effects = [
	AuthEffects,
	RouterEffects,
];

export const metaReducers: MetaReducer<State>[] = !environment.production
	? [storeFreeze]
	: [];
