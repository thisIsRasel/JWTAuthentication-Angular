import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers } from '@angular/http';

import { AuthService } from '../service/auth.service';

@Component({
	templateUrl: './hero-list.component.html'
})
export class HeroListComponent implements OnInit {

	header : Headers;
	results : any;
	token: string;

	constructor(private http: HttpClient, private authService: AuthService) {}

	ngOnInit() {

		this.token = this.authService.getToken();

		this.http.get('http://heroapp/api/heroes?token=' + this.token).subscribe( 
			data => {
				this.results = data;
			},

			err => {
				console.log(err);
			}
		);
	}
}
