import { Component, OnInit } from '@angular/core';
import { DebtService } from 'src/app/services/debt.service';
import { Debt } from 'src/app/models/Debt';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-debt-index',
  templateUrl: './debt-index.component.html',
  styleUrls: ['./debt-index.component.css']
})
export class DebtIndexComponent implements OnInit {
  constructor(private debtService: DebtService) { }

  columnNames = ['Company', 'Description', 'Amount', 'Month', 'Year', 'buttons'];
  dataSource: MatTableDataSource<Debt>;

  ngOnInit() {
    this.debtService.getDebts().subscribe((debts: Debt[]) => {
      this.dataSource = new MatTableDataSource<Debt>(debts)
      console.log(debts);
      
    });
    
    
  }
}

