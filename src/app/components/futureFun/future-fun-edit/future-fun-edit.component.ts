import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FutureFunService } from 'src/app/services/future-fun.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FutureFun } from '../../../models/FutureFun';

@Component({
  selector: 'app-future-fun-edit',
  templateUrl: './future-fun-edit.component.html',
  styleUrls: ['./future-fun-edit.component.css']
})
export class FutureFunEditComponent implements OnInit {

  futureFun: FutureFun;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private futureFunService: FutureFunService, private activatedRoute: ActivatedRoute, private router: Router) { 
    this.activatedRoute.paramMap.subscribe(params => {
      this.futureFunService.getFutureFunById(params.get('id')).subscribe((futureFun: FutureFun) =>{
        this.futureFun = futureFun;
        this.createForm();
      });
    });
  }

  ngOnInit() {
  }

  createForm() {
    this.editForm = this.formBuilder.group({
      FunId: new FormControl(this.futureFun.FunId),
      Description: new FormControl(this.futureFun.Description),
      Amount: new FormControl(this.futureFun.Amount),
      Month: new FormControl(this.futureFun.Info[0].Month),
      Year: new FormControl(this.futureFun.Info[0].Year)
    });
  }

  onSubmit() {
    const updatedFutureFun: FutureFun = {
      FunId: this.editForm.value.FunId,
      Description: this.editForm.value.Description,
      Amount: this.editForm.value.Amount,
      OwnerId: this.editForm.value.OwnerId,
      OldMonth: this.futureFun.Info[0].Month,
      NewMonth: this.editForm.value.Month,
      OldYear: this.futureFun.Info[0].Year,
      NewYear: this.editForm.value.Year,
    };
    this.futureFunService.updateFutureFun(updatedFutureFun).subscribe(() => {
      this.router.navigate(['/futureFun']);
    });
  }

}
