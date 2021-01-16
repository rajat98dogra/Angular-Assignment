import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.interface';
import data from 'src/app/models/data.json';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  data: User[] = [];
  constructor() {}

  ngOnInit(): void {
    // console.log(data)
    this.data = data;
  }
}
