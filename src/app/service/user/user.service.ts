import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(
    private http: Http
  ) { }

  /**
   * 使用者登入
   *
   * @param {object} body
   * @returns
   * @memberof UserService
   */
  public userLogin(body: object) {
    return this.http.post('/api/user/login', body)
      .map((res) => {
        return res.json() || {}
      });
  }

  /**
   * 學童資料取得
   *
   * @returns
   * @memberof UserService
   */
  public userGetChild() {
    return this.http.get('/api/child')
      .map((res) => {
        return res.json() || {}
      });
  }

  /**
   * 學童資料新增
   *
   * @param {object} body
   * @returns
   * @memberof UserService
   */
  public userAddChild(body: object) {
    return this.http.post('/api/child/add', body)
      .map((res) => {
        return res.json() || {}
      });
  }

  /**
   * 學童資料更新
   *
   * @param {object} body
   * @returns
   * @memberof UserService
   */
  public userUpdateChild(body: object) {
    return this.http.post('/api/child/update', body)
      .map((res) => {
        return res.json() || {}
      });
  }

  /**
   * 學童資料刪除
   *
   * @param {object} body
   * @returns
   * @memberof UserService
   */
  public userDeleteChild(body: object) {
    return this.http.post('/api/child/delete', body)
      .map((res) => {
        return res.json() || {}
      });
  }

  /**
   * 店家資料取得
   *
   * @returns
   * @memberof UserService
   */
  public userGetStore() {
    return this.http.get('/api/store')
      .map((res) => {
        return res.json() || {}
      });
  }

  /**
   * 店家資料新增
   *
   * @param {object} body
   * @returns
   * @memberof UserService
   */
  public userAddStore(body: object) {
    return this.http.post('/api/store/add', body)
      .map((res) => {
        console.log(res);
        return res.json() || {}
      });
  }

  /**
   * 店家資料更新
   *
   * @param {object} body
   * @returns
   * @memberof UserService
   */
  public userUpdateStore(body: object) {
    return this.http.post('/api/store/update', body)
      .map((res) => {
        return res.json() || {}
      });
  }

  /**
   * 店家資料刪除
   *
   * @param {object} body
   * @returns
   * @memberof UserService
   */
  public userDeleteStore(body: object) {
    return this.http.post('/api/store/delete', body)
      .map((res) => {
        return res.json() || {}
      });
  }

  /**
 * 教職員資料取得
 *
 * @returns
 * @memberof UserService
 */
  public userGetTeacher() {
    return this.http.get('/api/teacher')
      .map((res) => {
        return res.json() || {}
      });
  }

  /**
   * 教職員資料新增
   *
   * @param {object} body
   * @returns
   * @memberof UserService
   */
  public userAddTeacher(body: object) {
    return this.http.post('/api/teacher/add', body)
      .map((res) => {
        return res.json() || {}
      });
  }

  /**
   * 教職員資料更新
   *
   * @param {object} body
   * @returns
   * @memberof UserService
   */
  public userUpdateTeacher(body: object) {
    return this.http.post('/api/teacher/update', body)
      .map((res) => {
        return res.json() || {}
      });
  }

  /**
   * 教職員資料刪除
   *
   * @param {object} body
   * @returns
   * @memberof UserService
   */
  public userDeleteTeacher(body: object) {
    return this.http.post('/api/teacher/delete', body)
      .map((res) => {
        return res.json() || {}
      });
  }
}
