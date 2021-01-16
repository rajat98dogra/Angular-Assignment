import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HighlighterComponent } from './highlighter/highlighter.component';

const routes: Routes = [
  {
    path:'assignment2',children:[
      {path:'highlighter',component:HighlighterComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Assignment2RoutingModule { }
