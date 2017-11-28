import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './hero/signup.component';
import { HeroLoginComponent } from './hero/hero-login.component';
import { HeroListComponent } from './hero/hero-list.component';
import { HomeComponent } from './home.component';
import { SendMessageComponent } from './hero/send-message.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
	{ path: 'hero-signup', component: SignupComponent },
	{ path: 'hero-login', component: HeroLoginComponent },
	{ path: 'hero-list', component: HeroListComponent, canActivate: [ AuthGuard ] }, 
	{ path: 'send-message', component: SendMessageComponent, canActivate: [ AuthGuard ] },
	{ path: 'home', component: HomeComponent },
	{ path: '**', component: HomeComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {


}