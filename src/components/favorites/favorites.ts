import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Media } from '@models';
import { UtilsProvider } from './../../providers';

@Component({
  selector: 'favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesComponent {
  @Input() medias: Media[];
  @Output() removeItem = new EventEmitter<Media>();
  @Output() moreInfo = new EventEmitter<Media>();

  constructor(
    public utilsProvider: UtilsProvider
  ) {}

}
