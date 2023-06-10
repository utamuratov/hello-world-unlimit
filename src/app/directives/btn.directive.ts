import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[btn]',
})
export class BtnDirective implements OnInit {
  /**
   *
   */
  @Input()
  btn: 'default' | 'primary' | 'danger' = 'default';

  /**
   *
   */
  @Input()
  color = '#f3f3f3';

  /**
   *
   */
  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.border = 'none';
    elementRef.nativeElement.style.padding = '20px';
  }

  /**
   *
   */
  ngOnInit() {
    this.elementRef.nativeElement.style.background = this.color;
  }

  /**
   *
   */
  @HostListener('mouseover')
  mouseover() {
    this.elementRef.nativeElement.style.background = 'yellow';
  }

  /**
   *
   */
  @HostListener('mouseleave')
  mouseleave() {
    this.elementRef.nativeElement.style.background = this.color;
  }
}
