import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { DiscoverProvider } from './../../../providers';
import { Discover } from '@models';
import * as MoviesActions from './../actions/movies.actions';

@Injectable()
export class MoviesEffects {
    
    constructor(
        private actions$: Actions,
        private DiscoverProvider: DiscoverProvider
    ) {}

    @Effect()
    loadMovies$: Observable<Action> =  this.actions$.pipe(
        ofType<MoviesActions.FilterPropertiesMovie>(MoviesActions.MoviesActionTypes.FilterPropertiesMovie),
        map(action => action.payload),
        mergeMap(properties => {
            return this.DiscoverProvider.getDiscover(properties).pipe(
                map((movies: Discover[]) => new MoviesActions.LoadMoviesSuccess(movies)),
                catchError(err => Observable.of(new MoviesActions.LoadMoviesFailure(err)))
            )
        })
    );
}