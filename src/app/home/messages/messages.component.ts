import { Component,EventEmitter,Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'home',
  templateUrl: './messages.component.html',

})

export class messagesComponent{
   constructor(router:Router) {}

}