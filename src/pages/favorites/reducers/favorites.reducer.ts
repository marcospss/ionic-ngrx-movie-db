import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { Media } from '@models';
import * as FavoritesActions from './../actions/favorites.actions';

export interface State extends EntityState<Media> { 
    selectedFavoriteId: number | null;
}

export const adapter: EntityAdapter<Media> = createEntityAdapter<Media>();

export const initialState: State = adapter.getInitialState({
    selectedFavoriteId: null
});

export function reducer(
    state = initialState,
    action: FavoritesActions.FavoritesActionsUnion
): State {
    switch (action.type) {

        case FavoritesActions.FavoritesActionTypes.LoadFavoritesSuccess: {
            return adapter.addAll(action.payload, state);
        }

        case FavoritesActions.FavoritesActionTypes.AddFavorite: {
            return adapter.addOne(action.payload, state);
        }

        case FavoritesActions.FavoritesActionTypes.RemoveFavorite: {
            return adapter.addOne(action.payload, state);
        }

        default: {
            return state;
        }
    }
}

export const getSelectedFavoriteId = (state: State) => state.selectedFavoriteId;

const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
} = adapter.getSelectors();

export const selectFavoritesIds = selectIds;
export const selectFavoritesEntities = selectEntities;
export const selectAllFavorites = selectAll;
export const selectFavoritesTotal = selectTotal;