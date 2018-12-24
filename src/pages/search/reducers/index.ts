import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap
  } from '@ngrx/store';

import * as fromRoot from '@reducersRoot';
import * as fromSearch from './search.reducer';

export interface SearchStates {
    search: fromSearch.StateSearch;
}

export interface State extends fromRoot.State {
    search: SearchStates;
}

export const reducers: ActionReducerMap<SearchStates, any> = {
    search: fromSearch.reducer
}

export const getStateSearch = createFeatureSelector<SearchStates>('search');

export const getSearchStates = createSelector(
    getStateSearch,
    (state: SearchStates) => state.search
);

export const getSearchLoading = createSelector(
    getSearchStates,
    fromSearch.getSearchLoading
);

export const getSearchQuery = createSelector(
    getSearchStates,
    fromSearch.getSearchQuery
);

export const getSearchResult = createSelector(
    getSearchStates,
    fromSearch.getSearchResult
);

export const getSearchError = createSelector(
    getSearchStates,
    fromSearch.getSearchError
);
