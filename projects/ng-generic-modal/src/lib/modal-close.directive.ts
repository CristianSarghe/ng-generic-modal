import { Directive, ElementRef } from '@angular/core';

@Directive({
	// tslint:disable-next-line:directive-selector
	selector: '[modal-close]'
})
export class ModalCloseDirective {
	constructor(
		public el: ElementRef
	) { }
}
