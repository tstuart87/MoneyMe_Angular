import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ExpensesService } from 'src/app/services/expenses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expenses-create',
  templateUrl: './expenses-create.component.html',
  styleUrls: ['./expenses-create.component.css']
})
export class ExpensesCreateComponent implements OnInit {

  expensesForm: FormGroup;

  constructor(private form: FormBuilder, private expensesService: ExpensesService, private router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.expensesForm = this.form.group({
      Company: new FormControl,
      Description: new FormControl,
      Amount: new FormControl,
      Month: new FormControl,
      Year: new FormControl,
    });
  }

  onSubmit() {
    this.expensesService.createExpenses(this.expensesForm.value).subscribe(() => {
      this.router.navigate(['/expenses']);
      // console.log(this.expensesForm.value);
    });
  }
}