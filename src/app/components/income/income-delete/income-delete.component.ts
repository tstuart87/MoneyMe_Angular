import { Component, OnInit } from '@angular/core';
import { FutureFun } from 'src/app/models/FutureFun';
import { ActivatedRoute, Router } from '@angular/router';
import { IncomeService } from 'src/app/services/income.service';
import { Income } from 'src/app/models/Income';

@Component({
  selector: 'app-income-delete',
  templateUrl: './income-delete.component.html',
  styleUrls: ['./income-delete.component.css']
})
export class IncomeDeleteComponent implements OnInit {

  income: Income;

  constructor(private activatedRoute: ActivatedRoute, private incomeService: IncomeService, private router: Router ) { 
    this.activatedRoute.paramMap.subscribe(params => {
      this.incomeService.getIncomeById(params.get('id')).subscribe((income: Income) => {
        this.income = this.income;
      });
    });
  }

  ngOnInit() {
  }

  onDelete() {
    this.incomeService.deleteIncome(this.income.IncomeId).subscribe(() => {
      this.router.navigate(['/Income']);
    });
  }
}