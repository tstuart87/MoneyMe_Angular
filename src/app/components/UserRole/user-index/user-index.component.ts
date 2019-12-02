import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent implements OnInit {

  columnNames = ['OwnerId', 'Email'];

  dataSource: MatTableDataSource<User>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((users: User[])=>{
      this.dataSource = new MatTableDataSource
    });
  }

}
