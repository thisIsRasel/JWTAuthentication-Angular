import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared.module';

import { HeroListComponent } from './hero-list.component';
import { SendMessageComponent } from './send-message.component';
import { SignupComponent } from './signup.component';
import { HeroLoginComponent } from './hero-login.component';
import { HeroInboxComponent } from './hero-inbox.component';

import { AuthService } from '../service/auth.service';
import { HeroService } from '../service/hero.service';

@NgModule({
	declarations: [ HeroListComponent, SignupComponent, HeroLoginComponent, SendMessageComponent, HeroInboxComponent ],
	imports: [ CommonModule, FormsModule, ReactiveFormsModule, SharedModule ],
	exports: [],
	providers: [ AuthService, HeroService ]
})
export class HeroModule {

}