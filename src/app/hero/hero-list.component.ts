import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers } from '@angular/http';

@Component({
	templateUrl: './hero-list.component.html'
})
export class HeroListComponent implements OnInit {

	header : Headers;
	results : any;

	constructor(private http: HttpClient) {}

	ngOnInit() {

		this.http.get('http://heroapp/api/heroes').subscribe( 
			data => {
				this.results = data;
			},

			err => {
				console.log(err);
			}
		);
	}
}
