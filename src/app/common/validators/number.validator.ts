import { AbstractControl } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';

export const numbersValidator: ValidatorFn = (formControl: AbstractControl): ValidationErrors => {
	const numberPattern = /\d+/;
	const errors: { [key: string]: string } = {};
	if (formControl.value) {
		const isValid = numberPattern.test(formControl.value.trim().toLowerCase());
		if (!isValid) {
		errors.invalidNumber = 'Недопустимое значение';
		}
	}
	return Object.keys(errors).length > 0 ? errors : null;
};
