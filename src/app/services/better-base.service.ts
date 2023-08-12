import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BetterBaseService extends BaseService {
  override url = 'http://172.1.1.1:8081/api/v1';
}
