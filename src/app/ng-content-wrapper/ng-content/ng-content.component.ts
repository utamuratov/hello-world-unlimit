import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  QueryList,
  ViewChild,
} from '@angular/core';
import { RememberMeComponent } from '../remember-me/remember-me.component';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-ng-content',
  templateUrl: './ng-content.component.html',
  styleUrls: ['./ng-content.component.css'],
})
export class NgContentComponent implements AfterContentInit, AfterViewInit {
  /**
   *
   */
  showMessage!: boolean;

  /**
   *
   */
  @ContentChildren(RememberMeComponent)
  rememberMe!: QueryList<RememberMeComponent>;

  /**
   *
   */
  @ViewChild(MessageComponent)
  message!: MessageComponent;

  /**
   *
   */
  @ViewChild('login')
  login!: ElementRef;

  /**
   *
   */
  constructor(private cd: ChangeDetectorRef) {}

  /**
   *
   */
  ngAfterViewInit(): void {
    this.message.days = 7;
    this.login.nativeElement.focus();
    this.login.nativeElement.setAttribute('placeholder', 'Enter your login');
    this.login.nativeElement.classList.add('test');
    this.cd.detectChanges();
  }

  /**
   *
   */
  ngAfterContentInit(): void {
    this.rememberMe.forEach((item) => {
      item.checked.subscribe((w) => {
        this.showMessage = w;
      });
    });
  }
}
