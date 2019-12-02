import { Component, OnInit } from '@angular/core';
import { Debt } from 'src/app/models/Debt';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DebtService } from 'src/app/services/debt.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-debt-edit',
  templateUrl: './debt-edit.component.html',
  styleUrls: ['./debt-edit.component.css']
})
export class DebtEditComponent implements OnInit {

  debt: Debt;
  editDebtForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private debtService: DebtService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.debtService.getDebtById(params.get('id')).subscribe((debt: Debt) => {
        this.debt = debt;
        this.createForm();
      });
    });
  }

  ngOnInit() {
  }

  createForm() {
    this.editDebtForm = this.formBuilder.group({
      Company: new FormControl(this.debt.Company),
      Description: new FormControl(this.debt.Description),
      Amount: new FormControl(this.debt.Amount),
      Month: new FormControl(this.debt.Info[0].Month),
      Year: new FormControl(this.debt.Info[0].Year),
      DebtId: new FormControl(this.debt.DebtId)
    });
  }

  onSubmit() {
    const updatedDebt: Debt = {
      Company: this.editDebtForm.value.Company,
      Description: this.editDebtForm.value.Description,
      Amount: this.editDebtForm.value.Amount,
      OldMonth: this.debt.Info[0].Month,
      OldYear: this.debt.Info[0].Year,
      NewMonth: this.editDebtForm.value.Month,
      NewYear: this.editDebtForm.value.Year,
      DebtId: this.editDebtForm.value.DebtId
    };
    this.debtService.updateDebt(updatedDebt).subscribe(() => {
      this.router.navigate(['/debt']);
      console.log(updatedDebt);
    });
  }

}
