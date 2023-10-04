import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl}from '@angular/forms'
import { ApiService } from '../api.service';
import{CookieService}from 'ngx-cookie-service'
import { Router } from '@angular/router';
interface Token{
  token:string
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{
  register:boolean=false;
  constructor(private apiservice:ApiService,
    private cookieService:CookieService,
    private route:Router
    ){}
  authForm=new FormGroup({
  username:new FormControl(''),
  password:new FormControl('')
})
ngOnInit(): void {
    const token=this.cookieService.get('mr-token')
    if(token){
      this.route.navigate(['/movies'])
    }
}
save(){
  if(this.register==false){
    this.apiservice.login(this.authForm.value).subscribe((res:Token)=>{
      this.cookieService.set('mr-token',res.token)
      this.route.navigate(['/movies'])
     })
  }
  else{
   this.apiservice.register(this.authForm.value).subscribe((res)=>{
    this.register=false;
   })
  }
}
}
