import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { SwalComponent } from '@toverux/ngsweetalert2';
import { CheckLoginService } from 'app/service/common/check-login.service';

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
    private checkloginService: CheckLoginService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; }
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.router.navigated = false;
        window.scrollTo(0, 0);
      }
    });
  }

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
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/home']);
    }
  }

  /**
   * 切換選單底色
   *
   * @param {any} e
   * @memberof NavComponent
   */
  public sidebarActive(e: any) {
    this.checkloginService.checkLogin();
    this.sideActive = e.srcElement.hash.replace('#/', '');
  }

  /**
   * 登出
   */
  public logout() {
    Cookie.delete('dashboardLogin');
    this.isLogin = false;
    this.checkloginService.checkLogin();
  }

}
