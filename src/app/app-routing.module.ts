import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  PreloadAllModules,
  PreloadingStrategy,
  Route,
} from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivateGuard } from './guards/activate.guard';
import { LoadGuard } from './guards/load.guard';
import { MatchGuard } from './guards/march.guard';
import { ActivateChildGuard } from './guards/activate-child.guard';
import { DeactivateGuard } from './guards/deactivate.guard';

@Injectable({
  providedIn: 'root',
})
export class PreloadSelectedModulesList implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    return route.data && route.data['preload'] ? load() : of(null);
  }
}

const routes: Routes = [
  {
    path: 'data-binding',
    component: DataBindingComponent,
  },
  { path: 'pipes', component: PipesComponent },
  { path: 'directives', component: DirectivesComponent },
  {
    path: 'ng-template',
    component: NgTemplateComponent,
    canDeactivate: [DeactivateGuard],
  },
  {
    path: 'ng-content',
    loadChildren: () =>
      import('./ng-content-wrapper/ng-content-wrapper.module').then(
        (m) => m.NgContentWrapperModule
      ),
    // data: {
    //   preload: true,
    // },
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
    // canActivate: [ActivateGuard],
    // canLoad: [LoadGuard],
    // canMatch: [MatchGuard],
  },
  {
    path: 'animation',
    loadChildren: () =>
      import('./animation/animation.module').then((m) => m.AnimationModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // preloadingStrategy: PreloadAllModules,
      // preloadingStrategy: PreloadSelectedModulesList,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
