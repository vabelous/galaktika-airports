import { Injectable } from '@angular/core';

import { map, switchMap, tap, filter } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { Store } from '@ngrx/store';

import { AuthService } from '@sfo-services';

// import { AuthActionTypes, LoginSuccess, LogoutSuccess } from '@sfo-store/actions/auth.actions';
import { AuthActionTypes, LoginSuccess, LogoutSuccess } from '@sfo-actions';
import { Go } from '@sfo-actions';
import { State } from '@sfo-store';
import { RequestAccount } from '@sfo-actions';

@Injectable()
export class AuthEffects {
	constructor(
		private store: Store<State>,
		private actions$: Actions,
		private authService: AuthService
	) {}

	@Effect()
	login$ = this.actions$.pipe(
		ofType(AuthActionTypes.Login),
		map(({payload}) => payload),
		switchMap(({username, password}) => this.authService.login({username, password})),
		map(response => new LoginSuccess(response)),
		tap(() => this.store.dispatch(new RequestAccount())),
		tap(() => this.store.dispatch(new Go({
			path: ['/sfo/reasons']
		})))
	);

	@Effect()
	logout$ = this.actions$.pipe(
		ofType(AuthActionTypes.Logout),
		switchMap(() => this.authService.logout()),
		filter(response => response.status === 204),
		map(() => new LogoutSuccess()),
		tap(() => this.store.dispatch(new Go({
			path: ['/pages/login']
		})))
	);
}
