import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MonthlyBudget } from '../models/MonthlyBudget';

const Api_Url = 'https://localhost:44325/';

@Injectable({
  providedIn: 'root'
})
export class MonthlyBudgetService {

  constructor(private http: HttpClient) { }

  getMonths() {
    return this.http.get(`${Api_Url}api/Monthly`, { headers: this.getHeaders() });
  }

  updateExcess(monthly: MonthlyBudget) {
    return this.http.put(`${Api_Url}api/MonthExcess`, monthly, {headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set(`Authorization`, `Bearer ${localStorage.getItem('id_token')}`);
  }
}
