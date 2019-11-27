import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FutureFunService } from 'src/app/services/future-fun.service';
import { FutureFun } from 'src/app/models/FutureFun';

@Component({
  selector: 'app-future-fun-detail',
  templateUrl: './future-fun-detail.component.html',
  styleUrls: ['./future-fun-detail.component.css']
})
export class FutureFunDetailComponent implements OnInit {

  futureFun: FutureFun;

  constructor(private activatedRoute: ActivatedRoute, private futureFunService: FutureFunService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(routeData => {
      this.futureFunService.getFutureFunById(routeData.get('id')).subscribe((futureFun: FutureFun) => {
        this.futureFun = futureFun;
      });
    });
  }
}