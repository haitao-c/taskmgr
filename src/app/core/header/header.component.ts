import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // @Input:Component本身是一种支持 nest 的结构,Child和Parent之间, 如果Parent需要把数据传输给child并在child自己的页面中显示, 则需要在Child的对应 directive 标示为 input.
  // @Output: Output的数据流方向与input是相反的, 所以那就是child控制parent的数据显示，input是parent控制child的数据显示.
  // header组件为子组件, 向app.component父组件(在app.component.html中app-header标签里监听)传递事件, 参数为void
  @Output() toggle = new EventEmitter<void>();

  @Output() toggleDarkTheme = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }


  openSidebar(){
      this.toggle.emit();   // 发射事件
  }

  onChange(checked:boolean){
    this.toggleDarkTheme.emit(checked);
  }

}
