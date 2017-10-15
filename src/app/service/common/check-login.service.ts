import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class CheckLoginService {

  public isLogin: any = false;

  constructor(
    private router: Router,
  ) { }

  /**
 * 檢查登入
 */
  public checkLogin() {

    this.isLogin = JSON.parse(Cookie.get('dashboardLogin'));

    if (!this.isLogin) {
      this.router.navigate(["/login"]);
    }
  }
}
