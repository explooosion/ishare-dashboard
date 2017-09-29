import { Component, OnInit } from '@angular/core';

import { ExchangeService } from '../../service/exchange/exchange.service';
import { async } from '@angular/core/testing';

declare let jquery: any;
declare let $: any;
declare let DataTable: any;

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css'],
  providers: [ExchangeService]
})
export class ExchangeComponent implements OnInit {

  public datas: any;

  constructor(
    private exchangeService: ExchangeService
  ) { }

  ngOnInit() {
    this.exchangeList();
    $('#dataTable').DataTable();
  }

  public async exchangeList() {
    await this.exchangeService.exchangeList().subscribe(
      result => {
        this.datas = result[0];
        console.log(this.datas);
      }
    );
  }

}
