import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IncomeService } from 'src/app/services/income.service';
import { Income } from 'src/app/models/Income';

@Component({
  selector: 'app-income-detail',
  templateUrl: './income-detail.component.html',
  styleUrls: ['./income-detail.component.css']
})
export class IncomeDetailComponent implements OnInit {

  income: Income;

  constructor(private activatedRoute: ActivatedRoute, private incomeService: IncomeService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(routeData => {
      this.incomeService.getIncomeById(routeData.get('id')).subscribe((income: Income) => {
        this.income = income;
      });
    });
  }

}