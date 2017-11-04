import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../service/user/user.service';
import { SwalComponent } from '@toverux/ngsweetalert2';

import { CheckLoginService } from 'app/service/common/check-login.service';
import { async } from '@angular/core/testing';

import { Child } from '../../class/user/child';

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
  @ViewChild('dialogUpdateError') private swalDialogUpdateError: SwalComponent;
  @ViewChild('dialogInsertError') private swalDialogInsertError: SwalComponent;
  @ViewChild('dialogDeleteError') private swalDialogDeleteError: SwalComponent;

  public datas: any[] = [];       // 學生資料集合
  public data: any = new Child(); // 學生資料單筆(by username)
  public isAddMode: Boolean = true; // 表單模式(新增/編輯)

  public page: Number = 1;          // 當前頁碼
  public isLoading: Boolean = true; // 是否載入中

  constructor(
    private router: Router,
    private userService: UserService,
    private checkloginService: CheckLoginService
  ) { }

  ngOnInit() {
    this.checkloginService.checkLogin();
    this.userGetChild();
  }

  /**
   * 資料欄位驗證
   *
   * @memberof ChildComponent
   */
  public async userDataCheck() {

    let valid = false;
    let body = {};

    if (Object.keys(this.data).length < 1) {

      this.swalDialogError
        .show().then((value) => {
          this.data.childpassword = '';
          this.data.childpasswordRe = '';
        });

    } else if (
      this.data.childpassword !== this.data.childpasswordRe ||
      this.data.childpassword === '' ||
      this.data.childpasswordRe === ''
    ) {

      this.swalDialogError
        .show().then((value) => {
          this.data.childpassword = '';
          this.data.childpasswordRe = '';
        });

    } else {

      valid = true;

      body = {
        id: this.data.id,
        childusername: this.data.childusername,
        childpassword: this.data.childpassword,
        childname: this.data.childname,
        childgender: this.data.childgender,
        childpoint: this.data.childpoint,
        childcode: this.data.childcode,
        childschool: this.data.childschool,
        childstudentid: this.data.childstudentid
      }
    }

    if (valid) {
      if (this.isAddMode) {
        this.userAddChild(body);    // 新增資料
      } else {
        this.userUpdateChild(body); // 更新資料
      }
    }
  }


  /**
   * 取得學生資料 by username
   *
   * @param {Child} obj
   * @memberof ChildComponent
   */
  public async userGetChildById(obj: Child) {

    this.data = this.datas.filter(
      (value, index, array) => {
        return value.childusername === obj.childusername
      }
    )[0];

    console.log(this.data);
    // this.data 非陣列（是 Child 物件），因此要取出[0]

    // 老師編輯暫時先不用重新輸入密碼
    this.data.childpasswordRe = this.data.childpassword;

    // 修改表單模式
    this.isAddMode = false;

  }

  /**
   * 取得學生資料 all
   *
   * @memberof ChildComponent
   */
  public async userGetChild() {
    await this.userService.userGetChild().subscribe(
      result => {
        this.isLoading = false;
        this.datas = result;
      });
  }


  /**
   * 新增學生資料
   *
   * @memberof ChildComponent
   */
  public async userAddChild(body) {

    await this.userService.userAddChild(body).subscribe(
      result => {
        if (result.affectedRows > 0) {
          this.swalDialogSuccess
            .show().then((value) => {
              this.userGetChild();
              this.modelClose.nativeElement.click();
            });
        } else {
          this.swalDialogInsertError
            .show().then((value) => {
              this.data.childpassword = '';
              this.data.childpasswordRe = '';
              this.data.childpoint = 0;
            });
        }
      });

  }


  /**
   * 更新學生資料
   *
   * @memberof ChildComponent
   */
  public async userUpdateChild(body) {

    await this.userService.userUpdateChild(body).subscribe(
      result => {
        if (result.affectedRows > 0) {
          this.swalDialogSuccess
            .show().then((value) => {
              this.userGetChild();
              this.modelClose.nativeElement.click();
            });
        } else {
          this.swalDialogUpdateError
            .show().then((value) => {
              this.data.childpassword = '';
              this.data.childpasswordRe = '';
              this.data.childpoint = 0;
            });
        }
      });

  }

  /**
   * 刪除學生資料
   *
   * @memberof ChildComponent
   */
  public async userDeleteChild(obj: Child) {

    await this.userService.userDeleteChild(obj).subscribe(
      result => {
        if (result.affectedRows > 0) {
          this.swalDialogSuccess
            .show().then((value) => {
              this.userGetChild(); // reload
              this.modelClose.nativeElement.click();
            });
        } else {
          this.swalDialogDeleteError
            .show();
        }
      });

  }
}
