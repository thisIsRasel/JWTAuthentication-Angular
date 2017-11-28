import { Component } from '@angular/core';

import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'log-buttons',
	template: `
	<div class="text-center">
		<a *ngIf="!isLoggedIn" [routerLink]="['hero-login']" class="btn btn-success">Login</a>
		<a *ngIf="isLoggedIn" (click)="logout()" class="btn btn-danger">Logout</a>
	</div>
	`
})
export class ButtonComponent {

	isLoggedIn: boolean = false;

	constructor(private authService: AuthService, private router: Router) {

		this.isLoggedIn = authService.isLoggedIn();
	}

	logout() {

		if(this.authService.logout()) {

			this.isLoggedIn = false;
			this.router.navigate(['/']);
		}
	}
}