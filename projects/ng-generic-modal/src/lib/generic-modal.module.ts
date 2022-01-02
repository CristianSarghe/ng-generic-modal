import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GenericModalComponent } from './generic-modal.component';
import { ModalCloseDirective } from './modal-close.directive';

@NgModule({
	declarations: [
		GenericModalComponent, 
		ModalCloseDirective
	],
	imports: [
		CommonModule
	],
	exports: [
		GenericModalComponent,
		ModalCloseDirective
	]
})
export class GenericModalModule { }
