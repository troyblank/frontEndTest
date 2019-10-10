import React, { useEffect } from 'react';
import { getListing } from './actions';

export default function Tree({ dispatch, treeStore = {} }) {
    const { listing = [] } = treeStore;

    useEffect(() => {
        dispatch(getListing());
    }, []);

    return (
      <div>{listing.toString()}</div>
    );
}
