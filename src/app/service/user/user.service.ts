import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  private api: string = '/api/user/login';

  constructor(
    private http: Http
  ) { }

  public userLogin(body: object) {
    return this.http.post(this.api, body)
      .map((res) => {
        return res.json() || {}
      });
  }

}
