import { I18nModule } from '@air-modules/i18n.module';
import { NgModule } from '@angular/core';
import { PagesMaterialModule } from './pages-material.module';
import { PagesRoutingModule } from './pages-routing.module';
import { Error403Component } from './error-403';
import { Error404Component } from './error-404';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
	declarations: [
		Error403Component,
		Error404Component
	],
	imports: [
		I18nModule,
		FlexLayoutModule,
		PagesMaterialModule,
		PagesRoutingModule,
	],
	exports: [
		Error403Component,
		Error404Component
	],

})
export class PagesModule { }
