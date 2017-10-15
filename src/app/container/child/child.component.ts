import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../service/user/user.service';
import { SwalComponent } from '@toverux/ngsweetalert2';

import { CheckLoginService } from 'app/service/common/check-login.service';

declare let jquery: any;
declare let $: any;

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [UserService]
})
export class ChildComponent implements OnInit {

  @ViewChild('modelClose') modelClose: ElementRef;
  @ViewChild('dialogError') private swalDialogError: SwalComponent;
  @ViewChild('dialogSuccess') private swalDialogSuccess: SwalComponent;

  public datas: any = [];
  public page: number = 1;
  public isLoading: Boolean = true;

  public childusername: String = 'yeeman9487';
  public childpassword: String = '123456';
  public childpasswordRe: String = '123456';
  public childname: String = 'Yee';
  public childgender: String = '男生';
  public childpoint: number = 120;
  public childcode: String = 'B';
  public childschool: String = '臺北市立敦化國民小學';
  public childstudentid: String = '10111';

  constructor(
    private router: Router,
    private userService: UserService,
    private checkloginService: CheckLoginService
  ) { }

  ngOnInit() {
    this.checkloginService.checkLogin();
    this.userGetChild();
  }

  public async userGetChild() {
    await this.userService.userGetChild().subscribe(
      result => {
        this.isLoading = false;
        this.datas = result;
      });
  }

  public async userAddChild(obj) {

    console.log(obj);

    if (this.childpassword != this.childpasswordRe) {
      this.swalDialogError
        .show().then((value) => {
          this.childpassword = '';
          this.childpasswordRe = '';
        });
    } else if (
      this.childusername == '' ||
      this.childpassword == '' ||
      this.childpasswordRe == '' ||
      this.childname == '' ||
      this.childgender == '' ||
      this.childpoint > 1000 ||
      this.childcode == '' ||
      this.childschool == '' ||
      this.childstudentid == ''
    ) {
      this.swalDialogError
        .show().then((value) => {
          this.childpassword = '';
          this.childpasswordRe = '';
          this.childpoint = 0;
        });
    } else {

      let body = {
        childusername: this.childusername,
        childpassword: this.childpassword,
        childname: this.childname,
        childgender: this.childgender,
        childpoint: this.childpoint,
        childcode: this.childcode,
        childschool: this.childschool,
        childstudentid: this.childstudentid
      }


      await this.userService.userAddChild(body).subscribe(
        result => {
          console.log(result);
          if (result.affectedRows > 0) {
            this.swalDialogSuccess
              .show().then((value) => {
                this.modelClose.nativeElement.click();
              });
          } else {
            this.swalDialogError
              .show().then((value) => {
                this.childpassword = '';
                this.childpasswordRe = '';
                this.childpoint = 0;
              });
          }

        });

    }

  }
}
