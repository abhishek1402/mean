import { Component,EventEmitter,Output, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {goalComponent} from './goal/goal.component';
import {messagesComponent} from './messages/messages.Component';
import {profileComponent} from './personalprofile/profile.component';


@Component({
 selector: 'app-root',
 templateUrl: 'home.component.html',
 styleUrls: ['home.component.css']
})
export class homeComponent {

 title = 'app works!';
  margin = false;

 @ViewChild('parent', {read: ViewContainerRef})
 parent: ViewContainerRef;

 over(){
   
        document.getElementById("contentHome").classList.add('content');
    }
     leave(){
   
        document.getElementById("contentHome").classList.remove('content');
    }
 }


