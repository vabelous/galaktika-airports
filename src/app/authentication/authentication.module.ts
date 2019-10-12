import { FormControlService } from '@sfo-services/form-control.service';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesMaterialModule } from './authentication-material.module';
import { I18nModule } from '@sfo-modules/i18n.module';
import { LoginComponent } from './login';
import { ForbiddenComponent } from './forbidden';
import { NotFoundComponent } from './not-found';
import { PagesRoutingModule } from './authentication-routing.module';
import { FieldStateService } from '@sfo-services/field-state.service';


@NgModule({
	declarations: [
		LoginComponent,
		ForbiddenComponent,
		NotFoundComponent,
	],
	imports: [
		I18nModule,
		ReactiveFormsModule,
		PagesMaterialModule,
		PagesRoutingModule,
	],
	exports: [
		LoginComponent,
		ForbiddenComponent,
		NotFoundComponent,
	],
	providers: [FormControlService, FieldStateService],
})
export class AuthenticationModule { }
