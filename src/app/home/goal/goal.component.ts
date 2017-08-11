import { Component,EventEmitter,Output,OnInit,ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import {  FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router} from '@angular/router';
import {goalService} from '../../service/goal.service';
import {ChildComponent} from '../../child/child.component';

@Component({
  selector: 'dashboard',
  templateUrl: './goal.component.html',
  styleUrls:['./goal.component.css']
})

export class goalComponent implements OnInit{
  taskForm:FormGroup;
  
  objTaskForm:taskForm={taskName:'',description:'',time:0,token:''}
  @ViewChild('parent', {read: ViewContainerRef})
 parent: ViewContainerRef;

  constructor(private _fb: FormBuilder,private goalservice:goalService,private componentFactoryResolver: ComponentFactoryResolver){
    

 
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
    
      this.goalservice.postGoal(value);
     document.getElementById("flip").classList.add("flipped")
      

    }
   

    clicked(e){
      const childComponent = this.componentFactoryResolver.resolveComponentFactory(ChildComponent); 
       this.parent.createComponent(childComponent);
      
    }
    
}
export class taskForm {
    taskName:string
    description:string
    time:number
    token:string
  }