import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { IncomeService } from 'src/app/services/income.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Income-create',
  templateUrl: './income-create.component.html',
  styleUrls: ['./income-create.component.css']
})
export class IncomeCreateComponent implements OnInit {

  incomeForm: FormGroup;

  constructor(private form: FormBuilder, private incomeService: IncomeService, private router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.incomeForm = this.form.group({
      Description: new FormControl,
      Amount: new FormControl,
      Month: new FormControl,
      Year: new FormControl
    });
  }

  onSubmit() {
    console.log(this.incomeForm.value);
    this.incomeService.createIncome(this.incomeForm.value).subscribe(() => {
      this.router.navigate(['/Income']);
    });
  }
}