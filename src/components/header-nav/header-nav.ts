import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'header-nav',
  template: `
    <ion-navbar>
      <button ion-button menuToggle icon-only>
        <ion-icon name='menu'></ion-icon>
      </button>
      <ion-title>{{ title }}</ion-title>
    </ion-navbar>
  `
})
export class HeaderNavComponent {
  @Input() title: string;
  constructor() { }

}
