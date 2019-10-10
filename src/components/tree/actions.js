export const FETCHED_LISTING = 'FETCHED_LISTING';

export const fetchedListing = (listing) => ({ type: FETCHED_LISTING, listing });

export const getListing = () => (
    (dispatch) => {
        /* istanbul ignore next */
        fetch('/static/listing.json')
            .then((response) => response.json())
            .then((listing) => {
                dispatch(fetchedListing(listing));
            });
    }
);
