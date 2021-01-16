import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Assignment2RoutingModule } from './assignment2-routing.module';
import { HighlighterComponent } from './highlighter/highlighter.component';
import { Assignment1Module } from '../assignment1/assignment1.module';
import { HighlighterDirective } from './highlighter.directive';


@NgModule({
  declarations: [HighlighterComponent, HighlighterDirective],
  imports: [
    CommonModule,
    Assignment2RoutingModule,
    Assignment1Module,
  ]
})
export class Assignment2Module { }
