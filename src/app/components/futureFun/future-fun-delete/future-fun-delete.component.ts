import { Component, OnInit } from '@angular/core';
import { FutureFun } from 'src/app/models/FutureFun';
import { ActivatedRoute, Router } from '@angular/router';
import { FutureFunService } from 'src/app/services/future-fun.service';

@Component({
  selector: 'app-future-fun-delete',
  templateUrl: './future-fun-delete.component.html',
  styleUrls: ['./future-fun-delete.component.css']
})
export class FutureFunDeleteComponent implements OnInit {

  futureFun: FutureFun;

  constructor(private activatedRoute: ActivatedRoute, private futureFunService: FutureFunService, private router: Router ) { 
    this.activatedRoute.paramMap.subscribe(params => {
      this.futureFunService.getFutureFunById(params.get('id')).subscribe((futureFun: FutureFun) => {
        this.futureFun = futureFun;
      });
    });
  }

  ngOnInit() {
  }

  onDelete() {
    this.futureFunService.deleteFutureFun(this.futureFun.FunId).subscribe(() => {
      this.router.navigate(['/futureFun']);
    });
  }
}