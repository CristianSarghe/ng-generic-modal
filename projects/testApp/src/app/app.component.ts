import { Component } from '@angular/core';

@Component({
	// tslint:disable-next-line:component-selector
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {

	public log(text: any): void {
		console.log(text);
	}
}
