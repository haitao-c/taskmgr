export interface User{
    id?:string; // ?表示可有可无
    email:string;
    password:string;
    name:string;
    avatar:string;      // 头像
}