import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { SwalComponent } from '@toverux/ngsweetalert2';

import { UserService } from '../../service/user/user.service';
import { LogService } from '../../service/log/log.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService, LogService]
})
export class LoginComponent implements OnInit {

  @ViewChild('dialogSuccess') private swalDialogSuccess: SwalComponent;
  @ViewChild('dialogError') private swalDialogError: SwalComponent;
  @ViewChild('dialogErrorGroup') private swalDialogErrorGroup: SwalComponent;

  public userId: String = 'jack123';
  public userPwd: String = 'jack321';
  public logingroup: Number = 0;

  constructor(
    private router: Router,
    private logService: LogService,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  public async login() {

    if (this.logingroup === 0) {
      this.swalDialogErrorGroup.show();
    } else {

      const body = {
        userId: this.userId,
        userPwd: this.userPwd,
        logingroup: this.logingroup
      }

      await this.userService.userLogin(body).subscribe(
        result => {
          if (result[0]) {
            Cookie.set('dashboardLogin', JSON.stringify(result[0]));
            this.swalDialogSuccess.show();
            setTimeout(() => {
              location.href = './dashboard';
            }, 1200);
          } else {
            this.swalDialogError.show();
          }
        });

    }


  }

}
