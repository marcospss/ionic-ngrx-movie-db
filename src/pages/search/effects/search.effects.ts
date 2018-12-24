import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, mergeMap, catchError, debounceTime } from 'rxjs/operators';

import { SearchProvider } from './../../../providers';
import { MultiSearch } from '@models';
import * as SearchActions from './../actions/search.actions';

@Injectable()
export class SearchEffects {
    
    constructor(
        private actions$: Actions,
        private searchProvider: SearchProvider
    ) {}

    @Effect()
    loadMedias$: Observable<Action> =  this.actions$.pipe(
        debounceTime(500),
        ofType<SearchActions.SearchQuery>(SearchActions.SearchActionTypes.SearchQuery),
        map(action => action.payload),
        mergeMap(properties => {
            return this.searchProvider.getMultiSearch(properties).pipe(
                map((medias: MultiSearch[]) => new SearchActions.SearchSuccess(medias)),
                catchError(err => Observable.of(new SearchActions.SearchFailure(err)))
            )
        })
    );
}