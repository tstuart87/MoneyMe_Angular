import { Component, OnInit } from '@angular/core';
import { DebtService } from 'src/app/services/debt.service';
import { Debt } from 'src/app/models/Debt';
import { MatTableDataSource } from '@angular/material';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-debt-index',
  templateUrl: './debt-index.component.html',
  styleUrls: ['./debt-index.component.css']
})
export class DebtIndexComponent implements OnInit {
  
  isLoggedIn: boolean;
  
  constructor(private debtService: DebtService, private authService: AuthService, private _router: Router) {
    if (localStorage.getItem('isLoggedIn')) {
      this.isLoggedIn = true;
    }
   }

  columnNames = ['Company', 'Description', 'Amount', 'Month', 'Year', 'buttons'];
  dataSource: MatTableDataSource<Debt>;

  ngOnInit() {
    this.debtService.getDebts().subscribe((debts: Debt[]) => {
      this.dataSource = new MatTableDataSource<Debt>(debts)
      console.log(debts);
    });
    this.authService.isLoggedIn.subscribe((loggedInStatus: boolean) => {
      this.isLoggedIn = loggedInStatus;
    });
    
    
  }
}

