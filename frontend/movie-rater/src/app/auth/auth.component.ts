import { Component } from '@angular/core';
import{FormGroup,FormControl}from '@angular/forms'
import { ApiService } from '../api.service';
import{CookieService}from 'ngx-cookie-service'
interface Token{
  token:string
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  constructor(private apiservice:ApiService,
    private cookieService:CookieService
    ){}
  authForm=new FormGroup({
  username:new FormControl(''),
  password:new FormControl('')
})

save(){
  this.apiservice.login(this.authForm.value).subscribe((res:Token)=>{
   this.cookieService.set('mr-token',res.token)
  })
}
}
