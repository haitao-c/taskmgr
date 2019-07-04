import { NgModule,Optional,SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module'
import {MatIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";
import { loadSvgResources } from '../utils/svg.util';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [HeaderComponent,FooterComponent,SidebarComponent],// 本module中可用的模块,如果其他模块也需要使用,需要导出
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parent:CoreModule,
  ir:MatIconRegistry, ds:DomSanitizer){
    if (parent){
      throw new Error('模块已经存在,不能再次加载！');
    }
    loadSvgResources(ir,ds)
  }

}
