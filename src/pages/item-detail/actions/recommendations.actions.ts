import { Action } from '@ngrx/store';
import { Discover } from '@models';

export enum RecommendationsActionTypes {
    FilterPropertiesRecommendations = '[Item Detail/Recommendations] Filter Properties Recommendations',
    RecommendationsLoadSuccess = '[Item Detail/Recommendations] Load Recommendations Success',
    RecommendationsLoadFailure = '[Item Detail/Recommendations] Load Recommendations Failure'
}

export class FilterPropertiesRecommendations implements Action {
    readonly type = RecommendationsActionTypes.FilterPropertiesRecommendations;

    constructor(public payload: any) {}
}

export class RecommendationsLoadSuccess implements Action {
    readonly type = RecommendationsActionTypes.RecommendationsLoadSuccess;

    constructor(public payload: Discover[]) {}
}

export class RecommendationsLoadFailure implements Action {
    readonly type = RecommendationsActionTypes.RecommendationsLoadFailure;

    constructor(public payload: any) {}
}

export type RecommendationsActionsUnion =
    | FilterPropertiesRecommendations
    | RecommendationsLoadSuccess
    | RecommendationsLoadFailure;