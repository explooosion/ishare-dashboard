import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user/user.service';
import { CheckLoginService } from 'app/service/common/check-login.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  providers: [UserService]
})
export class StoreComponent implements OnInit {

  public datas: any = [];
  public page: number = 1;
  public isLoading: Boolean = true;

  constructor(
    private userService: UserService,
    private checkloginService: CheckLoginService
  ) { }

  ngOnInit() {
    this.checkloginService.checkLogin();
    this.userGetChild();
  }

  public async userGetChild() {
    await this.userService.userGetStore().subscribe(
      result => {
        this.isLoading = false;
        this.datas = result;
        console.log(this.datas);
      });
  }

}
