import { Component, OnInit } from '@angular/core';
import { Debt } from 'src/app/models/Debt';
import { ActivatedRoute, Router } from '@angular/router';
import { DebtService } from 'src/app/services/debt.service';

@Component({
  selector: 'app-debt-delete',
  templateUrl: './debt-delete.component.html',
  styleUrls: ['./debt-delete.component.css']
})
export class DebtDeleteComponent implements OnInit {

  debt: Debt;

  constructor(private activatedRoute: ActivatedRoute, private debtService: DebtService, private router: Router) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.debtService.getDebtById(params.get('id')).subscribe((debt: Debt) => {
        this.debt = debt;
      });
    });
   }

   onDelete() {
     this.debtService.deleteDebt(this.debt.DebtId).subscribe(() => {
       this.router.navigate(['/debt']);
     });
   }

  ngOnInit() {
  }

}
