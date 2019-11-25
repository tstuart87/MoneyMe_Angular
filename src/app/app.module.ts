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
import { DebtIndexComponent } from './components/Debt/debt-index/debt-index.component';
import { DebtService } from './services/debt.service';
import { DebtCreateComponent } from './components/Debt/debt-create/debt-create.component';
import { DebtDetailComponent } from './components/Debt/debt-detail/debt-detail.component';
import { DebtEditComponent } from './components/Debt/debt-edit/debt-edit.component';
import { DebtDeleteComponent } from './components/Debt/debt-delete/debt-delete.component';

const routes = [
  { path: 'register', component: RegistrationComponent},
  { path: 'login', component: LoginComponent},
  { path: 'expenses', component: ExpensesIndexComponent},
  { path: 'debt', children: [
    { path: '', component: DebtIndexComponent },
    { path: 'create', component: DebtCreateComponent },
    { path: 'detail/:id', component: DebtDetailComponent },
    { path: 'edit/:id', component: DebtEditComponent },
    { path: 'delete/:id', component: DebtDeleteComponent }
  ]},
  { path: '**', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    ExpensesIndexComponent,
    DebtIndexComponent,
    DebtCreateComponent,
    DebtDetailComponent,
    DebtEditComponent,
    DebtDeleteComponent
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
    MatButtonModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    ExpensesService,
    DebtService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
