import React from 'react';
import ReactDOM from 'react-dom';
import CssTransitionGroup from 'react-addons-css-transition-group';

import classNames from 'classnames';
import styles from '@telerik/kendo-theme-default/styles/animation/main';
import util from './util';

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
        transitionName: React.PropTypes.string
    }

    componentWillUpdate() {
        let dimensions = null;

        if (this.props.fixedContainer) {
            const component = ReactDOM.findDOMNode(this);

            if (component && component.firstChild) {
                const child = component.firstChild;

                dimensions = {
                    height: component.clientHeight,
                    width: child.offsetWidth
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
            transitionAppearTimeout = 300,
            transitionEnterTimeout = 300,
            transitionLeaveTimeout = 300,
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
