// import { Component, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { MonthlyBudgetService } from 'src/app/services/monthly-budget.service';
// import { MonthlyBudget } from 'src/app/models/MonthlyBudget';
// import { IncomeService } from 'src/app/services/income.service';
// import { DebtService } from 'src/app/services/debt.service';
// import { FutureFunService } from 'src/app/services/future-fun.service';
// import { ExpensesService } from 'src/app/services/expenses.service';
// import { Income } from 'src/app/models/Income';
// import { Expenses } from 'src/app/models/Expenses';
// import { Debt } from 'src/app/models/Debt';
// import { FutureFun } from 'src/app/models/FutureFun';

// @Component({
//   selector: 'app-monthlybudget-excess',
//   templateUrl: './monthlybudget-excess.component.html',
//   styleUrls: ['./monthlybudget-excess.component.css']
// })
// export class MonthlybudgetEditComponent implements OnInit {

// excessObject: Excess;
//   constructor(private income: Income, private expenses: Expenses, private debt: Debt, private futureFun: FutureFun, private debtService: DebtService, private futureFunService: FutureFunService, private expenseService: ExpensesService, private activatedRoute: ActivatedRoute, private monthlyBudgetService: MonthlyBudgetService, private formBuilder: FormBuilder, private router: Router, private monthlyBudget: MonthlyBudget) { 
//     // this.monthlyBudget.Amount
//     this.income.Amount = => {
//       this.incomeAmount = this.incomeAmount}
//    }
   

//   ngOnInit() {
//   }

//   calculateExcess() {
//     this.monthlyBudgetService.updateExcess(this.income.Amount - this.expenses.Amount - this.debt.Amount - this.futureFun.Amount).subscribe
//     }

//     this.excessObject.Amount = this.income.Amount - 
//   }
// }
