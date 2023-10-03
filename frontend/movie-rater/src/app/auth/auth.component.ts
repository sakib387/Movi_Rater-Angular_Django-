import { Component } from '@angular/core';
import{FormGroup,FormControl}from '@angular/forms'
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  authForm=new FormGroup({
  Username:new FormControl(''),
  Password:new FormControl('')
})

save(){
  console.log(this.authForm.value)
}
}
