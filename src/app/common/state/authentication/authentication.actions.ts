import { Action } from '@ngrx/store';

export enum AuthActionTypes {
	Login = '[Auth] Login',
	LoginSuccess = '[Auth] LoginSuccess',
	Logout = '[Auth] Logout',
	LogoutSuccess = '[Auth] LogoutSuccess',
}

export class Login implements Action {
	readonly type = AuthActionTypes.Login;
	constructor(public payload: LoginParametrsDTO) {}
}

export class LoginSuccess implements Action {
	readonly type = AuthActionTypes.LoginSuccess;
	constructor(public payload: any) {}
}

export class Logout implements Action {
	readonly type = AuthActionTypes.Logout;
}

export class LogoutSuccess implements Action {
	readonly type = AuthActionTypes.LogoutSuccess;
}

export type AuthActions =
	Login
	| LoginSuccess
	| Logout
	| LogoutSuccess;
