import { LoginComponent } from './login.component';
import { Routes, RouterModule }  from '@angular/router';


// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    
  }
];

export const routing = RouterModule.forChild(routes);
