import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FutureFunService } from 'src/app/services/future-fun.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-future-fun-create',
  templateUrl: './future-fun-create.component.html',
  styleUrls: ['./future-fun-create.component.css']
})
export class FutureFunCreateComponent implements OnInit {

  futureFunForm: FormGroup;

  constructor(private form: FormBuilder, private futureFunService: FutureFunService, private router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.futureFunForm = this.form.group({
      Description: new FormControl,
      Amount: new FormControl,
      Month: new FormControl,
      Year: new FormControl
    });
  }

  onSubmit() {
    console.log(this.futureFunForm.value);
    this.futureFunService.createFutureFun(this.futureFunForm.value).subscribe(() => {
      this.router.navigate(['/futureFun']);
    });
  }
}