import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap
  } from '@ngrx/store';

import * as fromRoot from '@reducersRoot';
import * as fromMovies from './movies.reducer';

export interface MoviesStates {
    movies: fromMovies.StateMovies;
}

export interface State extends fromRoot.State {
    movies: MoviesStates;
}

export const reducers: ActionReducerMap<MoviesStates, any> = {
    movies: fromMovies.reducer
}

export const getStateMovies = createFeatureSelector<MoviesStates>('movies');

export const getMoviesStates = createSelector(
    getStateMovies,
    (state: MoviesStates) => state.movies
);

export const getMoviesLoading = createSelector(
    getMoviesStates,
    fromMovies.getMoviesLoading
);

export const getMoviesProperties = createSelector(
    getMoviesStates,
    fromMovies.getMoviesProperties
);

export const getMoviesResult = createSelector(
    getMoviesStates,
    fromMovies.getMoviesResult
);

export const getMoviesError = createSelector(
    getMoviesStates,
    fromMovies.getMoviesError
);