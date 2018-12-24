import { Action } from '@ngrx/store';
import { Media } from '@models';

export enum FavoritesActionTypes {
    AddFavorite = '[Favorites/API] Add Favorite',
    AddFavoriteSuccess = '[Favorites/API] Add Favorite Success',
    AddFavoriteFailure = '[Favorites/API] Add Favorite Failure',
    RemoveFavorite = '[Favorites/API] Remove Favorite Success',
    RemoveFavoriteSuccess = '[Favorites/API] Remove Favorite Success',
    RemoveFavoriteFailure = '[Favorites/API] Remove Favorite Failure',
    LoadFavoritesCollection = '[Favorites Page] Load Favorites Collection',
    LoadFavoritesSuccess = '[Favorites/API] Load Favorites Success',
    LoadFavoritesFailure = '[Favorites/API] Load Favorites Failure',
  }
  
  export class LoadFavoritesCollection implements Action {
    readonly type = FavoritesActionTypes.LoadFavoritesCollection;
  }

  /**
   * Add Favorite to Collection Actions
   */

  export class AddFavorite implements Action {
    readonly type = FavoritesActionTypes.AddFavorite;
  
    constructor(public payload: Media) {}
  }

  export class AddFavoriteSuccess implements Action {
    readonly type = FavoritesActionTypes.AddFavoriteSuccess;
  
    constructor(public payload: Media) {}
  }
  
  export class AddFavoriteFailure implements Action {
    readonly type = FavoritesActionTypes.AddFavoriteFailure;
  
    constructor(public payload: Media) {}
  }
  
  /**
   * Remove Favorite from Collection Actions
   */
  export class RemoveFavorite implements Action {
    readonly type = FavoritesActionTypes.RemoveFavorite;
  
    constructor(public payload: Media) {}
  }

  export class RemoveFavoriteSuccess implements Action {
    readonly type = FavoritesActionTypes.RemoveFavoriteSuccess;
  
    constructor(public payload: Media) {}
  }
  
  export class RemoveFavoriteFailure implements Action {
    readonly type = FavoritesActionTypes.RemoveFavoriteFailure;
  
    constructor(public payload: Media) {}
  }
  
  /**
   * Load Collection Actions
   */
  export class LoadFavoritesSuccess implements Action {
    readonly type = FavoritesActionTypes.LoadFavoritesSuccess;
  
    constructor(public payload: Media[]) {}
  }
  
  export class LoadFavoritesFailure implements Action {
    readonly type = FavoritesActionTypes.LoadFavoritesFailure;
  
    constructor(public payload: any) {}
  }
  
  export type FavoritesActionsUnion =
    | AddFavorite
    | AddFavoriteSuccess
    | AddFavoriteFailure
    | RemoveFavorite
    | RemoveFavoriteSuccess
    | RemoveFavoriteFailure
    | LoadFavoritesCollection
    | LoadFavoritesSuccess
    | LoadFavoritesFailure;