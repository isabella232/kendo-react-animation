import * as React from 'react';
import { shallow } from 'enzyme';
import Animation from '../src/Animation';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

describe('Animation with a single component', () => {
    let result;

    beforeEach(() => { /* test setup */ });

    it('should render a ReactCssTransitionGroup', () => {
        result = shallow(<Animation><div></div></Animation>);

        expect(result.find(ReactCssTransitionGroup).length).toEqual(1);
    });

    it('should render ReactCSSTransitionGroup as a div', () => {
        result = shallow(<Animation><div></div></Animation>);

        const transitionGroup = result.find(ReactCssTransitionGroup);

        expect(transitionGroup.props().component).toEqual('div');
    });

    it('should render ReactCSSTransitionGroup as a div', () => {
        result = shallow(<Animation><div></div></Animation>);

        const transitionGroup = result.find(ReactCssTransitionGroup);

        expect(transitionGroup.props().component).toEqual('div');
    });

    it('should render ReactCSSTransitionGroup with empty transitionName', () => {
        result = shallow(<Animation><div></div></Animation>);

        const transitionGroup = result.find(ReactCssTransitionGroup);

        expect(transitionGroup.props().transitionName).toEqual('');
    });

    it('should render ReactCSSTransitionGroup with default transitionEnterTimeout', () => {
        result = shallow(<Animation><div></div></Animation>);

        const transitionGroup = result.find(ReactCssTransitionGroup);

        expect(transitionGroup.props().transitionEnterTimeout).toEqual(300);
    });

    it('should render ReactCSSTransitionGroup with default transitionLeaveTimeout', () => {
        result = shallow(<Animation><div></div></Animation>);

        const transitionGroup = result.find(ReactCssTransitionGroup);

        expect(transitionGroup.props().transitionLeaveTimeout).toEqual(300);
    });

    it('should render ReactCSSTransitionGroup with className', () => {
        result = shallow(<Animation><div></div></Animation>);

        const transitionGroup = result.find(ReactCssTransitionGroup);

        expect(transitionGroup.props().className).toEqual("k-animation-container");
    });

    it('should pass an additional className', () => {
        result = shallow(<Animation className="custom"><div></div></Animation>);

        const transitionGroup = result.find(ReactCssTransitionGroup);

        expect(transitionGroup.props().className).toEqual("k-animation-container custom");
    });

    it('should render passed effect', () => {
        result = shallow(<Animation effect="custom"><div></div></Animation>);

        const transitionGroup = result.find(ReactCssTransitionGroup);

        expect(transitionGroup.props().transitionName).toEqual("custom");
    });

    it('should render passed transitionEnterTimeout', () => {
        result = shallow(<Animation enterDuration={500}><div></div></Animation>);

        const transitionGroup = result.find(ReactCssTransitionGroup);

        expect(transitionGroup.props().transitionEnterTimeout).toEqual(500);
    });

    it('should render passed transitionLeaveTimeout', () => {
        result = shallow(<Animation leaveDuration={500}><div></div></Animation>);

        const transitionGroup = result.find(ReactCssTransitionGroup);

        expect(transitionGroup.props().transitionLeaveTimeout).toEqual(500);
    });

    it('should render passed transitionAppear', () => {
        const animateAppear = true;

        result = shallow(<Animation animateAppear={animateAppear}><div></div></Animation>);

        const transitionGroup = result.find(ReactCssTransitionGroup);

        expect(transitionGroup.props().transitionAppear).toEqual(true);
    });

    it('should render passed appear duration', () => {
        const animateAppear = true;

        result = shallow(<Animation animateAppear={animateAppear} appearDuration={500}><div></div></Animation>);

        const transitionGroup = result.find(ReactCssTransitionGroup);

        expect(transitionGroup.props().transitionAppearTimeout).toEqual(500);
    });

    it('should render children with key', () => {
        const keyValue = "key1";

        result = shallow(<Animation className="custom"><div key={keyValue}></div></Animation>);

        const transitionGroup = result.find(ReactCssTransitionGroup);

        const key = transitionGroup.props().children[0].key;

        expect(key).toContain(keyValue);
    });

    it('should render children with custom key', () => {
        result = shallow(<Animation className="custom"><div></div></Animation>);

        const transitionGroup = result.find(ReactCssTransitionGroup);

        const key = transitionGroup.props().children[0].key;

        expect(key).toBeDefined();
    });
});
