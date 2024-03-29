import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module'
import { SharedModule } from './shared/shared.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material';
import { LoginModule } from './login/login.module';
import {ProjectModule} from './project/project.module';

@NgModule({
  declarations: [   
    AppComponent,
  ],
  imports: [          
    BrowserModule,
    SharedModule,
    CoreModule,
    MatSidenavModule,
    AppRoutingModule,
    LoginModule,
    ProjectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
