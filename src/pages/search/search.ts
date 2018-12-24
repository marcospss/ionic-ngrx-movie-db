import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";

import * as fromSearch from "./reducers";
import * as SearchActions from "./actions/search.actions";
import { MultiSearch } from "@models";
import { UtilsProvider } from "./../../providers";

@IonicPage()
@Component({
  selector: "page-search",
  templateUrl: "search.html"
})
export class SearchPage {
  medias$: Observable<MultiSearch[]>;
  loading$: Observable<boolean>;
  error$: Observable<string>;
  title = 'The Movie Database';
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private store: Store<fromSearch.State>,
    public utilsProvider: UtilsProvider
  ) {
    this.medias$ = store.pipe(select(fromSearch.getSearchResult));
    this.loading$ = store.pipe(select(fromSearch.getSearchLoading));
    this.error$ = store.pipe(select(fromSearch.getSearchError));
  }

  ionViewDidLoad() {
    this.store.dispatch(new SearchActions.SearchClearAll())
  }

  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    const query = ev.target.value;
    if ((!query || !query.trim())) {
      this.store.dispatch(new SearchActions.SearchClearAll())
      return;
    }

    this.store.dispatch(new SearchActions.SearchQuery(query));

  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: MultiSearch) {
    this.navCtrl.push("ItemDetailPage", {
      item: item,
      mediaType: item.media_type
    });
  }

}
