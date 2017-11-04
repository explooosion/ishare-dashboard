import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../service/user/user.service';
import { SwalComponent } from '@toverux/ngsweetalert2';

import { CheckLoginService } from 'app/service/common/check-login.service';
import { async } from '@angular/core/testing';

import { Teacher } from '../../class/user/teacher';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
  providers: [UserService]
})
export class TeacherComponent implements OnInit {

  @ViewChild('modelClose') modelClose: ElementRef;
  @ViewChild('dialogError') private swalDialogError: SwalComponent;
  @ViewChild('dialogSuccess') private swalDialogSuccess: SwalComponent;
  @ViewChild('dialogUpdateError') private swalDialogUpdateError: SwalComponent;
  @ViewChild('dialogInsertError') private swalDialogInsertError: SwalComponent;
  @ViewChild('dialogDeleteError') private swalDialogDeleteError: SwalComponent;

  public datas: any[] = [];       // 教職員資料集合
  public data: any = new Teacher(); // 教職員資料單筆(by username)
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
    this.userGetTeacher();
  }

  /**
   * 資料欄位驗證
   *
   * @memberof TeacherComponent
   */
  public async userDataCheck() {

    let valid = false;
    let body = {};

    if (Object.keys(this.data).length < 1) {

      this.swalDialogError
        .show().then((value) => {
          this.data.teacherpassword = '';
          this.data.teacherpasswordRe = '';
        });

    } else if (
      this.data.teacherpassword !== this.data.teacherpasswordRe ||
      this.data.teacherpassword === '' ||
      this.data.teacherpasswordRe === ''
    ) {

      this.swalDialogError
        .show().then((value) => {
          this.data.teacherpassword = '';
          this.data.teacherpasswordRe = '';
        });

    } else {

      valid = true;

      body = {
        id: this.data.id,
        teacherusername: this.data.teacherusername,
        teacherpassword: this.data.teacherpassword,
        teachername: this.data.teachername,
        teachergender: this.data.teachergender,
        teachertel: this.data.teachertel,
      }
    }

    if (valid) {
      if (this.isAddMode) {
        this.userAddTeacher(body);    // 新增資料
      } else {
        this.userUpdateTeacher(body); // 更新資料
      }
    }
  }


  /**
   * 取得教職員資料 by username
   *
   * @param {Teacher} obj
   * @memberof TeacherComponent
   */
  public async userGetTeacherById(obj: Teacher) {

    this.data = this.datas.filter(
      (value, index, array) => {
        return value.teacherusername === obj.teacherusername
      }
    )[0];
    // this.data 非陣列（是 Teacher 物件），因此要取出[0]

    // 老師編輯暫時先不用重新輸入密碼
    this.data.teacherpasswordRe = this.data.teacherpassword;

    // 修改表單模式
    this.isAddMode = false;

  }

  /**
   * 取得教職員資料 all
   *
   * @memberof TeacherComponent
   */
  public async userGetTeacher() {
    await this.userService.userGetTeacher().subscribe(
      result => {
        this.isLoading = false;
        this.datas = result;
      });
  }


  /**
   * 新增教職員資料
   *
   * @memberof TeacherComponent
   */
  public async userAddTeacher(body) {

    await this.userService.userAddTeacher(body).subscribe(
      result => {
        if (result.affectedRows > 0) {
          this.swalDialogSuccess
            .show().then((value) => {
              // reset data
              this.userGetTeacher();
              this.modelClose.nativeElement.click();
            });
        } else {
          this.swalDialogInsertError
            .show().then((value) => {
              this.data.teacherpassword = '';
              this.data.teacherpasswordRe = '';
            });
        }
      });

  }


  /**
   * 更新教職員資料
   *
   * @memberof Teacheromponent
   */
  public async userUpdateTeacher(body) {

    await this.userService.userUpdateTeacher(body).subscribe(
      result => {
        if (result.affectedRows > 0) {
          this.swalDialogSuccess
            .show().then((value) => {
              // reset data
              this.userGetTeacher();
              this.modelClose.nativeElement.click();
            });
        } else {
          this.swalDialogUpdateError
            .show().then((value) => {
              this.data.teacherpassword = '';
              this.data.teacherpasswordRe = '';
            });
        }
      });

  }

  /**
   * 刪除教職員資料
   *
   * @memberof TeacherComponent
   */
  public async userDeleteTeacher(obj: Teacher) {

    await this.userService.userDeleteTeacher(obj).subscribe(
      result => {
        if (result.affectedRows > 0) {
          this.swalDialogSuccess
            .show().then((value) => {
              this.userGetTeacher(); // reload
              this.modelClose.nativeElement.click();
            });
        } else {
          this.swalDialogDeleteError
            .show();
        }
      });

  }

}
