import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { SwalComponent } from '@toverux/ngsweetalert2';

import { UserService } from '../../service/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  @ViewChild('dialogSuccess') private swalDialogSuccess: SwalComponent;

  public userId: String = 'jack123';
  public userPwd: String = 'jack321';

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  public async login() {

    let body = {
      userId: this.userId,
      userPwd: this.userPwd,
      logingroup: 3
    }

    await this.userService.userLogin(body).subscribe(
      result => {
        if (result[0]) {
          Cookie.set('dashboardLogin', JSON.stringify(result[0]));
          this.swalDialogSuccess
            .show().then((value) => { location.href = "./dashboard"; });
        }
      });

  }

}
