import * as React from 'react';
import { shallow } from 'enzyme';
import Animation from '../src/AnimationGroup';
import ReactTransitionGroup from 'react-addons-transition-group';

describe('Animation with a single component', () => {
    let result;

    beforeEach(() => { /* test setup */ });

    it('should render a ReactTransitionGroup', () => {
        result = shallow(<Animation><div></div></Animation>);

        expect(result.find(ReactTransitionGroup).length).toEqual(1);
    });

    it('should render ReactCSSTransitionGroup as a div', () => {
        result = shallow(<Animation><div></div></Animation>);

        const transitionGroup = result.find(ReactTransitionGroup);

        expect(transitionGroup.props().component).toEqual('div');
    });

    it('should render ReactCSSTransitionGroup as a div', () => {
        result = shallow(<Animation><div></div></Animation>);

        const transitionGroup = result.find(ReactTransitionGroup);

        expect(transitionGroup.props().component).toEqual('div');
    });

    it('should render ReactCSSTransitionGroup with className', () => {
        result = shallow(<Animation><div></div></Animation>);

        const transitionGroup = result.find(ReactTransitionGroup);

        expect(transitionGroup.props().className).toEqual("k-animation-container");
    });

    it('should pass an additional className', () => {
        result = shallow(<Animation className="custom"><div></div></Animation>);

        const transitionGroup = result.find(ReactTransitionGroup);

        expect(transitionGroup.props().className).toEqual("k-animation-container custom");
    });

    it('should render children with key', () => {
        const keyValue = "key1";

        result = shallow(<Animation className="custom"><div key={keyValue}></div></Animation>);

        const transitionGroup = result.find(ReactTransitionGroup);

        const key = transitionGroup.props().children[0].key;

        expect(key).toContain(keyValue);
    });

    it('should render children with custom key', () => {
        result = shallow(<Animation className="custom"><div></div></Animation>);

        const transitionGroup = result.find(ReactTransitionGroup);

        const key = transitionGroup.props().children[0].key;

        expect(key).toBeDefined();
    });
});
