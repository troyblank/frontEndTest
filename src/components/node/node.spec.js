import React from 'react';
import Chance from 'chance';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import Node from './node';

describe('Node', () => {
    const chance = new Chance();

    it('should render a folder', () => {
        const name = chance.word();
        const contents = [chance.word(), chance.word()];
        const structure = { name, contents };

        const wrapper = shallow(<Node structure={structure} />);

        assert.isTrue(wrapper.contains(
          <li className={'node node--folder'}>
            <span className={'node__name'}>{name}</span>
            <ul>
              <Node structure={contents[0]} />
              <Node structure={contents[1]} />
            </ul>
          </li>
        ));
    });

    it('should render a file', () => {
        const name = chance.word();
        const structure = { name };

        const wrapper = shallow(<Node structure={structure} />);

        assert.isTrue(wrapper.contains(
          <li className={'node node--file'}>
            <span className={'node__name'}>{name}</span>
          </li>
        ));
    });
});
