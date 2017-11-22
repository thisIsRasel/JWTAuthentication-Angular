import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  isLoggedIn: boolean;
  showLoginAndSignup: boolean;

  constructor(
  	private authService: AuthService
  	) {

  	this.isLoggedIn = this.authService.isLoggedIn();
  }

  logout() {

  	this.authService.logout();
  }

}
