import {MyErrorHandler} from './common/app-error-handler'
import { ErrorHandler } from '@angular/core/';
import { loginService } from './service/login-service.service';
import { LoginModule } from './login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from "@angular/http";
import { NewVoteModule } from './new-vote/new-vote.module';
@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,LoginModule,HttpModule,NewVoteModule
  ],
  providers: [loginService,{provide:ErrorHandler,useClass:MyErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
