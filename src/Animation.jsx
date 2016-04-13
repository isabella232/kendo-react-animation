import React from 'react';
import ReactDOM from 'react-dom';
import CssTransitionGroup from 'react-addons-css-transition-group';

import classNames from 'classnames';
import styles from '@telerik/kendo-theme-default/styles/animation/main';
import util from './util';

const APPEAR_TIMEOUT = 300;
const ENTER_TIMEOUT = 300;
const LEAVE_TIMEOUT = 300;

export default class Animation extends React.Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.node
        ]),
        className: React.PropTypes.string,
        component: React.PropTypes.string,
        fixedContainer: React.PropTypes.bool,
        transitionAppear: React.PropTypes.bool,
        transitionAppearTimeout: React.PropTypes.number,
        transitionEnter: React.PropTypes.bool,
        transitionEnterTimeout: React.PropTypes.number,
        transitionLeave: React.PropTypes.bool,
        transitionLeaveTimeout: React.PropTypes.number,
        transitionName: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.shape({
                enter: React.PropTypes.string,
                leave: React.PropTypes.string,
                active: React.PropTypes.string
            }),
            React.PropTypes.shape({
                enter: React.PropTypes.string,
                enterActive: React.PropTypes.string,
                leave: React.PropTypes.string,
                leaveActive: React.PropTypes.string,
                appear: React.PropTypes.string,
                appearActive: React.PropTypes.string
            })
        ]).isRequired
    }

    componentWillUpdate() {
        let dimensions = null;

        if (this.props.fixedContainer) {
            const component = ReactDOM.findDOMNode(this);

            if (component && component.firstChild) {
                component.style.width = '';

                dimensions = {
                    height: window.getComputedStyle(component).height,
                    width: component.firstChild.offsetWidth
                };
            }
        }

        this.dimensions = dimensions;
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
            component = 'div',
            transitionAppearTimeout = APPEAR_TIMEOUT,
            transitionEnterTimeout = ENTER_TIMEOUT,
            transitionLeaveTimeout = LEAVE_TIMEOUT,
            transitionName = '',
            ...otherProps
        } = this.props;

        const transitionGroupProps = {
            className: classNames(styles['animation-container'], className),
            component: component,
            style: this.dimensions,
            transitionAppearTimeout: transitionAppearTimeout,
            transitionEnterTimeout: transitionEnterTimeout,
            transitionLeaveTimeout: transitionLeaveTimeout,
            transitionName: transitionName
        };

        return (
            <CssTransitionGroup {...transitionGroupProps} {...otherProps}>
                {this.renderChildren()}
            </CssTransitionGroup>
        );
    }
}
