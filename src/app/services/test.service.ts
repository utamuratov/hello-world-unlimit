import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor() {}

  getName() {
    return 'Test';
  }

  getNameObservable() {
    return of('Testtt');
  }
}
