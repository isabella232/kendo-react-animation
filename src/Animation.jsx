import React from 'react';
import ReactDOM from 'react-dom';
import CssTransitionGroup from 'react-addons-css-transition-group';

export default class Animation extends React.Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.node
        ]),
        className: React.PropTypes.string,
        component: React.PropTypes.string,
        effect: React.PropTypes.string,
        enterDuration: React.PropTypes.number,
        leaveDuration: React.PropTypes.number
    }

    componentWillUpdate() {
        this.height = this.getContentHeight();
    }

    componentDidUpdate() {
        this.height = this.getContentHeight();
    }

    getContentHeight() {
        const child = ReactDOM.findDOMNode(this).firstChild;
        let height;

        if (child) {
            height = getComputedStyle(child).height;
        } else {
            height = "100%";
        }

        return height;
    }

    render() {
        const {
            className = "",
            component = "div",
            effect = "",
            enterDuration = 300,
            leaveDuration = 300,
            ...otherProps
        } = this.props;

        const style = {
            height: this.height
        };

        const classNames = `animation-container${className ? " " : ""}${className}`;

        return (
            <CssTransitionGroup
                className = {classNames}
                component = {component}
                style = {style}
                transitionEnter = {Boolean(effect)}
                transitionEnterTimeout = {enterDuration}
                transitionLeave = {Boolean(effect)}
                transitionLeaveTimeout = {leaveDuration}
                transitionName = {effect}
                {...otherProps}
            >
                {this.props.children}
            </CssTransitionGroup>
        );
    }
}
