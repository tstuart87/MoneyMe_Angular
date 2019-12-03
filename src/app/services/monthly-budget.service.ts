import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MonthlyBudget } from '../models/MonthlyBudget';
import { Excess } from '../models/Excess';
import { Subject } from 'rxjs';
import { all } from 'q';
import { MonthlybudgetIndexComponent } from '../components/monthlybudget/monthlybudget-index/monthlybudget-index.component';
import { APIURL } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MonthlyBudgetService {

  constructor(private http: HttpClient) { }

  getMonths(id: number, year: number) {
    return this.http.get(`${APIURL}/api/Monthly/${id}?year=${year}`, { headers: this.getHeaders() });
  }

  updateExcess(id: number, year: number) {
    return this.http.put(`${APIURL}/api/MonthExcess?id=${id}&year=${year}`, {headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set(`Authorization`, `Bearer ${localStorage.getItem('id_token')}`);
  }
}
