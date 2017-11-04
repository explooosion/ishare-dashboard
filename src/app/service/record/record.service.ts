import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RecordService {

  constructor(private http: Http) { }

  public recordList() {
    return this.http.get('/api/record/')
      .map((res) => {
        return res.json() || {}
      });
  }
}
