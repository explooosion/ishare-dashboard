import { Component, OnInit } from '@angular/core';
import { RecordService } from '../../service/record/record.service';

declare let jquery: any;
declare let $: any;
declare let DataTable: any;

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css'],
  providers: [RecordService]
})
export class RecordComponent implements OnInit {

  public datas: any;

  constructor(
    private recordService: RecordService
  ) { }

  ngOnInit() {
    this.recordList();
    $('#dataTable').DataTable();
  }

  public async recordList() {
    await this.recordService.recordList().subscribe(
      result => {
        console.log(result);
        this.datas = result[0];
      }
    );
  }

}
