import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { NgContentComponent } from './ng-content/ng-content.component';

const routes: Routes = [
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'ng-template', component: NgTemplateComponent },
  { path: 'ng-content', component: NgContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
