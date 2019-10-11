import React from 'react';
import Chance from 'chance';
import sinon from 'sinon';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import Tree from './tree';
import { Node } from '..';

describe('Tree', () => {
    const chance = new Chance();

    it('should render', () => {
        const structure = chance.word();
        const listing = [structure];
        const wrapper = shallow(<Tree dispatch={sinon.spy()} treeStore={{ listing }} />);

        assert.isTrue(wrapper.find('.tree').exists());
        assert.isTrue(wrapper.find('input#search').exists());
        assert.isTrue(wrapper.contains(
          <ul className={'tree__list'}>
            <Node structure={structure} />
          </ul>
        ));
    });

    it('should get a listing on mount', () => {
        const dispatch = sinon.spy();

        render(<Tree dispatch={dispatch} />);

        assert.isTrue(dispatch.calledOnce);
    });

    it('should handle making a search', () => {
        const listing = [chance.word()];
        const dispatch = sinon.spy();
        const value = chance.word();
        const wrapper = shallow(<Tree dispatch={dispatch} treeStore={{ listing }} />);
        const input = wrapper.find('input#search');

        input.simulate('change', { target: { value } });

        assert.isTrue(dispatch.calledOnce);
    });
});
