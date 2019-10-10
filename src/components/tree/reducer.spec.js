import { assert } from 'chai';
import Chance from 'chance';
import reducer from './reducer';
import { FETCHED_LISTING } from './actions';

describe('Tree Reducer', () => {
    const chance = new Chance();

    it('should return initial state', () => {
        assert.deepEqual(reducer(undefined, {}), {});
    });

    it('should handle fetching the listing', () => {
        const listing = chance.word();
        const expectedReturnState = { listing };

        assert.deepEqual(reducer({}, { type: FETCHED_LISTING, listing }), expectedReturnState);
    });
});
