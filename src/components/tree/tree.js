import React, { useEffect } from 'react';
import { throttle } from 'lodash';
import { getListing, searchListing } from './actions';
import { Node } from '..';
import './tree.scss';

export default function Tree({ dispatch, treeStore = {} }) {
    const { listing } = treeStore;

    const onSearch = throttle((value) => {
        dispatch(searchListing(value));
    }, 1000);

    useEffect(() => {
        dispatch(getListing());
    }, []);

    // This assumes there is only one root node.
    if (listing) {
        return (
          <div className="tree">
            <label htmlFor={'search'}>Search: </label>
            <input
              type={'text'}
              name={'search'}
              id={'search'}
              onChange={(e) => { onSearch(e.target.value); }}
            />
            <hr />
            <ul className={'tree__list'}>
              <Node structure={listing[0]} />
            </ul>
          </div>
        );
    }

    return null;
}
