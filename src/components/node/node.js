import React from 'react';
import classnames from 'classnames';
import { Node } from '..';
import './node.scss';

export default function NodeComponent({ structure }) {
    const { name, contents, notInSearch } = structure;
    const isDirectory = Boolean(contents);

    return (
      <li className={classnames('node', {
          'node--folder': isDirectory,
          'node--file': !isDirectory,
          'node--not-in-search': notInSearch
      })}
      >
        <span className={'node__name'}>{name}</span>
        {contents &&
          <ul>
            { contents.map((n) => (
              <Node structure={n} key={n.name} />
            ))}
          </ul>}
      </li>
    );
}
