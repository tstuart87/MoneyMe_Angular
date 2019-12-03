import { Component, OnInit } from '@angular/core';
import { MonthlyBudgetService } from 'src/app/services/monthly-budget.service';
import { MonthlyBudget } from 'src/app/models/MonthlyBudget';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DebtService } from 'src/app/services/debt.service';
import { FutureFunService } from 'src/app/services/future-fun.service';
import { MonthlyBasicInfo } from 'src/app/models/Expenses';
import { ExpensesService } from 'src/app/services/expenses.service';
import { Excess } from 'src/app/models/Excess';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-monthlybudget-index',
  templateUrl: './monthlybudget-index.component.html',
  styleUrls: ['./monthlybudget-index.component.css']
})
export class MonthlybudgetIndexComponent implements OnInit {

  isGoodStamp:boolean = true;

  monthly: MonthlyBudget;
  editMonthlyForm: FormGroup;
  thisMonth: number = new Date().getMonth() + 1;
  thisYear: number = new Date().getFullYear();
  resultMonth: number = new Date().getMonth() +1;
  resultYear: number = new Date().getFullYear();

  

  constructor(private formBuilder: FormBuilder, private debtService: DebtService, private expensesService: ExpensesService, private futureFunService: FutureFunService, private monthlyBudgetService: MonthlyBudgetService, private activatedRoute: ActivatedRoute, private router: Router) { }

  columnNames = ['Description', 'Amount'];

  income: any;
  debt: any;
  expense: any;
  fun: any;
  excess: number;
  all: MonthlyBasicInfo;

  ngOnInit() {
    // this.monthlyBudgetService.updateExcess(this.thisMonth, this.thisYear).subscribe((excess: number) => {
    //   this.excess = excess;
    // });

    this.monthlyBudgetService.getMonths(this.thisMonth, this.thisYear).subscribe((all: MonthlyBasicInfo) => {
      this.all = all;
      this.income = all.Income;
      this.debt = all.Debt;
      this.fun = all.Fun;
      this.expense = all.Expense;
      this.goodOrBadStamp(all.Excess);
      console.log(all);
    });
    console.log(this.thisMonth);
  }

  goodOrBadStamp(excess) {
    if (this.all.Excess >= 0) {
      this.isGoodStamp = true;
    }
    else {
      this.isGoodStamp = false;
    }
  }

}
