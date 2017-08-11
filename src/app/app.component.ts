import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Router} from '@angular/router';
import {loginComponent} from './login/login.component';
import {homeComponent} from './home/home.component'
import {loginService} from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
  providers:[loginService],
  
})

export class AppComponent {
  
}
