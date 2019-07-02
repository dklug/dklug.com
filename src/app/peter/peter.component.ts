import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-peter',
  templateUrl: './peter.component.html',
  styleUrls: ['./peter.component.scss']
})
export class PeterComponent implements OnInit, OnChanges {
  peters = 0;
  interval = 5000;
  peterRef: any;
  youtubeLink: any;
  youtubeLinkFormatted: any;
  divs = 10;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.youtubeLink = params.get('youtubeLink');
    });
    console.log(`peter ${this.youtubeLink}`);
    this.peterRef = document.getElementById('peters');
    let peterHTML = ``;
    for (let i = 0; i <= this.divs; i++) {
      peterHTML += `<div id="peter${i}"></div>`;
    }
    this.peterRef.innerHTML = peterHTML;
    this.addPeter();
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  addPeter() {
    console.log(`addPeter ${this.peters}, interval ${this.interval}`);
    setTimeout(() => {
      this.addPeter();
    }, this.interval);
    const chosenDivNumber = (Math.random() * this.divs).toFixed(0);
    const chosenDivRef = document.getElementById(`peter${chosenDivNumber}`);
    console.log(`chosenDivNumber: ${chosenDivNumber}`);
    if (!this.youtubeLink) {
      this.youtubeLink = 'https://www.youtube.com/watch?v=Y9j3heYZAk8';
    }
    if (this.youtubeLink.includes('watch?v=')) {
      this.youtubeLink = this.youtubeLink.split('watch?v=')[1];
    }
    this.peters++;
    this.interval += 1000;
    this.youtubeLinkFormatted = `https://www.youtube.com/embed/${this.youtubeLink}?autoplay=1&loop=1`;
    console.log(`youtubeLink: ${this.youtubeLink}`);
    console.log(`youtubeLinkFormatted: ${this.youtubeLinkFormatted}`);
    const newPeter = `<div
    style="
    position:absolute;
    margin-left:${this.getPos()}vw;
    margin-top:${this.getPos()}vh;
    ">
    <iframe src="${this.youtubeLinkFormatted}"></iframe>
    </div>`;
    chosenDivRef.innerHTML += newPeter;
  }

  getPos() {
    return Math.random() * 90;
  }
  getRand99() {
    return Math.random() * 99;
  }
  getRand10() {
    return Math.random() * 10;
  }

}
