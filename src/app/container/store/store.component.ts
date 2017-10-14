import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user/user.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  providers: [UserService]
})
export class StoreComponent implements OnInit {

  public datas: any = [];
  public page: number = 1;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userGetChild();
  }

  public async userGetChild() {
    await this.userService.userGetStore().subscribe(
      result => {
        this.datas = result;
        console.log(this.datas);
      });
  }

}
