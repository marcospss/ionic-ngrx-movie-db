import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Discover, Media } from '@models';
import * as fromMovies from './reducers';
import * as MoviesActions from './actions/movies.actions';
import * as fromRoot from '@reducersRoot';
import * as FavoritesActions from './../favorites/actions/favorites.actions';

@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class MoviesPage {
  medias$: Observable<Discover[]>;
  isFavorite$: Observable<boolean>;
  mediaType = 'movie';
  title = 'The Movie Database';
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private store: Store<fromMovies.State>,
    private favoriteStore: Store<fromRoot.State>

    ) {
      this.medias$ = store.pipe(select(fromMovies.getMoviesResult));
      // this.isFavorite$ = favoriteStore.pipe(select(fromRoot.selectCurrentFavorite))
  }

  ionViewDidLoad() {
    const filterProperties = {
      mediaType: 'movie',
      sortBy: 'popularity.desc',
      year: '',
      genre: ''
    };
    this.store.dispatch(new MoviesActions.FilterPropertiesMovie(filterProperties));
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
