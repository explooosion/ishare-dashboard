import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LogService {

  constructor(
    private http: Http
  ) { }

  /**
   * 取得系統日誌
   *
   * @returns
   * @memberof LogService
   */
  public getLog() {
    return this.http.get('/api/log')
      .map((res) => {
        return res.json() || {}
      });
  }

  /**
   * 新增系統日誌
   *
   * @param {Object} body
   * @returns
   * @memberof LogService
   */
  public addLog(body: Object) {
    return this.http.post('/api/log/add', body)
      .map((res) => {
        return res.json() || {}
      });
  }
}
