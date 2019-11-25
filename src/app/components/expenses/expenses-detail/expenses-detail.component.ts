import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExpensesService } from 'src/app/services/expenses.service';
import { Expenses } from 'src/app/models/Expenses';

@Component({
  selector: 'app-expenses-detail',
  templateUrl: './expenses-detail.component.html',
  styleUrls: ['./expenses-detail.component.css']
})
export class ExpensesDetailComponent implements OnInit {

  expenses: Expenses;

  constructor(private activatedRoute: ActivatedRoute, private expensesService: ExpensesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(routeData => {
      this.expensesService.getExpensesById(routeData.get('id')).subscribe((expenses: Expenses) => {
        this.expenses = expenses;
      });
    });
  }

}
