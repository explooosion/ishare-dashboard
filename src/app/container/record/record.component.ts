import { Component, OnInit } from '@angular/core';
import { RecordService } from '../../service/record/record.service';
import { CheckLoginService } from 'app/service/common/check-login.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css'],
  providers: [RecordService]
})
export class RecordComponent implements OnInit {

  public datas: any = [];
  public page: Number = 1;
  public isLoading: Boolean = true;

  constructor(
    private recordService: RecordService,
    private checkloginService: CheckLoginService
  ) { }

  ngOnInit() {
    this.checkloginService.checkLogin();
    this.recordList();
  }

  public async recordList() {
    await this.recordService.recordList().subscribe(
      result => {
        this.isLoading = false;
        this.datas = result;
      }
    );
  }

}
