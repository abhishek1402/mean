import { loginService } from './../service/login-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:FormGroup
  constructor(fb:FormBuilder,private loginservice:loginService) {
        this.login=fb.group({
          email:['',Validators.required],
          password:['',Validators.required]
    })
        
   }
  
  ngOnInit() {
    this.loginservice.getLogin().subscribe((post)=>{
      console.log(post);
    })
  }
  get email(){
    
    return this.login.get(['email']);
  }
}
