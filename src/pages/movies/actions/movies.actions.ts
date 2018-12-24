import { Action } from '@ngrx/store';
import { Discover } from '@models';

export enum MoviesActionTypes {
    FilterPropertiesMovie = '[Movie] Filter Properties Movie',
    LoadMoviesSuccess = '[Movie] Load Movies Success',
    LoadMoviesFailure = '[Movie] Load Movies Failure'
}

export class FilterPropertiesMovie implements Action {
    readonly type = MoviesActionTypes.FilterPropertiesMovie;

    constructor(public payload: any) {}
}

export class LoadMoviesSuccess implements Action {
    readonly type = MoviesActionTypes.LoadMoviesSuccess;

    constructor(public payload: Discover[]) {}
}

export class LoadMoviesFailure implements Action {
    readonly type = MoviesActionTypes.LoadMoviesFailure;

    constructor(public payload: any) {}
}

export type MoviesActionsUnion =
    | FilterPropertiesMovie
    | LoadMoviesSuccess
    | LoadMoviesFailure;