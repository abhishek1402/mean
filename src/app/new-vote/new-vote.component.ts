import { BadRequestError } from './../common/bad-request-error';
import { AppError } from './../common/app-error';
import { loginService } from './../service/login-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-vote',
  templateUrl: './new-vote.component.html',
  styleUrls: ['./new-vote.component.css']
})
export class NewVoteComponent implements OnInit {
  newVote: FormGroup;
  constructor(fb: FormBuilder, private loginservice: loginService) { 
    this.newVote = fb.group({
      name: [''],
      project: [''],
      workYesterday: [''],
      workToday: [''],
      Impediments: [''],
      discount: ['']

    });
  }

  ngOnInit() {
  }
  submit(f: FormGroup){
    this.loginservice.postLogin(f).
    subscribe(
      res => {console.log(res); },
      (err: AppError) => {
      if (err instanceof BadRequestError){
        debugger;
        alert('there is validation error');
        
      }
      else{
       throw err;
      }
      this.newVote;
    });
  }
}
