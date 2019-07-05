import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  items:string[];

  constructor() { }

  ngOnInit() {
    const nums= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    // map 函数通过对数组当中的每个元素进行处理返回一个新的数组,d就表示原数组中的元素
    this.items = nums.map(d =>`avatars:svg-${d}`);
  }

}
