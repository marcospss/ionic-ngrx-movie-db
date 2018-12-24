import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Discover, Media } from '@models';
import * as fromTvShows from './reducers';
import * as TvShowsActions from './actions/tv-shows.actions';
import * as fromRoot from '@reducersRoot';
import * as FavoritesActions from './../favorites/actions/favorites.actions';

@IonicPage()
@Component({
  selector: 'tv-shows',
  templateUrl: 'tv-shows.html',
})
export class TvShowsPage {
  medias$: Observable<Discover[]>;
  mediaType = 'tv';
  title = 'The Movie Database';
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private store: Store<fromTvShows.State>,
    private favoriteStore: Store<fromRoot.State>
    ) {
      this.medias$ = store.pipe(select(fromTvShows.getTvShowsResult));
  }

  ionViewDidLoad() {
    const filterProperties = {
      mediaType: 'tv',
      sortBy: 'popularity.desc',
      year: '',
      genre: ''
    };
    this.store.dispatch(new TvShowsActions.FilterPropertiesTvShows(filterProperties));
  }

  addItem(item: Media) {
    const mediaType = { mediaType: this.mediaType},
    mediaItem = Object.assign({}, item, mediaType);
    this.favoriteStore.dispatch(new FavoritesActions.AddFavorite(mediaItem));
  }

  removeItem(item: Media) {
    this.favoriteStore.dispatch(new FavoritesActions.RemoveFavorite(item));
  }

  moreInfo(item: Media) {
    this.navCtrl.push('ItemDetailPage', {
      item: item,
      mediaType: this.mediaType
    });
  }

}
