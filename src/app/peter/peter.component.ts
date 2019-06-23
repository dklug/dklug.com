import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peter',
  templateUrl: './peter.component.html',
  styleUrls: ['./peter.component.scss']
})
export class PeterComponent implements OnInit {
  // peters = [];
  peters = 0;
  interval = 1500;
  peterRef: any;

  constructor() { }

  ngOnInit() {
    this.peterRef = document.getElementById('peter');
    setInterval(() => {
      this.addPeter();
    }, this.interval);
  }

  addPeter() {
    // this.peters.push({
    //   style: `
    //   position: absolute;
    //   margin-left: ${this.getRand99()}%,
    //   margin-top: ${this.getRand99()}%,
    //   `,
    //   width: this.getRand99(),
    //   height: this.getRand99(),
    //   marginleft: this.getRand99(),
    //   margintop: this.getRand99(),
    // });
    this.peters++;
    const newPeter = `<div style="
    position:absolute;
    // width:${this.getRand99()}%;
    // height:${this.getRand99()}%;
    margin-left:${this.getRand99()}vw;
    margin-top:${this.getRand99()}vh;
    ">
    <video style="" autoplay loop>
        <source src="../../assets/PeterKnee.webm"> 
    </video>
    </div>`;
    this.peterRef.innerHTML += newPeter;
    // <img height:${this.getRand10()}rem width:${this.getRand10()}rem src="../../assets/peterknee.gif">
  }

  getRand99() {
    return Math.random() * 99;
  }
  getRand10() {
    return Math.random() * 10;
  }

}
