import { Action } from '@ngrx/store';
import { Discover } from '@models';

export enum SimilarActionTypes {
    FilterPropertiesSimilar = '[Item Detail/Similar] Filter Properties Similar',
    SimilarLoadSuccess = '[Item Detail/Similar] Load Similar Success',
    SimilarLoadFailure = '[Item Detail/Similar] Load Similar Failure'
}

export class FilterPropertiesSimilar implements Action {
    readonly type = SimilarActionTypes.FilterPropertiesSimilar;

    constructor(public payload: any) {}
}

export class SimilarLoadSuccess implements Action {
    readonly type = SimilarActionTypes.SimilarLoadSuccess;

    constructor(public payload: Discover[]) {}
}

export class SimilarLoadFailure implements Action {
    readonly type = SimilarActionTypes.SimilarLoadFailure;

    constructor(public payload: any) {}
}

export type SimilarActionsUnion =
    | FilterPropertiesSimilar
    | SimilarLoadSuccess
    | SimilarLoadFailure;