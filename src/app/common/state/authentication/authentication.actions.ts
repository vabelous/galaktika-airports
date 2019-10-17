import { Action } from '@ngrx/store';

export enum AuthActionTypes {
	Login = '[Auth] Login',
	LoginSuccess = '[Auth] LoginSuccess',
	Registration = '[Auth] Registration',
	RegistrationSuccess = '[Auth] RegistrationSuccess',
	Logout = '[Auth] Logout',
	LogoutSuccess = '[Auth] LogoutSuccess',
}

export class Login implements Action {
	readonly type = AuthActionTypes.Login;
	constructor(public payload: RequestLoginParametrsDTO) {}
}

export class LoginSuccess implements Action {
	readonly type = AuthActionTypes.LoginSuccess;
	constructor(public payload: MetaLoginDTO) {}
}

export class Registration implements Action {
	readonly type = AuthActionTypes.Registration;
	constructor(public payload: RequestRegistrationParametrsDTO) {}
}

export class RegistrationSuccess implements Action {
	readonly type = AuthActionTypes.RegistrationSuccess;
	constructor(public payload: MetaRegistrationDTO) {}
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
	| Registration
	| RegistrationSuccess
	| Logout
	| LogoutSuccess;
