import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers } from '@angular/http';

import { AuthService } from '../service/auth.service';
import { HeroService } from '../service/hero.service';

@Component({
	templateUrl: './hero-list.component.html'
})
export class HeroListComponent implements OnInit {

	header : Headers;
	results : any;
	token: string;

	constructor(private http: HttpClient, private authService: AuthService, private heroService: HeroService) {}

	ngOnInit() {

		this.token = this.authService.getToken();

		this.heroService.getHeroList(this.token).subscribe((data) => {

			this.results = data;
		});
	}
}
