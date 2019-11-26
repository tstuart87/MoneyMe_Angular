import { Component, OnInit } from '@angular/core';
import { MonthlyBudgetService } from 'src/app/services/monthly-budget.service';
import { MonthlyBudget } from 'src/app/models/MonthlyBudget';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource, MatTab } from '@angular/material';
import { DebtService } from 'src/app/services/debt.service';
import { Debt } from 'src/app/models/Debt';
import { Income } from 'src/app/models/Income';
import { IncomeService } from 'src/app/services/income.service';
import { FutureFun } from 'src/app/models/FutureFun';
import { FutureFunService } from 'src/app/services/future-fun.service';
import { Expenses } from 'src/app/models/Expenses';
import { ExpensesService } from 'src/app/services/expenses.service';

@Component({
  selector: 'app-monthlybudget-index',
  templateUrl: './monthlybudget-index.component.html',
  styleUrls: ['./monthlybudget-index.component.css']
})
export class MonthlybudgetIndexComponent implements OnInit {

  monthly: MonthlyBudget;
  editMonthlyForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private debtService: DebtService, private expensesService: ExpensesService, private incomeService: IncomeService, private futureFunService: FutureFunService, private monthlyBudgetService: MonthlyBudgetService, private activatedRoute: ActivatedRoute, private router: Router) { }

  columnNames = ['Description', 'Amount'];
  dataSource: MatTableDataSource<Debt>;
  dataSourceTwo: MatTableDataSource<Income>;
  dataSourceThree: MatTableDataSource<FutureFun>;
  dataSourceFour: MatTableDataSource<Expenses>;
  dataSourceFive: MatTableDataSource<MonthlyBudget>;

  ngOnInit() {
    this.debtService.getDebts().subscribe((debts: Debt[])=> {
      this.dataSource = new MatTableDataSource<Debt>(debts);
    });
    this.incomeService.getIncomes().subscribe((incomes: Income[]) => {
      this.dataSourceTwo = new MatTableDataSource<Income>(incomes);
    });
    this.futureFunService.getFutureFun().subscribe((funs: FutureFun[]) => {
      this.dataSourceThree = new MatTableDataSource<FutureFun>(funs);
    });
    this.expensesService.getExpenses().subscribe((expense: Expenses[]) => {
this.dataSourceFour = new MatTableDataSource<Expenses>(expense);
    });
    this.monthlyBudgetService.updateExcess(this.monthly).subscribe((excess: MonthlyBudget[]) => {
      this.dataSourceFive = new MatTableDataSource<MonthlyBudget>(excess);
    });
  }


}
