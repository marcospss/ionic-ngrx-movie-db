import { Action } from '@ngrx/store';
import { MultiSearch } from '@models';

export enum SearchActionTypes {
    SearchQuery = '[Multi Search] Query to search',
    SearchSuccess = '[Multi Search] Load Multi Search Success',
    SearchFailure = '[Multi Search] Load Multi Search Failure',
    SearchClearAll = '[Multi Search] Clear results to search'
}

export class SearchQuery implements Action {
    readonly type = SearchActionTypes.SearchQuery;

    constructor(public payload: any) {}
}

export class SearchSuccess implements Action {
    readonly type = SearchActionTypes.SearchSuccess;

    constructor(public payload: MultiSearch[]) {}
}

export class SearchFailure implements Action {
    readonly type = SearchActionTypes.SearchFailure;

    constructor(public payload: any) {}
}

export class SearchClearAll implements Action {
    readonly type = SearchActionTypes.SearchClearAll;
}

export type SearchActionsUnion =
    | SearchQuery
    | SearchSuccess
    | SearchFailure
    | SearchClearAll;