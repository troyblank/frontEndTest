import { FETCHED_LISTING } from './actions';

export const initialState = {};

export default (state = initialState, action) => {
    const nextState = { ...state };

    switch (action.type) {
    case FETCHED_LISTING:
        nextState.listing = action.listing;
        break;
    default:
        return state;
    }

    return nextState;
};
