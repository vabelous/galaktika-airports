import { Directive, HostBinding, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Directive({
	selector: '[appSanitize]'
})
export class SanitizeDirective implements OnInit {

	constructor(private sanitizer: DomSanitizer) {}

	@Input('appSanitize') innerText: string;
	@HostBinding('innerHtml') innerHtml: SafeHtml;

	ngOnInit() {
		this.innerHtml = this.sanitizer.bypassSecurityTrustHtml(this.innerText);
	}

}

