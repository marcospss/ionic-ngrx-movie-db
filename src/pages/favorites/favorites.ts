import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from './../../reducers';
import * as FavoritesActions from './actions/favorites.actions';
import { Media } from '@models';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  medias$: Observable<Media[]>;
  title = 'The Movie Database';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private store: Store<fromRoot.State>
    ) {
      this.medias$ = store.pipe(select(fromRoot.selectAllFavorites));
  }

  ionViewDidLoad() {
    this.store.dispatch(new FavoritesActions.LoadFavoritesCollection());
  }

  removeItem(item: Media) {
    console.error('Falta corrigir o retorno está em looping', item)
    // this.store.dispatch(new FavoritesActions.RemoveFavorite(item));
  }

  moreInfo(item: Media) {
    this.navCtrl.push('ItemDetailPage', {
      item: item,
      mediaType: item.mediaType
    });
  }

}
