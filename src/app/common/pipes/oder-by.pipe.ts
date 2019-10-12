import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'oderBy',
	pure: false
})
export class OderByPipe implements PipeTransform {

	constructor() { }

	transform(value: any, reverse: boolean, field: string, addField?: string, addReverse?: boolean): any {
		if (!value) { return value; }
		const sortingArray = value.sort((prev, next) => {
			let result = 0;
			if (prev.hasOwnProperty(field) || next.hasOwnProperty(field)) {
				result = compareValue(prev[field], next[field]);
				if (result === 0 && addField && prev.hasOwnProperty(addField) && next.hasOwnProperty(addField)) {
					result = compareValue(prev[addField], next[addField], addReverse ? 1 : -1);
					}
				}
			return result;
			}
		);
		return reverse ? sortingArray.reverse() : sortingArray;

		function compareValue(prev, next, _reverse: number = 1) {
			if (typeof(prev) === 'number' && typeof(next) === 'number') {
				return (prev - next) * _reverse;
			} else if (typeof(prev) === 'string' && typeof(next) === 'string') {
				return prev.localeCompare(next) * _reverse;
			} else {
				return 0;
			}
		}
	}

}
