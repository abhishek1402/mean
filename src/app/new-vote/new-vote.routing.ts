import { NewVoteComponent } from './new-vote.component';

import { Routes, RouterModule }  from '@angular/router';


// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: NewVoteComponent,
    
  }
];

export const routing = RouterModule.forChild(routes);
