import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user/user.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [UserService]
})
export class ChildComponent implements OnInit {

  public datas: any = [];
  public page: number = 1;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userGetChild();
  }

  public async userGetChild() {
    await this.userService.userGetChild().subscribe(
      result => {
        this.datas = result;
        console.log(this.datas);
      });
  }

}
