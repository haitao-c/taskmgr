import { Component, OnInit } from '@angular/core';
import {getDate} from 'date-fns';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  today = 'day';

  constructor() { }

  ngOnInit() {
    // 图标名字 getDate返回当前几号的数字
    this.today = `day${getDate(new Date())}`;
  }

}
