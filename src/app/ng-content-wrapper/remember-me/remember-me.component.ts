import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-remember-me',
  styleUrls: ['./remember-me.component.css'],
  template: `
    <div>
      <label>
        <!-- ONE WAY -->
        <!-- <input #input type="checkbox" (change)="onChecked(input.checked)" /> -->
        <!-- SECOND WAY -->
        <input #input type="checkbox" (change)="onChecked($event)" />
        Remember me
      </label>
    </div>
  `,
})
export class RememberMeComponent {
  @Output()
  checked = new EventEmitter<boolean>();

  // #ONE WAY
  // onChecked(value: boolean) {
  //   this.checked.emit(value);
  // }

  // SECOND WAY
  onChecked(e: Event) {
    const { checked } = e.target as HTMLInputElement;
    this.checked.emit(checked);
  }
}
