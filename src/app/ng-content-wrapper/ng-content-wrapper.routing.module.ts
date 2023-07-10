import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgContentWrapperComponent } from './ng-content-wrapper.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: NgContentWrapperComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgContentWrapperRoutingModule {}
