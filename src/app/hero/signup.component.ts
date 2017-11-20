import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Http, Headers, RequestOptions} from '@angular/http';

@Component({

	templateUrl: './signup.component.html'
})
export class SignupComponent {

	signupForm: FormGroup;
	options: any;

	constructor(private _http: Http) {

		this.signupForm = new FormGroup({

			'name': new FormControl('', [ Validators.required, Validators.minLength(3) ]),
			'email': new FormControl('', [ Validators.email ]),
			'password': new FormControl('', [ Validators.required, Validators.minLength(5) ])
		});
	}

	get name() { return this.signupForm.get('name'); }

	get email() { return this.signupForm.get('email'); }

	get password() { return this.signupForm.get('password'); }

	onSubmit() {

		let params = JSON.stringify(this.signupForm.value);

		this._http.post('http://heroapp/api/add-hero', {params: params})
			.subscribe( (resp) => {

				console.log(resp);
			});
	}
}