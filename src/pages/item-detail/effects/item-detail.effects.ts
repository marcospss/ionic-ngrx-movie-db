import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { CommonProvider } from './../../../providers';
import { Credits, Discover } from '@models';
import { CreditsActions, RecommendationsActions, SimilarActions } from './../actions';

@Injectable()
export class ItemDetailEffects {
    
    constructor(
        private actions$: Actions,
        private commonProvider: CommonProvider
    ) {}

    @Effect()
    loadCredits$: Observable<Action> =  this.actions$.pipe(
        ofType<CreditsActions.FilterPropertiesCredits>(CreditsActions.CreditsActionTypes.FilterPropertiesCredits),
        map(action => action.payload),
        mergeMap(properties => {
            return this.commonProvider.getCredits(properties).pipe(
                map((credits: Credits[]) => new CreditsActions.CreditsLoadSuccess(credits)),
                catchError(err => Observable.of(new CreditsActions.CreditsLoadFailure(err)))
            )
        })
    );

    @Effect()
    loadRecommendations$: Observable<Action> =  this.actions$.pipe(
        ofType<RecommendationsActions.FilterPropertiesRecommendations>(RecommendationsActions.RecommendationsActionTypes.FilterPropertiesRecommendations),
        map(action => action.payload),
        mergeMap(properties => {
            return this.commonProvider.getRecommendations(properties).pipe(
                map((medias: Discover[]) => new RecommendationsActions.RecommendationsLoadSuccess(medias)),
                catchError(err => Observable.of(new RecommendationsActions.RecommendationsLoadFailure(err)))
            )
        })
    );

    @Effect()
    loadSimilar$: Observable<Action> =  this.actions$.pipe(
        ofType<SimilarActions.FilterPropertiesSimilar>(SimilarActions.SimilarActionTypes.FilterPropertiesSimilar),
        map(action => action.payload),
        mergeMap(properties => {
            return this.commonProvider.getSimilar(properties).pipe(
                map((credits: Discover[]) => new SimilarActions.SimilarLoadSuccess(credits)),
                catchError(err => Observable.of(new SimilarActions.SimilarLoadFailure(err)))
            )
        })
    );
}