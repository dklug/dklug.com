import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('switchTheme', [
      state('visible', style({
        opacity: 1,
      })),
      state('invisible', style({
        opacity: 0,
        transform: 'rotate(-180deg) scale(0.3)',
        // transform: 'scale(0.3)',
      })),
      transition('* <=> *', animate('.3s ease-in')),
    ])
  ]
})
export class HeaderComponent implements OnInit {
  lightTheme = true;

  constructor() { }

  ngOnInit() {
  }

  switchTheme() {
    console.log('switchTheme');
    this.lightTheme = !this.lightTheme;
    console.log(`lightTheme ${this.lightTheme}`);
  }

}
