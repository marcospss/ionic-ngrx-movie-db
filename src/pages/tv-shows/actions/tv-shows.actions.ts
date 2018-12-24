import { Action } from '@ngrx/store';
import { Discover } from '@models';

export enum TvShowsActionTypes {
    FilterPropertiesTvShows = '[TV Shows] Filter Properties TV Shows',
    LoadTvShowsSuccess = '[TV Shows] Load TV Shows Success',
    LoadTvShowsFailure = '[TV Shows] Load TV Shows Failure'
}

export class FilterPropertiesTvShows implements Action {
    readonly type = TvShowsActionTypes.FilterPropertiesTvShows;

    constructor(public payload: any) {}
}

export class LoadTvShowsSuccess implements Action {
    readonly type = TvShowsActionTypes.LoadTvShowsSuccess;

    constructor(public payload: Discover[]) {}
}

export class LoadTvShowsFailure implements Action {
    readonly type = TvShowsActionTypes.LoadTvShowsFailure;

    constructor(public payload: any) {}
}

export type TvShowsActionsUnion =
    | FilterPropertiesTvShows
    | LoadTvShowsSuccess
    | LoadTvShowsFailure;