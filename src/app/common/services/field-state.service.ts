import { Injectable } from '@angular/core';
import { ValidatorFn, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { TranslateService } from '@ngx-translate/core';
import { FormControlProperties, FormControlFields, DisabledPropertyTypes } from '@air-models/visitor';

@Injectable({ providedIn: 'root' })
export class FieldStateService {

	constructor(private translate: TranslateService) {}

	public getFormControlProperty(formControlProperties: FormControlProperties, field: FormControlFields): any {
	switch (formControlProperties) {
		case FormControlProperties.disabled:
			return this.getDisabledProperty(field);
		case FormControlProperties.validators:
			return this.getValidatorsProperty(field);
		case FormControlProperties.mask:
			return this.getMaskProperty(field);
		case FormControlProperties.defaultValue:
			return this.getDefaultValueProperty(field);
		case FormControlProperties.placeholder:
			return this.getPlaceholderProperty(field);
		case FormControlProperties.label:
			return this.getLabelProperty(field);
		case FormControlProperties.required:
			return this.getRequiredProperty(field);
		default:
			throw new Error(('Unknown kin of form control property!'));
		}
	}

	private getDisabledProperty(field: FormControlFields): string {
		switch (field) {
			case FormControlFields.Login:
			case FormControlFields.Password:
				return DisabledPropertyTypes.enable as string;
			default:
				return DisabledPropertyTypes.enable as string;
		}
	}

	private getValidatorsProperty(field: FormControlFields): Array<ValidatorFn> {
		switch (field) {
			case FormControlFields.Login:
				return [Validators.required];
			case FormControlFields.Password:
				return [Validators.required];
			default:
				return null;
		}
	}

	private getMaskProperty(field: FormControlFields): MaskDTO {
		switch (field) {
			case FormControlFields.Login:
			case FormControlFields.Password:
				return null;
			default:
				return null;
		}
	}

	private getDefaultValueProperty(field: FormControlFields): any {
		switch (field) {
			case FormControlFields.Login:
			case FormControlFields.Password:
				return null;
			default:
				return null;
		}
	}

	private getPlaceholderProperty(field: FormControlFields): Observable<string> {
		switch (field) {
			case FormControlFields.Login:
				return this.translate.get('form-controls.placeholders.login');
			case FormControlFields.Password:
				return this.translate.get('form-controls.placeholders.password');
			default:
				return null;
		}
	}

	private getLabelProperty(field: FormControlFields): Observable<string> {
		switch (field) {
			case FormControlFields.Login:
				return this.translate.get('form-controls.labels.login');
			case FormControlFields.Password:
				return this.translate.get('form-controls.labels.password');
			default:
				return null;
		}
	}

	private getRequiredProperty(field: FormControlFields): boolean {
		switch (field) {
			case FormControlFields.Login:
				return true;
			case FormControlFields.Password:
				return true;
			default:
				return false;
		}
	}
}
