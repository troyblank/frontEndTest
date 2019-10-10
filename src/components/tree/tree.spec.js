import React from 'react';
import Chance from 'chance';
import sinon from 'sinon';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import Tree from './tree';

describe('Tree', () => {
    const chance = new Chance();

    it('should render', () => {
        const listing = chance.word();
        const wrapper = shallow(<Tree dispatch={sinon.spy()} treeStore={{ listing }} />);

        assert.isTrue(wrapper.contains(
          <div>{listing}</div>
        ));
    });

    it('should get a listing on mount', () => {
        const dispatch = sinon.spy();

        render(<Tree dispatch={dispatch} />);

        assert.isTrue(dispatch.calledOnce);
    });
});
