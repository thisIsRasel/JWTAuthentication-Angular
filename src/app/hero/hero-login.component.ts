import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http, Response } from '@angular/http';

@Component({
	templateUrl:'./hero-login.component.html'
})
export class HeroLoginComponent {

	loginForm: FormGroup;

	constructor(private _http: Http) {

		this.loginForm = new FormGroup({

			'email': new FormControl('', Validators.required),
			'password': new FormControl('', Validators.required)
		});
	}

	get email() { return this.loginForm.get('email'); }

	get password() { return this.loginForm.get('password'); }

	loginHero() {

		let credentials = JSON.stringify(this.loginForm.value);
		
		this._http.post('http://heroapp/api/login-hero', {params: credentials})
			.subscribe((resp: Response) => {

				let body = resp.json();

				this._http.get('http://heroapp/api/authenticate-hero?token=' + (body.token)).subscribe((data)=>{

					console.log(data);
				});
			});
	}
}