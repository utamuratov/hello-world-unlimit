import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'child-cmp',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less'],
})
export class ChildComponent {
  /**
   *
   */
  @Input()
  count!: number;

  /**
   *
   */
  @Output()
  countChange = new EventEmitter<number>();

  /**
   *
   */
  increase() {
    this.count++;
    this.countChange.emit(this.count);
  }
}
