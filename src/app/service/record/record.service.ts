import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RecordService {

  private api: string = '/api/record/';

  constructor(private http: Http) { }

  public recordList() {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.api)
      .map((res) => {
        return res.json() || {}
      });
  }
}
