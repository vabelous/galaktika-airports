import { AuthActions, AuthActionTypes } from '@air-common/state/actions';

export interface AuthenticationState {
	access_token: string;
	refresh_token: string;
}

export const initialState: AuthenticationState = {
	access_token: null,
	refresh_token: null
};

export const reducer = (state = initialState, action: AuthActions) => {
	switch (action.type) {
		case AuthActionTypes.Login:
			return {
				...state,
				pending: true
			};
		case AuthActionTypes.LoginSuccess:
			return {
				...state,
				access_token: action.payload['access_token'],
				refresh_token: action.payload['refresh_token'],
				pending: false
			};
		case AuthActionTypes.Registration:
			return {
				...state,
				pending: true
			};
		case AuthActionTypes.RegistrationSuccess:
			return {
				...state,
				access_token: action.payload['access_token'],
				refresh_token: action.payload['refresh_token'],
				pending: false
			};
		case AuthActionTypes.Logout:
			return {
				...state,
				pending: true
			};
		case AuthActionTypes.LogoutSuccess:
			return {
				...initialState,
				pending: false
			};
		default:
			return state;
	}
};
