import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'fullTextSearch',
	pure: false
})
export class FullTextSearchPipe implements PipeTransform {

	constructor() { }

	transform(value: any, query: string, field: string): any {
	return query ? value.reduce((prev, next) => {
		if (next[field].toLowerCase().includes(query.toLowerCase())) { prev.push(next); }
		return prev;
		}, []) : value;
	}
}
