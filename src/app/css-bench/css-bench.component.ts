import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-bench',
  templateUrl: './css-bench.component.html',
  styleUrls: ['./css-bench.component.scss']
})
export class CssBenchComponent implements OnInit {
  amount: number = 20;

  constructor() { }

  ngOnInit() {
  }

  buildRender() {
  }

}
