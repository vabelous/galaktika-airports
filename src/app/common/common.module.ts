import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonPipeModule } from '@air-common/common-pipe.module';
import { CommonDirectiveModule } from '@air-common/common-directive.module';

@NgModule({
	imports: [
		CommonPipeModule,
		CommonDirectiveModule,
		RouterModule
	],
	exports: [
		CommonPipeModule,
		CommonDirectiveModule,
		RouterModule
	]
})
export class AppCommonModule { }
