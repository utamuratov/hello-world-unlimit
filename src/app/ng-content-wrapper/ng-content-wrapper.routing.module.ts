import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgContentWrapperComponent } from './ng-content-wrapper.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { RouterModule, Routes } from '@angular/router';
import { MessageComponent } from './message/message.component';
import { ActivateChildGuard } from '../guards/activate-child.guard';
import { ActivateGuard } from '../guards/activate.guard';

const routes: Routes = [
  {
    path: '',
    component: NgContentWrapperComponent,
    canActivateChild: [ActivateChildGuard],
    // canActivate: [ActivateGuard],
    children: [{ path: 'test', component: MessageComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgContentWrapperRoutingModule {}
