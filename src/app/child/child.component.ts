import { Component,EventEmitter,Output,OnInit,Input} from '@angular/core';
import {  FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router} from '@angular/router';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

   taskForm:FormGroup;
  objTaskForm:taskForm={taskName:'',description:'',time:0,token:''}
  constructor(private _fb: FormBuilder){

  }
  ngOnInit() {
    this.taskForm = this._fb.group({
      'taskName' : [null,Validators.required],
      'description':[null,Validators.compose([Validators.required,Validators.maxLength(50)])],
      'time':[null]
    })
  }
  onSubmit({ value, valid }: { value: taskForm, valid: boolean }) {
      console.log(value, valid);
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      var token = currentUser.token;
      console.log(token);
      value.token=token;
    
      
     document.getElementById("flip").classList.add("flipped")
      

    }

}
export class taskForm {
    taskName:string
    description:string
    time:number
    token:string
  }