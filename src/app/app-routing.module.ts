import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    component: AppComponent,
    children: [{path: 'login', loadChildren: './login/login.module#LoginModule' },
    {path: 'newVote', loadChildren: './new-vote/new-vote.module#NewVoteModule' }
  
  ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
