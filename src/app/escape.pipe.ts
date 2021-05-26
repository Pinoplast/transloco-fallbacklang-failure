import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ndIntlEscape' })
export class IntlEscapePipe implements PipeTransform {
	constructor() {}
	public transform(value: string): string {
		return value.replace(/([{}]+)/g, `'$1`);
	}
}