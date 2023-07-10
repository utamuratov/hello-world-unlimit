import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css'],
})
export class LifeCycleComponent implements OnInit, OnDestroy {
  /**
   *
   */
  sub1!: Subscription;

  /**
   *
   */
  ngOnInit(): void {
    console.log('NgOnInit');
    const intr = interval(1000);
    this.sub1 = intr.subscribe((w) => {
      console.log(w);
    });
  }

  /**
   *
   */
  ngOnDestroy(): void {
    console.log('OnDestory');
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
  }
}
