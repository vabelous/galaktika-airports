import { NgModule } from '@angular/core';
import { ConfirmationComponent } from './confirmation';
import { LoginComponent } from './login';
import { RegistrationComponent } from './registration';
import { RestoreComponent } from './restore';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationMaterialModule } from './authentication-material.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication';

@NgModule({
	declarations: [
		AuthenticationComponent,
		ConfirmationComponent,
		LoginComponent,
		RegistrationComponent,
		RestoreComponent
	],
	imports: [
		ReactiveFormsModule,
		AuthenticationMaterialModule,
		AuthenticationRoutingModule,
	],
})
export class AuthenticationModule { }
