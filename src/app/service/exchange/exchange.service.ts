import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ExchangeService {

  private api: string = '/api/exchange/';

  constructor(private http: Http) { }

  public exchangeList() {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.api)
      .map((res) => {
        return res.json() || {}
      });
  }
}
