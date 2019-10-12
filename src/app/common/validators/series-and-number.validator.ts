import { AbstractControl } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';

export const seriesAndNumberValidator: ValidatorFn = (formControl: AbstractControl): ValidationErrors => {
	const seriesAndNumberPattern = /^([A-Za-z\d]+-)?[A-Za-z\d]+$/;
	const errors: { [key: string]: string } = {};
	if (formControl.value) {
		const isValid = seriesAndNumberPattern.test(formControl.value);
		if (!isValid) {
		errors.invalidSeriesAndNumber = 'Недопустимое значение';
		}
	}
	return Object.keys(errors).length > 0 ? errors : null;
};
