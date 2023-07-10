import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';

const routes: Routes = [
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'ng-template', component: NgTemplateComponent },
  {
    path: 'ng-content',
    loadChildren: () =>
      import('./ng-content-wrapper/ng-content-wrapper.module').then(
        (m) => m.NgContentWrapperModule
      ),
  },
  {
    path: 'life-cycle',
    loadChildren: () =>
      import('./life-cycle/life-cycle.module').then((m) => m.LifeCycleModule),
  },
  {
    path: 'animation',
    loadChildren: () =>
      import('./animation/animation.module').then((m) => m.AnimationModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
