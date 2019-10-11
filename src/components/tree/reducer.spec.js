import { assert } from 'chai';
import Chance from 'chance';
import reducer from './reducer';
import { FETCHED_LISTING, SEARCHED_LISTING } from './actions';

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

    it('should handle searching the listing', () => {
        const searchValue = chance.word({ syllables: 3 });
        const listing = [
            { name: chance.word({ syllables: 1 }) },
            { name: searchValue },
            { name: chance.word({ syllables: 1 }) }
        ];
        const expectedReturnState = {
            listing: [
                { name: listing[0].name, notInSearch: true },
                { name: searchValue, notInSearch: false },
                { name: listing[2].name, notInSearch: true }
            ]
        };

        assert.deepEqual(reducer({ listing }, { type: SEARCHED_LISTING, searchValue }), expectedReturnState);
    });
});
