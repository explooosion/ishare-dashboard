import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

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


  constructor() { }

  ngOnInit() {
  }

}
