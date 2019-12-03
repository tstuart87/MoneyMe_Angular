import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {
  user: User;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router ) { 
 
  }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(params => {
      this.userService.getUserById(params.get('id')).subscribe((user: User) => {
        this.user = user;
      });
    });
  }

  onDelete() {
    this.userService.deleteUsers(this.user.OwnerId, this.user.Email).subscribe(() => {
      this.router.navigate(['/User']);
    });
  }
}
