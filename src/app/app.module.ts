import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //check with Becky about this.
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';

import { ExpensesService } from './services/expenses.service';
import { ExpensesIndexComponent } from './components/expenses/expenses-index/expenses-index.component';
import { ExpensesCreateComponent } from './components/expenses/expenses-create/expenses-create.component';
import { ExpensesDetailComponent } from './components/expenses/expenses-detail/expenses-detail.component';
import { ExpensesEditComponent } from './components/expenses/expenses-edit/expenses-edit.component';
import { ExpensesDeleteComponent } from './components/expenses/expenses-delete/expenses-delete.component';

import { FutureFunService } from './services/future-fun.service';
import { FutureFunIndexComponent } from './components/futureFun/future-fun-index/future-fun-index.component';
import { FutureFunCreateComponent } from './components/futureFun/future-fun-create/future-fun-create.component';
import { FutureFunDetailComponent } from './components/futureFun/future-fun-detail/future-fun-detail.component';
import { FutureFunEditComponent } from './components/futureFun/future-fun-edit/future-fun-edit.component';
import { FutureFunDeleteComponent } from './components/futureFun/future-fun-delete/future-fun-delete.component';

import { DebtIndexComponent } from './components/Debt/debt-index/debt-index.component';
import { DebtService } from './services/debt.service';
import { DebtCreateComponent } from './components/Debt/debt-create/debt-create.component';
import { DebtDetailComponent } from './components/Debt/debt-detail/debt-detail.component';
import { DebtEditComponent } from './components/Debt/debt-edit/debt-edit.component';
import { DebtDeleteComponent } from './components/Debt/debt-delete/debt-delete.component';

import { IncomeIndexComponent } from './components/income/income-index/income-index.component';
import { IncomeCreateComponent } from './components/income/income-create/income-create.component';
import { IncomeDetailComponent } from './components/income/income-detail/income-detail.component';
import { IncomeEditComponent } from './components/income/income-edit/income-edit.component';
import { IncomeDeleteComponent } from './components/income/income-delete/income-delete.component';
import { IncomeService } from './services/income.service';

const routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { 
    path: 'expenses', children: [
     { path: '', component: ExpensesIndexComponent },
     { path: 'create', component: ExpensesCreateComponent },
     { path: 'detail/:id', component: ExpensesDetailComponent },
     { path: 'edit/:id', component: ExpensesEditComponent},
     { path: 'delete/:id', component: ExpensesDeleteComponent}
    ]
  },
  { 
    path: 'futureFun', children: [
     { path: '', component: FutureFunIndexComponent },
     { path: 'create', component: FutureFunCreateComponent },
     { path: 'detail/:id', component: FutureFunDetailComponent },
     { path: 'edit/:id', component: FutureFunEditComponent},
     { path: 'delete/:id', component: FutureFunDeleteComponent}
    ]
  },  
    { path: 'debt', children: [
    { path: '', component: DebtIndexComponent },
    { path: 'create', component: DebtCreateComponent },
    { path: 'detail/:id', component: DebtDetailComponent },
    { path: 'edit/:id', component: DebtEditComponent },
    { path: 'delete/:id', component: DebtDeleteComponent }
  ]},
  { path: 'Income', children: [
    { path: '', component: IncomeIndexComponent },
    { path: 'create', component: IncomeCreateComponent },
    { path: 'detail/:id', component: IncomeDetailComponent },
    { path: 'edit/:id', component: IncomeEditComponent },
    { path: 'delete/:id', component: IncomeDeleteComponent }
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
    ExpensesDetailComponent,
    ExpensesEditComponent,
    ExpensesDeleteComponent,
    FutureFunIndexComponent,
    FutureFunCreateComponent,
    FutureFunDetailComponent,
    FutureFunEditComponent,
    FutureFunDeleteComponent,
    DebtIndexComponent,
    DebtCreateComponent,
    DebtDetailComponent,
    DebtEditComponent,
    DebtDeleteComponent,
    IncomeCreateComponent,
    IncomeDeleteComponent,
    IncomeDetailComponent,
    IncomeEditComponent,
    IncomeIndexComponent

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
    IncomeService
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
