import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap
} from '@ngrx/store';

// import * as fromRoot from '@reducersRoot';
import * as fromFavorites from './favorites.reducer';

export interface FavoritesStates {
    favorites: fromFavorites.State;
}

// export interface State extends fromRoot.State {
//     favorites: FavoritesStates;
// }

export const reducers: ActionReducerMap<FavoritesStates> = {
    favorites: fromFavorites.reducer
}


export const getStateFavorites = createFeatureSelector<FavoritesStates>('favorites');

export const getFavoritesStates = createSelector(
    getStateFavorites,
    (state: FavoritesStates) => state.favorites
);

export const selectAllFavorites = createSelector(
    getFavoritesStates,
    fromFavorites.selectAllFavorites
);

export const selectFavoritesEntities = createSelector(
    getFavoritesStates,
    fromFavorites.selectFavoritesEntities
);

export const selectFavoriteIds = createSelector(
    getFavoritesStates,
    fromFavorites.selectFavoritesIds
);

export const selectFavoritesTotal = createSelector(
    getFavoritesStates,
    fromFavorites.selectFavoritesTotal
);

export const selectFavorites = createSelector(
    getFavoritesStates,
    fromFavorites.getSelectedFavoriteId
);

export const selectCurrentFavorite = createSelector(
    selectFavoritesEntities,
    selectFavorites,
    (favoritesEntities, favoriteId) => favoritesEntities[favoriteId]
);