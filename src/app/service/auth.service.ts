import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

	address: string; 

	constructor(private _http: Http, private router: Router) {

		this.address = "http:://heroapp/api/";
	}

	login(credentials, returnUrl) {

		return this._http.post('http://heroapp/api/login-hero', {params: credentials})

			.subscribe((response1: Response) => {

				let result = response1.json();
				sessionStorage.setItem("_token", result.token);

				this._http.get('http://heroapp/api/authenticate-hero?token=' + result.token)
				.subscribe((response2: Response) => {

					let data = response2.json();
					sessionStorage.setItem('_current_user', JSON.stringify(data.user));

					this.router.navigate([returnUrl]);

				}, error => {

					console.log("Something went wrong!");
				});
			});
	}

	getAuthenticatedHero(token) {

		console.log(token);

		this._http.get('http://heroapp/api/authenticate-hero?token=' + token)
			.map((response2: Response) => {

				let data = response2.json();
				sessionStorage.setItem('_current_user', JSON.stringify(data.user));
			});
	}

	logout() {

		sessionStorage.clear();

		if(!sessionStorage.getItem('_token') || !sessionStorage.getItem('_current_user')) {

			return true;
		}

		return false;
	}

	isLoggedIn() { 

		if(sessionStorage.getItem('_token') && sessionStorage.getItem('_current_user')) {

			return true;
		}

		return false; 
	}

	getToken() {

		let token = sessionStorage.getItem('_token');

		return token;
	}

	getCurrentUser() {

		let user = JSON.parse(sessionStorage.getItem('_current_user'));

		return user;
	}

}