import { Component, OnInit } from '@angular/core';
import { FutureFunService } from 'src/app/services/future-fun.service';
import { FutureFun } from 'src/app/models/FutureFun';
import { MatTableDataSource } from '@angular/material';
import { IncomeService } from 'src/app/services/income.service';
import { Income } from 'src/app/models/Income';

@Component({
  selector: 'app-income-index',
  templateUrl: './income-index.component.html',
  styleUrls: ['./income-index.component.css']
})
export class IncomeIndexComponent implements OnInit {

  constructor(private incomeService: IncomeService) { }

  columnNames = ['Description', 'Amount', 'Month', 'Year', 'buttons'];
  dataSource: MatTableDataSource<Income>;

  ngOnInit() {
    this.incomeService.getIncomes().subscribe((income: Income[]) => {
      this.dataSource = new MatTableDataSource<Income>(income);
    });
  }
}
