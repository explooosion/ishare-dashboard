import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { SwalComponent } from '@toverux/ngsweetalert2';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @ViewChild('dialogLogout') private swalDialogLogout: SwalComponent;

  public sideActive: String = 'home';
  public isLogin: any = false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.reloadRedirect();
  }

  /**
   * 權限檢查
   *
   * @memberof NavComponent
   */
  public reloadRedirect() {
    this.isLogin = JSON.parse(Cookie.get('dashboardLogin'));
    if (!this.isLogin) {
      this.router.navigate(["/login"]);
    } else {

      console.log(this.isLogin);
      this.router.navigate(["/home"]);
    }
  }

  /**
   * 切換選單底色
   *
   * @param {any} e
   * @memberof NavComponent
   */
  public sidebarActive(e: any) {
    this.checkLogin();
    this.sideActive = e.srcElement.hash.replace('#/', '');
  }

  /**
   * 檢查登入
   */
  public checkLogin() {
    this.isLogin = JSON.parse(Cookie.get('dashboardLogin'));
    if (!this.isLogin) {
      this.router.navigate(["/login"]);
    }
  }


  /**
   * 登出
   */
  public logout() {
    Cookie.delete('dashboardLogin');
    this.isLogin = false;
    this.router.navigate(['/login']);
    // location.reload();
  }

}
