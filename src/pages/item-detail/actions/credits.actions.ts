import { Action } from '@ngrx/store';
import { Credits } from '@models';

export enum CreditsActionTypes {
    FilterPropertiesCredits = '[Item Detail/Credits] Filter Properties Credits',
    CreditsLoadSuccess = '[Item Detail/Credits] Load Credits Success',
    CreditsLoadFailure = '[Item Detail/Credits] Load Credits Failure'
}

export class FilterPropertiesCredits implements Action {
    readonly type = CreditsActionTypes.FilterPropertiesCredits;

    constructor(public payload: any) {}
}

export class CreditsLoadSuccess implements Action {
    readonly type = CreditsActionTypes.CreditsLoadSuccess;

    constructor(public payload: Credits[]) {}
}

export class CreditsLoadFailure implements Action {
    readonly type = CreditsActionTypes.CreditsLoadFailure;

    constructor(public payload: any) {}
}

export type CreditsActionsUnion =
    | FilterPropertiesCredits
    | CreditsLoadSuccess
    | CreditsLoadFailure;