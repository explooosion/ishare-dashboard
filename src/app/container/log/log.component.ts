import { Component, OnInit } from '@angular/core';
import { CheckLoginService } from 'app/service/common/check-login.service';

import { LogService } from '../../service/log/log.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css'],
  providers: [LogService]
})
export class LogComponent implements OnInit {

  public datas: any = [];

  public page: number = 1;          // 當前頁碼
  public isLoading: Boolean = true; // 是否載入中

  constructor(
    private logService: LogService,
    private checkloginService: CheckLoginService
  ) { }

  ngOnInit() {
    this.checkloginService.checkLogin();
    this.logList();
  }

  public async logList() {
    await this.logService.getLog().subscribe(
      result => {
        this.isLoading = false;
        this.datas = result;
      }
    )
  }

}
