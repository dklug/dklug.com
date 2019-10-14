import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Globals } from 'src/globals';

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
  // lightTheme = false;
  constructor(public globals: Globals) { }

  ngOnInit() {
    if (!JSON.parse(localStorage.getItem('lightTheme'))) {
      localStorage.setItem('lightTheme', 'true');
      this.globals.lightTheme = true;
    }
  }

  switchTheme() {
    if (!JSON.parse(localStorage.getItem('lightTheme'))) {
      localStorage.setItem('lightTheme', 'true');
      this.globals.lightTheme = true;
    } else {
      localStorage.setItem('lightTheme', 'false');
      this.globals.lightTheme = false;
    }
  }
}
