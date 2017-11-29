import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { HeroService } from '../service/hero.service';;

@Component({

	template: `
	<div>
		<h3>Inbox</h3>

		<div *ngIf="totalMessage == 0">
			<p>Your inbox is empty!</p>
		</div>

		<table class="table" *ngIf="totalMessage > 0">
			<thead>
				<th>From</th>
				<th>Message</th>
			</thead>

			<tbody>
				<tr *ngFor="let message of messages">
					<td>{{ message.from }}</td>
					<td>{{ message.message }}</td>
				</tr>
			</tbody>
		</table>

		<button class="btn btn-danger" (click)="back()">Back</button>
	</div>
	`
})
export class HeroInboxComponent implements OnInit{

	token: any;
	messages: any;
	hero: any;
	totalMessage: number;

	constructor(private authService: AuthService, private heroService: HeroService, private router: Router) { }

	ngOnInit() {

		this.token = this.authService.getToken();
		this.hero = this.authService.getCurrentUser();

		this.heroService.getMessages(this.token, this.hero.name).subscribe((response) => {

			this.messages = response;
			this.totalMessage = this.messages.length;
		});
	}

	back() {

		this.router.navigate(['hero-list']);
	}
}