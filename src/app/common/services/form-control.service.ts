import { Injectable } from '@angular/core';
import { $enum } from 'ts-enum-util';
import { FieldStateService } from '@air-services/field-state.service';
import { FormBuilder } from '@angular/forms';
import { VisitorFormControl } from '@air-models/visitor/visitor.dto';
import { VisitorFormArray } from '@air-models/visitor/visitor.dto';
import { FormControlFields } from '@air-models/visitor';
import { FormControlActions } from '@air-models/visitor';
import { FormControlProperties } from '@air-models/visitor';

export type SetOfFormControlFields = Set<FormControlFields>;

export type FormControlConfig = Map<string, Set<FormControlFields>>;

export type FormContolFieldsWithFormContolList = Map<FormControlFields, VisitorFormControl>;

@Injectable({ providedIn: 'root' })
export class FormControlService {

	private formControlConfig: FormControlConfig;

	constructor(
		private fb: FormBuilder,
		private fieldStateService: FieldStateService,
	) {
		this.formControlConfig = this.getFormControlActionsConfig();
	}

	getFormArrayByAction(action: FormControlActions): VisitorFormArray {
		const formArray: VisitorFormArray = this.fb.array([]);
		const mapOfAuthorizationFieldsAndFC: FormContolFieldsWithFormContolList = this.getFormContolFieldsWithFormContolList(action);
		mapOfAuthorizationFieldsAndFC.forEach( element => {
			formArray.push(element);
		});
		return formArray;
	}

	private getFormContolFieldsWithFormContolList(action: FormControlActions): FormContolFieldsWithFormContolList {
		const result: FormContolFieldsWithFormContolList = new Map();
		const fields: SetOfFormControlFields  = this.formControlConfig.get(action.toString());
		fields.forEach(field => result.set(field, this.getFiedlState(field)));
		return result;
	}

	private getFiedlState(field: FormControlFields): VisitorFormControl {
		const fc = new VisitorFormControl();
		fc.setValidators(this.fieldStateService.getFormControlProperty(FormControlProperties.validators, field));
		fc.setValue(this.fieldStateService.getFormControlProperty(FormControlProperties.defaultValue, field));
		fc[this.fieldStateService.getFormControlProperty(FormControlProperties.disabled, field)]();
		fc.placeholder = this.fieldStateService.getFormControlProperty(FormControlProperties.placeholder, field);
		fc.mask = this.fieldStateService.getFormControlProperty(FormControlProperties.mask, field);
		fc.icon = this.fieldStateService.getFormControlProperty(FormControlProperties.icon, field);
		fc.type = this.fieldStateService.getFormControlProperty(FormControlProperties.type, field);
		fc.label = this.fieldStateService.getFormControlProperty(FormControlProperties.label, field);
		fc.required = this.fieldStateService.getFormControlProperty(FormControlProperties.required, field);
		fc.name = field.toString();
		fc.updateValueAndValidity();
		return fc;
	}

	private getFormControlActionsConfig(): FormControlConfig {
		const formControlConfig: FormControlConfig = new Map();
		$enum(FormControlActions).forEach((action) => {
			let properties: Set<FormControlFields>;
			properties = $enum.visitValue(action.toString()).with({
				[FormControlActions.Login]: () => {
					return new Set<FormControlFields>([
						FormControlFields.Login,
						FormControlFields.Password
					]);
				},
				[FormControlActions.Restore]: () => {
					return new Set<FormControlFields>([
						FormControlFields.Login
					]);
				},
			});
			formControlConfig.set(action.toString(), properties);
		});
		return formControlConfig;
	}
}
