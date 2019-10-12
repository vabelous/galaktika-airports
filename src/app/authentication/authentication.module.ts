import { NgModule } from '@angular/core';
import { ConfirmationComponent } from './confirmation';
import { LoginComponent } from './login';
import { RegistrationComponent } from './registration';
import { ResetComponent } from './reset';
import { RestoreComponent } from './restore';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationMaterialModule } from './authentication-material.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
	declarations: [
		ConfirmationComponent,
		LoginComponent,
		RegistrationComponent,
		ResetComponent,
		RestoreComponent
	],
	imports: [
		ReactiveFormsModule,
		AuthenticationMaterialModule,
		AuthenticationRoutingModule,
	],
})
export class AuthenticationModule { }
