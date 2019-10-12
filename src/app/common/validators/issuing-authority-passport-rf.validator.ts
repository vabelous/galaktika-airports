import { AbstractControl } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';

export const issuingAuthorityPassportRFValidator: ValidatorFn = (formControl: AbstractControl): ValidationErrors => {
	const errors: { [key: string]: string } = {};
	const passportRfPattern = /^[а-ёА-ЯЁ\d\s.,№\-"()]+$/;
	if (formControl.value) {
		const isValid = passportRfPattern.test(formControl.value);
		if (!isValid) {
			errors.issuingAuthorityPassportRF = 'Неверное значение';
		}
	}
	return Object.keys(errors).length > 0 ? errors : null;
};
