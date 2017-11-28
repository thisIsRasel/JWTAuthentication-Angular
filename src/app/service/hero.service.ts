import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HeroService {

	constructor(private _http: HttpClient) { }

	getHeroList(token) {

		return this._http.get('http://heroapp/api/heroes?token=' + token);
	}

	sendMessage(token, messageData) {

		this._http.post('http://heroapp/api/send_message?token='+token, {params: messageData})
			.subscribe(data => {

				console.log(data);
			});
	}
}