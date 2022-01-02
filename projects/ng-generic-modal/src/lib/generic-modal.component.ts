import { ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { Component, ContentChild, TemplateRef } from '@angular/core';
import { ModalCloseDirective } from './modal-close.directive';

@Component({
	selector: 'ng-generic-modal',
	templateUrl: './generic-modal.component.html',
	styleUrls: ['./generic-modal.component.scss']
})
export class GenericModalComponent<T> {

	@ContentChildren(ModalCloseDirective)
	public set closeButtons(buttons: QueryList<ModalCloseDirective>) {
		buttons?.forEach(button => button.el.nativeElement.addEventListener('click', () => {
			this.hide();
		}));
	}

	@ContentChild('modalHeading') public modalHeading !: TemplateRef<unknown>;
	@ContentChild('modalBody') public modalBody !: TemplateRef<unknown>;
	@ContentChild('modalActions') public modalActions !: TemplateRef<unknown>;

	@Output() public beforeOpen: EventEmitter<T> = new EventEmitter<T>();
	@Output() public afterOpen: EventEmitter<T> = new EventEmitter<T>();
	@Output() public beforeHide: EventEmitter<void> = new EventEmitter<void>();
	@Output() public afterHide: EventEmitter<void> = new EventEmitter<void>();

	@Input() public hasBackdrop = true;
	@Input() public customModalContainerClass: string = null;
	@Input() public closeOnBackdropClick = true;
	@Input() public showCloseButton = true;

	public isOpen = false;

	public data: T;

	constructor() { }

	public open(data?: T): void {
		this.beforeOpen.emit(data);
		this.isOpen = true;
		this.data = data;
		this.afterOpen.emit(data);
	}

	public hide(): void {
		this.beforeHide.emit();
		this.isOpen = false;
		this.data = null;
		this.afterHide.emit();
	}
}
