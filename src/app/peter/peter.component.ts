import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-peter',
  templateUrl: './peter.component.html',
  styleUrls: ['./peter.component.scss']
})
export class PeterComponent implements OnInit {
  // peters = [];
  peters = 0;
  interval = 5000;
  peterRef: any;
  @ViewChild('div', { static: false }) peterDiv: ElementRef;

  constructor(elementRef: ElementRef) { }

  ngOnInit() {
    this.peterRef = document.getElementById('peter');
    // setInterval(() => {
    this.addPeter();
    // }, this.interval);
    // for (let p = 0; p < this.peters; p++) {
    //   this.addPeter();
    //   this.peters--;
    // }
  }

  addPeter() {
    console.log(`addPeter ${this.peters}, interval ${this.interval}`);
    setTimeout(() => {
      this.addPeter();
    }, this.interval);
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
    this.interval += 1000;
    const newPeter = `<div
    style="
    position:absolute;
    // width:${this.getRand99()}%;
    // height:${this.getRand99()}%;
    margin-left:${this.getRand99()}vw;
    margin-top:${this.getRand99()}vh;
    ">
    <video style="" autoplay loop controls>
        <source src="../../assets/PeterKnee.webm">
    </video>
    </div>`;
    this.peterRef.innerHTML += newPeter;
  }

  getRand99() {
    return Math.random() * 99;
  }
  getRand10() {
    return Math.random() * 10;
  }

}
