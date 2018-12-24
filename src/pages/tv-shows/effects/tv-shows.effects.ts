import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { DiscoverProvider } from './../../../providers';
import { Discover } from '@models';
import * as TvShowsActions from './../actions/tv-shows.actions';

@Injectable()
export class TvShowsEffects {
    
    constructor(
        private actions$: Actions,
        private discoverProvider: DiscoverProvider
    ) {}

    @Effect()
    loadMedias$: Observable<Action> =  this.actions$.pipe(
        ofType<TvShowsActions.FilterPropertiesTvShows>(TvShowsActions.TvShowsActionTypes.FilterPropertiesTvShows),
        map(action => action.payload),
        mergeMap(properties => {
            return this.discoverProvider.getDiscover(properties).pipe(
                map((medias: Discover[]) => new TvShowsActions.LoadTvShowsSuccess(medias)),
                catchError(err => Observable.of(new TvShowsActions.LoadTvShowsFailure(err)))
            )
        })
    );
}