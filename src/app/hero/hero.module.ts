import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HeroListComponent } from './hero-list.component';
import { SignupComponent } from './signup.component';
import { HeroLoginComponent } from './hero-login.component';

import { AuthService } from '../service/auth.service';

@NgModule({
	declarations: [ HeroListComponent, SignupComponent, HeroLoginComponent ],
	imports: [ CommonModule, FormsModule, ReactiveFormsModule ],
	exports: [],
	providers: [ AuthService ]
})
export class HeroModule {

}