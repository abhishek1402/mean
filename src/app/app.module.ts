import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {routes} from './app.routing';
import { HttpModule } from '@angular/http';
import { loginComponent } from './login/login.component';
import { homeComponent } from './home/home.component';
import { goalComponent } from './home/goal/goal.component'
import { AppComponent } from './app.component';
import {messagesComponent} from './home/messages/messages.Component';
import {profileComponent} from './home/personalprofile/profile.component';
import {ReactiveFormsModule} from '@angular/forms';
import {goalService} from './service/goal.service';
import {TabsModule} from "ng2-tabs";
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,loginComponent,homeComponent,goalComponent,messagesComponent,profileComponent, ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,ReactiveFormsModule,TabsModule
  ],
  
  providers: [goalService],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
