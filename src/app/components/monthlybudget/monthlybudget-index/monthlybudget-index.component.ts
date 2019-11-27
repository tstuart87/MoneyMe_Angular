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

@Component({
  selector: 'app-monthlybudget-index',
  templateUrl: './monthlybudget-index.component.html',
  styleUrls: ['./monthlybudget-index.component.css']
})
export class MonthlybudgetIndexComponent implements OnInit {

  monthly: MonthlyBudget;
  editMonthlyForm: FormGroup;
  thisMonth: number = new Date().getMonth() + 1;
  thisYear: number = new Date().getFullYear();

  constructor(private formBuilder: FormBuilder, private debtService: DebtService, private expensesService: ExpensesService, private futureFunService: FutureFunService, private monthlyBudgetService: MonthlyBudgetService, private activatedRoute: ActivatedRoute, private router: Router) { }

  columnNames = ['Description','Amount'];
  // dataSource: MatTableDataSource<Debt>;
  // // dataSourceTwo: MatTableDataSource<Income>;
  // dataSourceThree: MatTableDataSource<FutureFun>;
  // dataSourceFour: MatTableDataSource<Expenses>;
  // dataSourceFive: MatTableDataSource<MonthlyBudget>;
  income: any;
  debt: any;
  expense: any;
  fun: any;
  excess: number;
  result: Excess;
  ngOnInit() {


    // this.debtService.getDebts().subscribe((debts: Debt[]) => {
    //   this.dataSource = new MatTableDataSource<Debt>(debts);
    // });
    // this.incomeService.getIncomes().subscribe((incomes: Income[]) => {
    //   this.dataSourceTwo = new MatTableDataSource<Income>(incomes);
    // });
    // this.futureFunService.getFutureFun().subscribe((funs: FutureFun[]) => {
    //   this.dataSourceThree = new MatTableDataSource<FutureFun>(funs);
    // });
    // this.expensesService.getExpenses().subscribe((expense: Expenses[]) => {
    //   this.dataSourceFour = new MatTableDataSource<Expenses>(expense);
    // });
    // this.monthlyBudgetService.updateExcess(this.monthly).subscribe((excess: MonthlyBudget[]) => {
    //   this.dataSourceFive = new MatTableDataSource<MonthlyBudget>(excess);
    // });

    this.monthlyBudgetService.getMonths(this.thisMonth,this.thisYear).subscribe((all: MonthlyBasicInfo) => {
       this.income = all.Income;
       this.debt = all.Debt;
       this.fun = all.Fun;
       this.expense = all.Expense;
       console.log(all);
      });
      console.log(this.thisMonth);
      
      this.monthlyBudgetService.updateExcess(this.result).subscribe((excess: number) => {
        this.excess = excess;
        console.log(excess);
      })
  }




}
