import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroService {

	constructor(private _http: HttpClient) { }

	getHeroList(token) {

		return this._http.get('http://heroapp/api/heroes?token=' + token);
	}

	sendMessage(token, messageData) {

		let data : any;

		return this._http.post('http://heroapp/api/send_message?token=' + token, {params: messageData}).subscribe(response=>{
			console.log(response);
		});
	}

	getMessages(token, heroName) {

		return this._http.get('http://heroapp/api/messages/' + heroName + '?token=' + token);
	}
}