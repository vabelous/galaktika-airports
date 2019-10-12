import { AbstractControl } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';

export const nameValidator: ValidatorFn = (formControl: AbstractControl): ValidationErrors => {
	const namePattern = /^[а-ё-— ]+$/;
	const errors: { [key: string]: string } = {};
	if (formControl.value) {
		const isValid = namePattern.test(formControl.value.trim().toLowerCase());
		if (!isValid) {
		errors.invalidName = 'Недопустимое значение';
		}
	}
	return Object.keys(errors).length > 0 ? errors : null;
};
