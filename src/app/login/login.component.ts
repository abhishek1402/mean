import { Component,EventEmitter,Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

import {routes} from '../app.routing';
import {loginClass} from './login_class';
import {loginService} from '../service/login.service';



@Component({
  selector: 'view',
  templateUrl: './login.component.html',
  styleUrls:['./css/custom.css','./css/demo.css','./css/hover.css','./css/normalize.css','./css/set1.css','./css/set2.css']
})

export class loginComponent {
  edit:Boolean;
  public token:string;
   eventEmitDoubleClick(event) {
        
        console.log("dblclick");
        this.edit=true;
    }
   

  
login :{};

   constructor(private loginService:loginService,private router:Router,){
     
    this.loginService.getLogin()
    .subscribe(tasks => {
       this.login = tasks;
    })
    
}


 obj = new loginClass("dkls","dsl");
 onSubmit({ value, valid }: { value: loginClass, valid: boolean }) {
 
    //this.checklog(value,this.login);
    console.log(value);
    this.loginService.postLogin(value)
     .subscribe(data => {

       console.log(data + "tokendsl");
       if(data!=null && data!=undefined){
          this.token= data
         let link = ['/home'];
         localStorage.setItem('currentUser', JSON.stringify({token: this.token }));
        this.router.navigate(link);
        
 
        
       }
    })


  }


}
