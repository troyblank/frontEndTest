import React, { useEffect } from 'react';
import { getListing } from './actions';
import { Node } from '..';
import './tree.scss';

export default function Tree({ dispatch, treeStore = {} }) {
    const { listing } = treeStore;

    useEffect(() => {
        dispatch(getListing());
    }, []);

    // This assumes there is only one root node.
    if (listing) {
        return (
          <ul className={'tree'}>
            <Node structure={listing[0]} />
          </ul>
        );
    }

    return null;
}
