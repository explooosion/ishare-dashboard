import { Component, OnInit } from '@angular/core';

declare let jquery: any;
declare let $: any;
declare let DataTable: any;

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#dataTable').DataTable();
  }

}
