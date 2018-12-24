import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap
  } from '@ngrx/store';

import * as fromRoot from '@reducersRoot';
import * as fromCredits from './credits.reducer';
import * as fromRecommendations from './recommendations.reducer';

export interface ItemDetailStates {
    credits: fromCredits.StateCredits;
    recommendations: fromRecommendations.StateRecommendations;

}

export interface State extends fromRoot.State {
    credits: ItemDetailStates;
}

export const reducers: ActionReducerMap<ItemDetailStates, any> = {
    credits: fromCredits.reducer,
    recommendations: fromRecommendations.reducer
}

export const getItemDetailStates = createFeatureSelector<ItemDetailStates>('itemDetail');

/**
 * Credits
 */
export const getStateCredits = createSelector(
    getItemDetailStates,
    (state: ItemDetailStates) => state.credits
);

export const getCreditsLoading = createSelector(
    getStateCredits,
    fromCredits.getCreditsLoading
);

export const getCreditsProperties = createSelector(
    getStateCredits,
    fromCredits.getCreditsProperties
);

export const getCreditsResults = createSelector(
    getStateCredits,
    fromCredits.getCreditsResults
);

export const getCreditsError = createSelector(
    getStateCredits,
    fromCredits.getCreditsError
);

/**
 * Recommendations
 */
export const getStateRecommendations = createSelector(
    getItemDetailStates,
    (state: ItemDetailStates) => state.recommendations
);

export const getRecommendationsLoading = createSelector(
    getStateRecommendations,
    fromRecommendations.getRecommendationsLoading
);

export const getRecommendationsProperties = createSelector(
    getStateRecommendations,
    fromRecommendations.getRecommendationsProperties
);

export const getRecommendationsResults = createSelector(
    getStateRecommendations,
    fromRecommendations.getRecommendationsResults
);

export const getRecommendationsError = createSelector(
    getStateRecommendations,
    fromRecommendations.getRecommendationsError
);