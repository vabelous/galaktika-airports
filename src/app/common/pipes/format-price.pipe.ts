import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'formatPrice',
	pure: false
})
export class FormatPricePipe implements PipeTransform {
	transform(price: number): string {
		if (price === null || isNaN(Number(price))) {
			return '';
		}

		if (typeof price === 'number') {
			return price.toFixed(2).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		}

		if (typeof price === 'string') {
			return Number(price).toFixed(2).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		}
	}
}
