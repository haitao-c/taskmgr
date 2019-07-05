import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {

  items = [
    {
      id: 1,
      name: 'zhangsan',
    },
    {
      id: 2,
      name: 'lisi',
    },
    {
      id: 3,
      name: 'wangwu',
    }
  ]

  constructor() { }

  ngOnInit() {
  }
// displayUser中的参数与html 中[value]=items中的items关联,所以参数名可以随便取,实际传进来的是items
  displayUser(user:{id:string;name:string}){
      return user ? user.name : '';
  }

}
