import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../service/user/user.service';
import { SwalComponent } from '@toverux/ngsweetalert2';

import { CheckLoginService } from 'app/service/common/check-login.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  providers: [UserService]
})
export class StoreComponent implements OnInit {

  @ViewChild('modelClose') modelClose: ElementRef;
  @ViewChild('dialogError') private swalDialogError: SwalComponent;
  @ViewChild('dialogSuccess') private swalDialogSuccess: SwalComponent;

  public datas: any = [];
  public page: number = 1;
  public isLoading: Boolean = true;

  public storeusername: String = 'b01';
  public storepassword: String = '123456';
  public storepasswordRe: String = '123456';
  public storename: String = '好米吉便當專賣';
  public storeaddr: String = '台北市松山區民生東路五段36巷1號';
  public storeadminstore: String = '張大東';
  public storetel: String = '02-2768-9942';
  public storeein: String = '1145671';
  public storetype: String = '';
  public storephoto: String = '';

  constructor(
    private router: Router,
    private userService: UserService,
    private checkloginService: CheckLoginService
  ) { }

  ngOnInit() {
    this.checkloginService.checkLogin();
    this.userGetStore();
  }

  public async userGetStore() {
    await this.userService.userGetStore().subscribe(
      result => {
        this.isLoading = false;
        this.datas = result;
      });
  }

  public async userAddStore(obj) {

    console.log(obj);

    if (this.storepassword != this.storepasswordRe) {
      this.swalDialogError
        .show().then((value) => {
          this.storepassword = '';
          this.storepasswordRe = '';
        });
    } else if (
      this.storeusername == '' ||
      this.storepassword == '' ||
      this.storepasswordRe == '' ||
      this.storename == '' ||
      this.storeaddr == '' ||
      this.storeadminstore == '' ||
      this.storetel == '' ||
      this.storeein == ''
    ) {
      this.swalDialogError
        .show().then((value) => {
          this.storepassword = '';
          this.storepasswordRe = '';
        });
    } else {

      let body = {
        storeusername: this.storeusername,
        storepassword: this.storepassword,
        storename: this.storename,
        storeaddr: this.storeaddr,
        storeadminstore: this.storeadminstore,
        storetel: this.storetel,
        storeein: this.storeein,
        storetype: this.storetype,
        storephoto: this.storephoto
      }

      await this.userService.userAddStore(body).subscribe(
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
                this.storepassword = '';
                this.storepasswordRe = '';
              });
          }

        });

    }

  }

}
