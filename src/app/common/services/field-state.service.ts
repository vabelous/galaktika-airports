import { Injectable } from '@angular/core';
import { ValidatorFn, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { TranslateService } from '@ngx-translate/core';
import { FormControlProperties, FormControlFields, DisabledPropertyTypes } from '@air-models/visitor';
import { emailValidator } from '@air-validators/email.validator';
import { nameValidator } from '@air-validators/name.validator';

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
		case FormControlProperties.icon:
			return this.getIconProperty(field);
		case FormControlProperties.type:
				return this.getTypeProperty(field);
		case FormControlProperties.defaultValue:
			return this.getDefaultValueProperty(field);
		case FormControlProperties.placeholder:
			return this.getPlaceholderProperty(field);
		case FormControlProperties.label:
			return this.getLabelProperty(field);
		case FormControlProperties.required:
			return this.getRequiredProperty(field);
		default:
			throw new Error(('Unknown kind of form control property!'));
		}
	}

	private getDisabledProperty(field: FormControlFields): string {
		switch (field) {
			case FormControlFields.Login:
			case FormControlFields.Password:
			case FormControlFields.PasswordConfirm:
			case FormControlFields.firstName:
			case FormControlFields.lastName:
				return DisabledPropertyTypes.enable as string;
			default:
				return DisabledPropertyTypes.enable as string;
		}
	}

	private getValidatorsProperty(field: FormControlFields): Array<ValidatorFn> {
		switch (field) {
			case FormControlFields.Login:
				return [Validators.required, emailValidator];
			case FormControlFields.Password:
			case FormControlFields.PasswordConfirm:
				return [Validators.required];
			case FormControlFields.firstName:
			case FormControlFields.lastName:
				return [Validators.required, nameValidator];
			default:
				return null;
		}
	}

	private getMaskProperty(field: FormControlFields): MaskDTO {
		switch (field) {
			case FormControlFields.Login:
			case FormControlFields.Password:
			case FormControlFields.PasswordConfirm:
			case FormControlFields.firstName:
			case FormControlFields.lastName:
				return null;
			default:
				return null;
		}
	}

	private getIconProperty(field: FormControlFields): string {
		switch (field) {
			case FormControlFields.Login:
				return 'mail';
			case FormControlFields.Password:
			case FormControlFields.PasswordConfirm:
				return 'vpn_key';
			case FormControlFields.firstName:
			case FormControlFields.lastName:
				return 'account_circle';
			default:
				return null;
		}
	}
	private getTypeProperty(field: FormControlFields): string {
		switch (field) {
			case FormControlFields.Login:
			case FormControlFields.firstName:
			case FormControlFields.lastName:
				return 'text';
			case FormControlFields.Password:
			case FormControlFields.PasswordConfirm:
				return 'password';
			default:
				return null;
		}
	}

	private getDefaultValueProperty(field: FormControlFields): any {
		switch (field) {
			case FormControlFields.Login:
			case FormControlFields.Password:
			case FormControlFields.PasswordConfirm:
			case FormControlFields.firstName:
			case FormControlFields.lastName:
				return null;
			default:
				return null;
		}
	}

	private getPlaceholderProperty(field: FormControlFields): Observable<string> {
		switch (field) {
			case FormControlFields.Login:
				return this.translate.get('visitor.placeholders.login');
			case FormControlFields.Password:
				return this.translate.get('visitor.placeholders.password');
			case FormControlFields.PasswordConfirm:
				return this.translate.get('visitor.placeholders.passwordConfirm');
			case FormControlFields.firstName:
				return this.translate.get('visitor.placeholders.firstName');
			case FormControlFields.lastName:
				return this.translate.get('visitor.placeholders.lastName');
			default:
				return null;
		}
	}

	private getLabelProperty(field: FormControlFields): Observable<string> {
		switch (field) {
			case FormControlFields.Login:
				return this.translate.get('visitor.labels.login');
			case FormControlFields.Password:
				return this.translate.get('visitor.labels.password');
			case FormControlFields.PasswordConfirm:
				return this.translate.get('visitor.labels.passwordConfirm');
			case FormControlFields.firstName:
				return this.translate.get('visitor.labels.firstName');
			case FormControlFields.lastName:
				return this.translate.get('visitor.labels.lastName');
			default:
				return null;
		}
	}

	private getRequiredProperty(field: FormControlFields): boolean {
		switch (field) {
			case FormControlFields.Login:
			case FormControlFields.Password:
			case FormControlFields.PasswordConfirm:
			case FormControlFields.firstName:
			case FormControlFields.lastName:
				return true;
			default:
				return false;
		}
	}
}
