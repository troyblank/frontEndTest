import { FETCHED_LISTING, SEARCHED_LISTING } from './actions';
import { markSearchedPaths } from './util';

export const initialState = {};

export default (state = initialState, action) => {
    const nextState = { ...state };
    const { listing } = state;

    switch (action.type) {
    case FETCHED_LISTING:
        nextState.listing = action.listing;
        break;
    case SEARCHED_LISTING:
        nextState.listing = markSearchedPaths(listing, action.searchValue);
        break;
    default:
        return state;
    }

    return nextState;
};
