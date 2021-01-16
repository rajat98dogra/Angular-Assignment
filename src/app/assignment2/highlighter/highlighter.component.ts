import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.interface';
import data from 'src/app/models/data.json'

@Component({
  selector: 'app-highlighter',
  templateUrl: './highlighter.component.html',
  styleUrls: ['./highlighter.component.css']
})
export class HighlighterComponent implements OnInit {
  data: User[] = [];
  constructor() {}

  ngOnInit(): void {
    // console.log(data)
    this.data=data
  }
}
