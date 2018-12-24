import { Discover } from '@models';
import * as MoviesActions from './../actions/movies.actions';

export interface StateMovies {
    properties: object;
    loading: boolean;
    error: string;
    result: Discover[];
}

const initialState: StateMovies = {
    properties: {},
    loading: false,
    error: '',
    result: []
};

export function reducer(
    state = initialState,
    action: MoviesActions.MoviesActionsUnion
  ): StateMovies {
    switch (action.type) {

        case MoviesActions.MoviesActionTypes.FilterPropertiesMovie: {
            return {
                ...state,
                properties: action.payload
            }
        }

        case MoviesActions.MoviesActionTypes.LoadMoviesSuccess: {
            return {
                ...state,
                loading: true,
                result: action.payload
            }
        }

        case MoviesActions.MoviesActionTypes.LoadMoviesFailure: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }

        default: {
            return state;
        }
    }
  }

  export const getMoviesLoading = (state: StateMovies) => state.loading;
  export const getMoviesProperties = (state: StateMovies) => state.properties;
  export const getMoviesResult = (state: StateMovies) => state.result;
  export const getMoviesError = (state: StateMovies) => state.error;