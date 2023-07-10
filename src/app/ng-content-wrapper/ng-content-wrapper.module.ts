import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgContentWrapperComponent } from './ng-content-wrapper.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { NgContentWrapperRoutingModule } from './ng-content-wrapper.routing.module';
import { MessageComponent } from './message/message.component';
import { RememberMeComponent } from './remember-me/remember-me.component';

@NgModule({
  declarations: [
    NgContentWrapperComponent,
    NgContentComponent,
    MessageComponent,
    RememberMeComponent,
  ],
  imports: [CommonModule, NgContentWrapperRoutingModule],
})
export class NgContentWrapperModule {}
