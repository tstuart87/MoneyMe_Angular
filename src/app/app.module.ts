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

const routes = [
  { path: 'register', component: RegistrationComponent},
  { path: '**', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'expenses', component: ExpensesIndexComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    ExpensesIndexComponent
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
    ExpensesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
