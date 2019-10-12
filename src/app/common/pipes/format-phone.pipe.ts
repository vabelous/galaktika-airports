import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'formatPhone',
	pure: false
})
export class FormatPhonePipe implements PipeTransform {
	transform(phone: string): string {
		if (!phone) {
			return '';
		}

		if (phone.length !== 11) {
			return phone;
		}

		return phone.replace(/(\d{1})(\d{3})([0-9\*]{3})([0-9\*]{2})([0-9\*]{2})/, '+$1 ($2) $3-$4-$5');
	}
}
