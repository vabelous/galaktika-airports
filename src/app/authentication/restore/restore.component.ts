import { Component, OnInit } from '@angular/core';
import { HostBinding } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormControlService } from '@air-services/form-control.service';
import { OverlayContainer } from '@angular/cdk/overlay';
import { VisitorFormArray, FormControlActions } from '@air-models/visitor';

@Component({
	selector: 'app-restore',
	templateUrl: './restore.component.html',
	styleUrls: ['./restore.component.scss']
})
export class RestoreComponent implements OnInit {

	@HostBinding('class') componentCssClass;
	public loginForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private formControlService: FormControlService,
		private overlayContainer: OverlayContainer,
	) {

	}

	ngOnInit() {
		this.overlayContainer.getContainerElement().classList.add('authentication');
		this.componentCssClass = 'authentication';
		const formControlActions: VisitorFormArray = this.formControlService.getFormArrayByAction(FormControlActions.Restore);
		this.loginForm = this.formBuilder.group({
			ownControls: this.formBuilder.array([]),
		});
		const ownControls = this.loginForm.get('ownControls') as VisitorFormArray;
		formControlActions.controls.forEach( fc => {
			ownControls.push(fc);
		});
	}
	get ownControls() {
		return this.loginForm.get('ownControls') as VisitorFormArray;
	}

	onSubmit() {

	}
}
