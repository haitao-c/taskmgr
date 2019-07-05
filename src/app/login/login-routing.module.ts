import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';
 

const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'register', component:RegisterComponent  }  
    
];

@NgModule({
    // RouterModule.forChild() 与 Router.forRoot() 方法类似，但它只能应用在特性模块中
    // 根模块中使用 forRoot()，子模块中使用 forChild()
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class LoginRoutingModule {}
