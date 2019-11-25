import { Component, OnInit } from '@angular/core';
import { Expenses } from 'src/app/models/Expenses';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpensesService } from 'src/app/services/expenses.service';

@Component({
  selector: 'app-expenses-delete',
  templateUrl: './expenses-delete.component.html',
  styleUrls: ['./expenses-delete.component.css']
})
export class ExpensesDeleteComponent implements OnInit {

  expenses: Expenses;

  constructor(private activatedRoute: ActivatedRoute, private expensesService: ExpensesService, private router: Router ) { 
    this.activatedRoute.paramMap.subscribe(params => {
      this.expensesService.getExpensesById(params.get('id')).subscribe((expenses: Expenses) => {
        this.expenses = expenses;
      });
    });
  }

  ngOnInit() {
  }

  onDelete() {
    this.expensesService.deleteExpenses(this.expenses.ExpenseId).subscribe(() => {
      this.router.navigate(['/expenses']);
    });
  }
}
