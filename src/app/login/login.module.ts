import { routing } from './login.routing';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, routing, ReactiveFormsModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
