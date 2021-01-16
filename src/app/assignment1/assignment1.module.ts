import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Assignment1RoutingModule } from './assignment1-routing.module';
import { UsersComponent } from './users/users.component';
import { HighlighterDirective } from '../assignment2/highlighter.directive';


@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    Assignment1RoutingModule,
  ],
  exports:[UsersComponent]
})
export class Assignment1Module { }
