import {
  trigger,
  state,
  style,
  transition,
  animate,
  query,
  stagger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          backgroundColor: 'red',
          opacity: 1,
        })
      ),
      state(
        'closed',
        style({
          backgroundColor: 'green',
          opacity: 0.5,
        })
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.8s')]),
    ]),

    //
    trigger('animate', [
      transition('void => *', [
        animate('1s', style({ backgroundColor: 'yellow' })),
      ]),
      transition('* => void', [
        animate('1s', style({ backgroundColor: 'yellow' })),
      ]),
    ]),

    //
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(100),
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' })),
      ]),
    ]),

    //
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('1000ms', style({ opacity: 0 }))]),
    ]),

    //
    trigger('filterAnimation', [
      transition(':enter, * => 0, * => -1', []),
      transition(':increment', [
        query(
          ':enter',
          [
            style({ opacity: 0, width: 0 }),
            stagger(50, [
              animate('300ms ease-out', style({ opacity: 1, width: '*' })),
            ]),
          ],
          { optional: true }
        ),
      ]),
      transition(':decrement', [
        query(':leave', [
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 0, width: 0 })),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class AnimationComponent {
  isOpened = false;
  second = false;
  third = false;
  count = 0;
  toggle() {
    this.isOpened = !this.isOpened;
  }
}
