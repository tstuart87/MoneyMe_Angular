import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, CanActivate } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { 
  MatToolbarModule, 
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';

import { ExpensesService } from './services/expenses.service';
import { ExpensesIndexComponent } from './components/expenses/expenses-index/expenses-index.component';
import { ExpensesCreateComponent } from './components/expenses/expenses-create/expenses-create.component';
import { ExpensesEditComponent } from './components/expenses/expenses-edit/expenses-edit.component';
import { ExpensesDeleteComponent } from './components/expenses/expenses-delete/expenses-delete.component';

import { FutureFunService } from './services/future-fun.service';
import { FutureFunIndexComponent } from './components/futureFun/future-fun-index/future-fun-index.component';
import { FutureFunCreateComponent } from './components/futureFun/future-fun-create/future-fun-create.component';
import { FutureFunEditComponent } from './components/futureFun/future-fun-edit/future-fun-edit.component';
import { FutureFunDeleteComponent } from './components/futureFun/future-fun-delete/future-fun-delete.component';

import { DebtIndexComponent } from './components/Debt/debt-index/debt-index.component';
import { DebtService } from './services/debt.service';
import { DebtCreateComponent } from './components/Debt/debt-create/debt-create.component';
import { DebtEditComponent } from './components/Debt/debt-edit/debt-edit.component';
import { DebtDeleteComponent } from './components/Debt/debt-delete/debt-delete.component';

import { IncomeIndexComponent } from './components/income/income-index/income-index.component';
import { IncomeCreateComponent } from './components/income/income-create/income-create.component';
import { IncomeEditComponent } from './components/income/income-edit/income-edit.component';
import { IncomeDeleteComponent } from './components/income/income-delete/income-delete.component';
import { IncomeService } from './services/income.service';

import { MonthlyBudgetService } from './services/monthly-budget.service';
import { MonthlybudgetIndexComponent } from './components/monthlybudget/monthlybudget-index/monthlybudget-index.component';
import { UserIndexComponent } from './components/UserRole/user-index/user-index.component';
import { UserDeleteComponent } from './components/UserRole/user-delete/user-delete.component';

import { UserService } from './services/user.service';
import { AuthGuard } from './auth.guard';



const routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { 
    path: 'expenses', children: [
     { path: '', component: ExpensesIndexComponent },
     { path: 'create', component: ExpensesCreateComponent },
     { path: 'edit/:id', component: ExpensesEditComponent},
     { path: 'delete/:id', component: ExpensesDeleteComponent}
    ]
  },
  { 
    path: 'futureFun', children: [
     { path: '', component: FutureFunIndexComponent },
     { path: 'create', component: FutureFunCreateComponent },
     { path: 'edit/:id', component: FutureFunEditComponent},
     { path: 'delete/:id', component: FutureFunDeleteComponent}
    ]
  },  
    { path: 'debt', children: [
    { path: '', component: DebtIndexComponent },
    { path: 'create', component: DebtCreateComponent },
    { path: 'edit/:id', component: DebtEditComponent },
    { path: 'delete/:id', component: DebtDeleteComponent }
  ]},
  { path: 'Income', children: [
    { path: '', component: IncomeIndexComponent },
    { path: 'create', component: IncomeCreateComponent },
    { path: 'edit/:id', component: IncomeEditComponent },
    { path: 'delete/:id', component: IncomeDeleteComponent }
  ]},
  { path: 'Monthly', children: [
    { path: '', component: MonthlybudgetIndexComponent },
  ]},

  { path: 'User', children: [
    { path: '', component: UserIndexComponent, CanActivate: [AuthGuard] },
    { path: 'delete/:id', component: UserDeleteComponent, CanActivate: [AuthGuard] }
  ]},
  { path: '**', component: RegistrationComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    ExpensesIndexComponent,
    ExpensesCreateComponent,
    ExpensesEditComponent,
    ExpensesDeleteComponent,
    FutureFunIndexComponent,
    FutureFunCreateComponent,
    FutureFunEditComponent,
    FutureFunDeleteComponent,
    DebtIndexComponent,
    DebtCreateComponent,
    DebtEditComponent,
    DebtDeleteComponent,
    IncomeCreateComponent,
    IncomeDeleteComponent,
    IncomeEditComponent,
    IncomeIndexComponent,
    MonthlybudgetIndexComponent,
    UserIndexComponent,
    UserDeleteComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    RouterModule,
    MatButtonModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    FutureFunService,
    ExpensesService,
    DebtService,
    IncomeService,
    MonthlyBudgetService,
    UserService,
    AuthGuard
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
