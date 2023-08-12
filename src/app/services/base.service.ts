import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  /**
   *
   */
  url = 'http://172.1.1.1:8080/api/v1';

  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get(this.url + '/users');
  }
}
