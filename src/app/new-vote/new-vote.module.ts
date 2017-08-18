import { NewVoteComponent } from './new-vote.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './new-vote.routing';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule, routing, ReactiveFormsModule
  ],
  declarations: [NewVoteComponent]
})
export class NewVoteModule { }
