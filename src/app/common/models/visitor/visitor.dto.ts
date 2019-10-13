import { FormArray, AbstractControl, ValidatorFn, AbstractControlOptions, AsyncValidatorFn, FormGroup, FormControl } from '@angular/forms';

export class VisitorFormControl extends FormControl {
	mask?: MaskDTO;
	placeholder?: string;
	tagType?: string;
	label?: string;
	name?: string;
	required?: boolean;
	icon?: string;
}

export abstract class VisitorAbstractControl extends AbstractControl {
	mask?: MaskDTO;
	placeholder?: string;
	tagType?: string;
	label?: string;
	name?: string;
	required?: boolean;
	icon?: string;
}

export class VisitorFormArray extends FormArray {

	constructor(
		public controls: VisitorAbstractControl[],
		validatorOrOpts?: ValidatorFn|ValidatorFn[]|AbstractControlOptions|null,
		asyncValidator?: AsyncValidatorFn|AsyncValidatorFn[]|null
	) {
		super(controls, validatorOrOpts, asyncValidator);
	}

	at(index: number): VisitorAbstractControl { return this.controls[index]; }
	insert(index: number, control: VisitorAbstractControl): void {
		super.insert(index, control);
	}
	setControl(index: number, control: VisitorAbstractControl): void {
		super.setControl(index, control);
	}
}

export class VisitorFormGroup extends FormGroup {
	constructor(
		public controls: {[key: string]: VisitorAbstractControl},
		validatorOrOpts?: ValidatorFn|ValidatorFn[]|AbstractControlOptions|null,
		asyncValidator?: AsyncValidatorFn|AsyncValidatorFn[]|null
	) {
			super(controls, validatorOrOpts, asyncValidator);
	}
	registerControl(name: string, control: VisitorAbstractControl): VisitorAbstractControl {
		return super.registerControl(name, control);
	}
	addControl(name: string, control: VisitorAbstractControl): void {
		super.addControl(name, control);
	}
	setControl(name: string, control: VisitorAbstractControl): void {
		super.setControl(name, control);
	}
}
