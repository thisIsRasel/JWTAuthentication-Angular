import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
	templateUrl:'./hero-login.component.html'
})
export class HeroLoginComponent implements OnInit {

	loginForm: FormGroup;
	returnUrl: string;

	constructor(
		private authService: AuthService, 
		private router: Router, 
		private route: ActivatedRoute
	) { }

	ngOnInit() {

		this.loginForm = new FormGroup({

			'email': new FormControl('', Validators.required),
			'password': new FormControl('', Validators.required)
		});

		this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'hero-list';
	}

	get email() { return this.loginForm.get('email'); }

	get password() { return this.loginForm.get('password'); }

	loginHero() {

		if(! this.loginForm.invalid) {

			let credentials = JSON.stringify(this.loginForm.value);
			
			this.authService.login(credentials, this.returnUrl);
		} else {

			console.log("Invalid form");
		}
	}
}