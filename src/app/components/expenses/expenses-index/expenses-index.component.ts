import { Component, OnInit } from '@angular/core';
import { ExpensesService } from 'src/app/services/expenses.service';
import { Expense } from 'src/app/models/Expenses';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-expenses-index',
  templateUrl: './expenses-index.component.html',
  styleUrls: ['./expenses-index.component.css']
})
export class ExpensesIndexComponent implements OnInit {

  constructor(private expensesService: ExpensesService) { }

  columnNames = ['OwnerId', 'Company', 'Description', 'Amount', 'Year', 'ExpenseId', 'Month'];
  dataSource: MatTableDataSource<Expense>;

  ngOnInit() {
    this.expensesService.getExpenses().subscribe((expenses: Expense[]) => {
      this.dataSource = new MatTableDataSource<Expense>(expenses);
    });
  }
}