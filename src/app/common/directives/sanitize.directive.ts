import { Directive, HostBinding, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Directive({
	selector: '[airSnt]'
})
export class SanitizeDirective implements OnInit {

	constructor(private sanitizer: DomSanitizer) {}

	@Input('airSnt') innerText: string;
	@HostBinding('innerHtml') innerHtml: SafeHtml;

	ngOnInit() {
		this.innerHtml = this.sanitizer.bypassSecurityTrustHtml(this.innerText);
	}

}

