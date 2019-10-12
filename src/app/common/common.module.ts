import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonPipeModule } from '@air-common/common-pipe.module';
import { CommonDirectiveModule } from '@air-common/common-directive.module';

@NgModule({
	imports: [
		RouterModule,
		CommonPipeModule,
		CommonDirectiveModule

	],
	exports: [
		RouterModule,
		CommonPipeModule,
		CommonDirectiveModule
	]
})
export class AppCommonModule { }
