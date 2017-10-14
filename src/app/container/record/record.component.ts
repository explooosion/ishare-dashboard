import { Component, OnInit } from '@angular/core';
import { RecordService } from '../../service/record/record.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css'],
  providers: [RecordService]
})
export class RecordComponent implements OnInit {

  public datas: any = [];
  public page: number = 1;

  constructor(
    private recordService: RecordService
  ) { }

  ngOnInit() {
    this.recordList();
  }

  public async recordList() {
    await this.recordService.recordList().subscribe(
      result => {
        this.datas = result;
      }
    );
  }

}
