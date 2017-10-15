import { Component, OnInit } from '@angular/core';
import { CheckLoginService } from 'app/service/common/check-login.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  public meals: any = [
    { name: 'Robby', age: 6 },
    { name: 'asd', age: 8 },
    { name: 'Robybtvrby', age: 14 },
    { name: 'ukjyhrtge', age: 1 },
    { name: '234treth', age: 4 },
    { name: 'Robby', age: 6 },
    { name: 'asd', age: 8 },
    { name: 'Robybtvrby', age: 14 },
    { name: 'ukjyhrtge', age: 1 },
    { name: '234treth', age: 4 },
    { name: 'Robby', age: 6 },
    { name: 'asd', age: 8 },
    { name: 'Robybtvrby', age: 14 },
    { name: 'ukjyhrtge', age: 1 },
    { name: '234treth', age: 4 }
  ];
  page: number = 1;

  constructor(
    private checkloginService: CheckLoginService
  ) { }

  ngOnInit() {
    this.checkloginService.checkLogin();
  }

}
