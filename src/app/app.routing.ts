import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {loginComponent} from './login/login.component';
import {homeComponent} from './home/home.component';
import {goalComponent} from './home/goal/goal.component';
import {messagesComponent} from './home/messages/messages.Component';
import {profileComponent} from './home/personalprofile/profile.component';


export const router:Routes = [

    {path:'',redirectTo:'login' ,pathMatch:'full'},
    
    { path:'login',component:loginComponent},
    { path:'home',component:homeComponent,
    children: [
      { path: 'goal', component:goalComponent },
      { path:'messages',component:messagesComponent},
      { path:'profile',component:profileComponent}
    ]
    }
];

export const routes:ModuleWithProviders = RouterModule.forRoot(router);
