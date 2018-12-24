import { Discover } from '@models';
import { RecommendationsActions } from './../actions';

export interface StateRecommendations {
    properties: object;
    loading: boolean;
    error: string;
    results: Discover[];
}

const initialState: StateRecommendations = {
    properties: {},
    loading: false,
    error: '',
    results: []
};

export function reducer(
    state = initialState,
    action: RecommendationsActions.RecommendationsActionsUnion
  ): StateRecommendations {
    switch (action.type) {

        case RecommendationsActions.RecommendationsActionTypes.FilterPropertiesRecommendations: {
            return {
                ...state,
                properties: action.payload
            }
        }

        case RecommendationsActions.RecommendationsActionTypes.RecommendationsLoadSuccess: {
            return {
                ...state,
                loading: true,
                results: action.payload
            }
        }

        case RecommendationsActions.RecommendationsActionTypes.RecommendationsLoadFailure: {
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

  export const getRecommendationsLoading = (state: StateRecommendations) => state.loading;
  export const getRecommendationsProperties = (state: StateRecommendations) => state.properties;
  export const getRecommendationsResults = (state: StateRecommendations) => state.results;
  export const getRecommendationsError = (state: StateRecommendations) => state.error;