import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Media, Credits, Discover } from '@models';
import * as fromItemDetail from './reducers';
import { CreditsActions, RecommendationsActions } from './actions';

import { UtilsProvider } from './../../providers';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {
  item: Media;
  mediaType: string;
  content: string = 'overview';
  credits$: Observable<Credits[]>;
  recommendations$: Observable<Discover[]>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private store: Store<fromItemDetail.State>,
    public utilsProvider: UtilsProvider
    ) {
    this.item = navParams.get('item');
    this.mediaType = navParams.get('mediaType');
    this.credits$ = store.pipe(select(fromItemDetail.getCreditsResults));
    this.recommendations$ = store.pipe(select(fromItemDetail.getRecommendationsResults));
  }

  ionViewDidLoad() {
    const filterProperties = {
      mediaType: this.mediaType,
      id: this.item.id
    };
    this.store.dispatch(new CreditsActions.FilterPropertiesCredits(filterProperties));
    this.store.dispatch(new RecommendationsActions.FilterPropertiesRecommendations(filterProperties));
  }

  get title(): string {
    return ((this.item.title) ? this.item.title : this.item.name );
  }

  get overview(): string {
    return this.item.overview;
  }

  get backdropImage(): string {
    return this.utilsProvider.backdropImage(this.item.backdrop_path,'w780');
  }

}
