import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { IncomeService } from 'src/app/services/income.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Income } from 'src/app/models/Income';

@Component({
  selector: 'app-income-edit',
  templateUrl: './income-edit.component.html',
  styleUrls: ['./income-edit.component.css']
})
export class IncomeEditComponent implements OnInit {

  income: Income;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private incomeService: IncomeService, private activatedRoute: ActivatedRoute, private router: Router) { 
    this.activatedRoute.paramMap.subscribe(params => {
      this.incomeService.getIncomeById(params.get('id')).subscribe((income: Income) =>{
        this.income = income;
        console.log(income);
        this.createForm();
      });
    });
  }

  ngOnInit() {
  }

  createForm() {
    this.editForm = this.formBuilder.group({
      IncomeId: new FormControl(this.income.IncomeId),
      Description: new FormControl(this.income.Description),
      Amount: new FormControl(this.income.Amount),
      Month: new FormControl(this.income.Info[0].Month),
      Year: new FormControl(this.income.Info[0].Year)
    });
    console.log(this.editForm);
  }

  onSubmit() {
    const updatedIncome: Income = {
      IncomeId: this.editForm.value.IncomeId,
      Description: this.editForm.value.Description,
      Amount: this.editForm.value.Amount,
      OwnerId: this.editForm.value.OwnerId,
      OldMonth: this.income.Info[0].Month,
      OldYear: this.income.Info[0].Year,
      NewMonth: this.editForm.value.Month,
      NewYear: this.editForm.value.Year
    }; 
    this.incomeService.updateIncome(updatedIncome).subscribe(() => {
      this.router.navigate(['/Income']);
      console.log(updatedIncome);
    });
  }

}