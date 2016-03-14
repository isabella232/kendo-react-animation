import React from 'react';
import ReactDOM from 'react-dom';
import CssTransitionGroup from 'react-addons-css-transition-group';

import util from './util';

import styles from '@telerik/kendo-theme-default/styles/animation/main';

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
        this.dimensions = this.getContentDimensions();
    }

    componentDidUpdate() {
        this.dimensions = this.getContentDimensions();
    }

    getContentDimensions() {
        const component = ReactDOM.findDOMNode(this);
        let dimensions = {
            heigth: "100%",
            width: "100%"
        };

        if (!component) {
            return dimensions;
        }

        const child = component.firstChild;

        if (child) {
            const computedStyles = getComputedStyle(child);
            dimensions.heigth = computedStyles.height;
            dimensions.width = computedStyles.width;
        }

        return dimensions;
    }

    renderChildren() {
        return React.Children.map(this.props.children, child => {
            let props = {
                key: child.key
            };

            if (!props.key) {
                props.key = util.guid();
            }

            return React.cloneElement(child, props);
        });
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

        const space = className ? " " : "";
        const containerClassName = `${styles["animation-container"]}${space}${className}`;

        const transitionGroupProps = {
            className: containerClassName,
            component: component,
            style: this.dimensions,
            transitionEnter: Boolean(effect),
            transitionEnterTimeout: enterDuration,
            transitionLeave: Boolean(effect),
            transitionLeaveTimeout: leaveDuration,
            transitionName: effect
        };

        return (
            <CssTransitionGroup {...transitionGroupProps} {...otherProps}>
                {this.renderChildren()}
            </CssTransitionGroup>
        );
    }
}
