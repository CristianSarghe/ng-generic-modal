
# Angular Generic Modal

## Customizable Angular modal

### What is it?

`@cristiansarghe/ng-generic-modal` is a _just-add-water_ customizable and lightweight Angular popup.

### Installation

`npm i @cristiansarghe/ng-generic-modal`

### Customization
#### Content

* The modal has 3 parts, driven by `ng-template`s: `modalHeading`, `modalBody` and `modalActions`. You can pass content to any of them in the following way:

```
<ng-generic-modal #modalReference>
	<ng-template #modalHeading>
		This is the heading
	</ng-template>

	<ng-template #modalBody>
		This is the modal body
	</ng-template>

	<ng-template #modalActions>
		<button>This is an action</button>
		<button>And this is another action</button>
	</ng-template>
</ng-generic-modal>
```

#### Opening and hiding
* Given `modalReference` a reference to the modal element, method `modalReference.open()` will open the popup.
* To hide the modal, it's enough to call `modalReference.hide()`.
* To rely less on method calling, the `modal-close` directive allows picking one or more elements **inside the modal templates** that close the modal when clicked. Example: 

```
<ng-generic-modal #modalReference>
	<ng-template #modalActions>
		<button modal-close (click)="myMethod()">Submit</button>
		<button modal-close>Cancel</button>
		<button>Options</button>
	</ng-template>
</ng-generic-modal>
```

In the above example, the Close button will just hide the modal, while the Submit button will run `myMethod()` and then hide the modal. The Options button will not hide the modal, as it doesn't have `modal-close` attached.

* **NOTE**: `open` method can receive a _state_ of the modal (which can be any object or primitive value). That value can be accessed within the modal `ng-template`s by simply targeting the `data` variable:
```
<ng-generic-modal #modalReference>
	<ng-template #modalHeading let-data="data">  // Pass the variable to the template
		This is my name: {{data}}
	</ng-template>
</ng-generic-modal>
```

`data` can be accessed at any time, but it's pointless unless there's anything passed to `.open(state)`

`data` variable does NOT keep its value between popup sessions (gets erased on each `.hide()`)

#### @Input()

| Input                      | Type    | Required                   | Description                                                    |
| -------------------------- | ------- | -------------------------- | ---------------------------------------------------------------|
| hasBackdrop                | boolean | Optional, default: true    | Show a dark background behind the modal whenever it's open     |
| customModalContainerClass  | string  | Optional, default: null    | Add a custom class on modal container                          |
| closeOnBackdropClick       | boolean | Optional, default: true    | Allow closing modal by clicking outside (on the backdrop)      |
| showCloseButton            | boolean | Optional, default: true    | Show or hide the top right X closing button                    |

#### Output()

| Output                     | Type               | Payload type                                                      | Description                        |
| -------------------------- | ------------------ | ----------------------------------------------------------------- | -----------------------------------|
| beforeOpen                 | EventEmitter\<T>    | The type of the passed state or `undefined` if there is no state    | Event emitted before popup opens   |
| afterOpen				     | EventEmitter\<T>    | The type of the passed state or `undefined` if there is no state    | Event emitted after popup opens    |
| beforeHide      	 		 | EventEmitter\<void> | `undefined`                                                         | Event emitted before popup hides   |
| afterHide         	     | EventEmitter\<void> | `undefined`                                                         | Event emitted after popup hides    |
