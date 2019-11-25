import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ExpensesService } from 'src/app/services/expenses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Expenses } from 'src/app/models/Expenses';

@Component({
  selector: 'app-expenses-edit',
  templateUrl: './expenses-edit.component.html',
  styleUrls: ['./expenses-edit.component.css']
})
export class ExpensesEditComponent implements OnInit {

  expenses: Expenses;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private expensesService: ExpensesService, private activatedRoute: ActivatedRoute, private router: Router) { 
    this.activatedRoute.paramMap.subscribe(params => {
      this.expensesService.getExpensesById(params.get('id')).subscribe((expenses: Expenses) =>{
        this.expenses = expenses;
        this.createForm();
      });
    });
  }

  ngOnInit() {
  }

  createForm() {
    this.editForm = this.formBuilder.group({
      ExpenseId: new FormControl(this.expenses.ExpenseId),
      Company: new FormControl(this.expenses.Company),
      Description: new FormControl(this.expenses.Description),
      Amount: new FormControl(this.expenses.Amount),
      Month: new FormControl(this.expenses.Month),
      Year: new FormControl(this.expenses.Year)
    });
  }

  onSubmit() {
    const updatedExpenses: Expenses = {
      ExpenseId: this.editForm.value.ExpenseId,
      Company: this.editForm.value.Company,
      Description: this.editForm.value.Description,
      Amount: this.editForm.value.Amount,
      Month: this.editForm.value.Month,
      Year: this.editForm.value.Year,
      OwnerId: this.editForm.value.OwnerId
    };
    this.expensesService.updateExpenses(updatedExpenses).subscribe(() => {
      this.router.navigate(['/expenses']);
    });
  }

}
