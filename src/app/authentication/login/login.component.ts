import { Component, OnInit, HostBinding } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormControlService } from '@air-services/form-control.service';
import { VisitorFormArray, FormControlActions } from '@air-models/visitor';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Login } from '@air-common/state/actions';
import { Store } from '@ngrx/store';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	@HostBinding('class') componentCssClass;
	public loginForm: FormGroup;

	constructor(
		private store: Store<any>,
		private formBuilder: FormBuilder,
		private formControlService: FormControlService,
		private overlayContainer: OverlayContainer,
	) {}

	ngOnInit() {
		this.overlayContainer.getContainerElement().classList.add('authentication');
		this.componentCssClass = 'authentication';
		const formControlActions: VisitorFormArray = this.formControlService.getFormArrayByAction(FormControlActions.Login);
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
		this.store.dispatch(new Login({
			username: this.loginForm.value.ownControls[0],
			password: this.loginForm.value.ownControls[1],
		}));

	}

}
