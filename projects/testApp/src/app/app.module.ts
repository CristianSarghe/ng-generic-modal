import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GenericModalModule } from 'ng-generic-modal';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		GenericModalModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
