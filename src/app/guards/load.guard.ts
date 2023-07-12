import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanLoadFn,
  Route,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { of } from 'rxjs';

export const LoadGuard: CanLoadFn = (route: Route, segments: UrlSegment[]) => {
  return false;
};
