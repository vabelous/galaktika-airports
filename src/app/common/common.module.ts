import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonPipeModule } from '@air-common/common-pipe.module';
import { CommonDirectiveModule } from '@air-common/common-directive.module';
import { I18nModule } from '@air-modules/i18n.module';

@NgModule({
	imports: [
		RouterModule,
		CommonPipeModule,
		CommonDirectiveModule,
		I18nModule
	],
	exports: [
		RouterModule,
		CommonPipeModule,
		CommonDirectiveModule,
		I18nModule
	]
})
export class AppCommonModule { }
