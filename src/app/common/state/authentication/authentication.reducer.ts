// import { AuthActions, AuthActionTypes } from '@sfo-store/actions/auth.actions';
import { AuthActions, AuthActionTypes } from '@sfo-actions';

export interface AuthState {
	access_token: string;
	refresh_token: string;
}

export const initialState: AuthState = {
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
