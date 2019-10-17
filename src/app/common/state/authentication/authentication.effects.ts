import { Injectable } from '@angular/core';
import { map, switchMap, tap, filter } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AuthenticationService } from '@air-services/authentication';
import { AuthActionTypes, LoginSuccess, LogoutSuccess } from '@air-common/state/actions';
import { Go } from '@air-common/state/actions';
import { State } from '@air-common/state/';
// import { RequestAccount } from '@air-common/state/actions';

@Injectable()
export class AuthEffects {
	constructor(
		private store: Store<State>,
		private actions$: Actions,
		private authenticationService: AuthenticationService
	) {}

	@Effect()
	login$ = this.actions$.pipe(
		ofType(AuthActionTypes.Login),
		map(({payload}) => payload),
		switchMap(({username, password}) => this.authenticationService.login({username, password})),
		map(response => new LoginSuccess(response)),
		// tap(() => this.store.dispatch(new RequestAccount())),
		tap(() => this.store.dispatch(new Go({
			path: ['/home']
		})))
	);

	@Effect()
	logout$ = this.actions$.pipe(
		ofType(AuthActionTypes.Logout),
		switchMap(() => this.authenticationService.logout()),
		filter(response => response.status === 204),
		map(() => new LogoutSuccess()),
		tap(() => this.store.dispatch(new Go({
			path: ['/authentication/login']
		})))
	);
}
