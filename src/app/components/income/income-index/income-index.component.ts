import { Component, OnInit } from '@angular/core';
import { IncomeService } from 'src/app/services/income.service';
import { Income } from 'src/app/models/Income';
import { MatTab, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-income-index',
  templateUrl: './income-index.component.html',
  styleUrls: ['./income-index.component.css']
})
export class IncomeIndexComponent implements OnInit {

  constructor(private indexService: IncomeService) { }

  coloumnNames = ['OwnerId', 'Company', 'Description', 'Amount', 'Year', 'IncomeId', 'Month'];
  dataSource: MatTableDataSource<Income>;

  ngOnInit() {
    this.indexService.getIncomes().subscribe((incomes: Income[])=>{});
    this.dataSource = new MatTableDataSource<Income>(income)
  }

}
