import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DebtService } from 'src/app/services/debt.service';
import { Debt } from 'src/app/models/Debt';

@Component({
  selector: 'app-debt-detail',
  templateUrl: './debt-detail.component.html',
  styleUrls: ['./debt-detail.component.css']
})
export class DebtDetailComponent implements OnInit {

  debt: Debt;

  constructor(private activatedRoute: ActivatedRoute, private debtService: DebtService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(routeData => {
      this.debtService.getDebtById(routeData.get('id')).subscribe((debt: Debt) => {
        this.debt = debt;
      });
    });
  }

}
