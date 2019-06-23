import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peter',
  templateUrl: './peter.component.html',
  styleUrls: ['./peter.component.scss']
})
export class PeterComponent implements OnInit {
  peters: number;
  interval: any;

  constructor() { }

  ngOnInit() {
    this.peters = 0;
    setInterval(() => {
      this.addPeter();
    }, 1000);
  }

  addPeter() {
    this.peters++;
  }

}
