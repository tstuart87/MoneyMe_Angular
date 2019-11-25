import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DebtService } from 'src/app/services/debt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-debt-create',
  templateUrl: './debt-create.component.html',
  styleUrls: ['./debt-create.component.css']
})
export class DebtCreateComponent implements OnInit {

debtForm: FormGroup;

  constructor(private form: FormBuilder, private debtService: DebtService, private router: Router) {
    this.createDebt();
   }

  ngOnInit() {
  }

  createDebt() {
    this.debtForm = this.form.group({
      Company: new FormControl,
      Description: new FormControl,
      Amount: new FormControl,
      Month: new FormControl,
      Year: new FormControl
    });
  }

  onSubmit() {
    this.debtService.createDebt(this.debtForm.value).subscribe(()=> {
      this.router.navigate(['/debt']);
    })
  }

}
