import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './hero/signup.component';
import { HeroLoginComponent } from './hero/hero-login.component';
import { HeroListComponent } from './hero/hero-list.component';

const routes: Routes = [
	{ path: 'hero-list', component: HeroListComponent }, 
	{ path: 'hero-signup', component: SignupComponent },
	{ path: 'hero-login', component: HeroLoginComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {


}