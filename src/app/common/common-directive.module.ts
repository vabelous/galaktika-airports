import { NgModule } from '@angular/core';
import { SanitizeDirective } from '@air-directives/sanitize.directive';

@NgModule({
	declarations: [
		SanitizeDirective
	],
	exports: [
		SanitizeDirective
	],

})
export class CommonDirectiveModule { }
