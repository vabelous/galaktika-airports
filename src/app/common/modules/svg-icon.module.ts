import { NgModule } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({})

export class SvgIconsModule {
	constructor(
		private matIconRegistry: MatIconRegistry,
		private domSanitizer: DomSanitizer
	) {
		this.matIconRegistry.addSvgIcon(
			'logo',
			this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg-icons/logo.svg')
		);
		this.matIconRegistry.addSvgIcon(
			'logo_window',
			this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg-icons/login_window.svg')
		);
	}
}
