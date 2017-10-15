import { Component, OnInit } from '@angular/core';

import { CheckLoginService } from 'app/service/common/check-login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private checkloginService: CheckLoginService
  ) { }

  ngOnInit() {
    this.checkloginService.checkLogin();
  }

}
