import { Component, OnInit } from '@angular/core';
import { ExpensesService } from 'src/app/services/expenses.service';
import { Expenses } from 'src/app/models/Expenses';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-expenses-index',
  templateUrl: './expenses-index.component.html',
  styleUrls: ['./expenses-index.component.css']
})
export class ExpensesIndexComponent implements OnInit {

  constructor(private expensesService: ExpensesService) { }

  columnNames = ['Company', 'Description', 'Amount', 'Month', 'Year', 'buttons'];
  dataSource: MatTableDataSource<Expenses>;

  ngOnInit() {
    this.expensesService.getExpenses().subscribe((expenses: Expenses[]) => {
      this.dataSource = new MatTableDataSource<Expenses>(expenses);
      console.log(expenses);
    });
  }
}