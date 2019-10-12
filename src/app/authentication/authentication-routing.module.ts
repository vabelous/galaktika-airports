import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login';
import { AuthenticationComponent } from './authentication';
import { ConfirmationComponent } from './confirmation';
import { RegistrationComponent } from './registration';
import { RestoreComponent } from './restore';

@NgModule({
	imports: [
	RouterModule.forChild([
		// {
		// 	path: '',
		// 	component: AuthenticationComponent
		// },
		{
			path: 'login',
			component: LoginComponent
		},
		{
			path: 'confirmation',
			component: ConfirmationComponent
		},
		{
			path: 'registration',
			component: RegistrationComponent
		},
		{
			path: 'restore',
			component: RestoreComponent
		},
	]),
	],
	exports: [
		RouterModule,
	],
})

export class AuthenticationRoutingModule { }
