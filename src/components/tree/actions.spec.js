import { assert } from 'chai';
import Chance from 'chance';
import sinon from 'sinon';
import {
    FETCHED_LISTING,
    SEARCHED_LISTING,
    fetchedListing,
    getListing,
    searchListing
} from './actions';

describe('Tree Actions', () => {
    const chance = new Chance();

    it('should be able to generate a fetched listing action', () => {
        const listing = [chance.word()];
        const action = fetchedListing(listing);

        assert.deepEqual(action, { type: FETCHED_LISTING, listing });
    });

    it('should be able to get the listing without blowing up', () => {
        const dispatch = sinon.spy();

        getListing()(dispatch);

        assert.isFalse(dispatch.called);
    });

    it('should be able to generate a search listing action', () => {
        const searchValue = chance.word();
        const action = searchListing(searchValue);

        assert.deepEqual(action, { type: SEARCHED_LISTING, searchValue });
    });
});
