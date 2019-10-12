import { AbstractControl } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';
import * as moment from 'moment';

export const issueMinDateValidator: ValidatorFn = (formControl: AbstractControl): ValidationErrors => {
	const issueMinDate = moment('1991-12-25', 'YYYY-MM-DD');
	const date = moment(formControl.value, 'DD-MM-YYYY');
	const errors: { [key: string]: string } = {};
	if (formControl.value) {
		if (!date.isValid()) {
			errors.invalidDate = 'Недопустимое значение';
		}
		if (date.isValid() && date.isBefore(issueMinDate)) {
			errors.invalidMinDate = 'Дата меньше допустимой';
		}
		if (date.isValid() && date.isAfter(moment())) {
			errors.invalid14YearOldDate = 'Дата превышает допустимую';
		}
	}
	return Object.keys(errors).length > 0 ? errors : null;
};
