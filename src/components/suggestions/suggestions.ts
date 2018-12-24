import { Component, Input } from '@angular/core';

import { Discover, Media } from '@models';
import { UtilsProvider } from './../../providers';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'suggestions',
  templateUrl: 'suggestions.html'
})
export class SuggestionsComponent {
  @Input() recommendations: Discover[];
  @Input() mediaType: string;
  constructor(
    public navCtrl: NavController,
    public utilsProvider: UtilsProvider
  ) {}

  /**
   * Navigate to the detail page for this item.
   */
  moreInfo(item: Media) {
    this.navCtrl.setRoot('ItemDetailPage', {
      item: item,
      mediaType: this.mediaType
    });
  }

}
