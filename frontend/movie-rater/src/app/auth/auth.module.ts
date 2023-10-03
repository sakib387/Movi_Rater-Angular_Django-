import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import{CookieService}from 'ngx-cookie-service'

import { Route,RouterModule } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms'
const routes :Route[]=[
  {
    path:'auth',component:AuthComponent
  }
];

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [CookieService],
  exports:[
    RouterModule
  ]
})
export class AuthModule { }
