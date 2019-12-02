import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Observable, Subject } from 'rxjs';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.checkIfLoggedIn();
  }
  checkIfLoggedIn() {
    if (localStorage.getItem('id_token')) {
      this.isLoggedIn = true;
    }
    else this.isLoggedIn = false;

  }

}
