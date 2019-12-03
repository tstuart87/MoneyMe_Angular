import { Component, OnInit } from '@angular/core';
import { FutureFunService } from 'src/app/services/future-fun.service';
import { FutureFun } from 'src/app/models/FutureFun';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-future-fun-index',
  templateUrl: './future-fun-index.component.html',
  styleUrls: ['./future-fun-index.component.css']
})
export class FutureFunIndexComponent implements OnInit {

  constructor(private futureFunService: FutureFunService) { }

  columnNames = ['Description', 'Amount', 'Month', 'Year', 'buttons'];
  dataSource: MatTableDataSource<FutureFun>;

  ngOnInit() {
    this.futureFunService.getFutureFun().subscribe((futureFun: FutureFun[]) => {
      this.dataSource = new MatTableDataSource<FutureFun>(futureFun);
    });
  }
}
