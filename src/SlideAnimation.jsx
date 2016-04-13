import React from 'react';
import Animation from './Animation';
import classNames from 'classnames';
import styles from '@telerik/kendo-theme-default/styles/animation/main';

export default class SlideAnimation extends React.Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.node
        ]),
        className: React.PropTypes.string,
        component: React.PropTypes.string,
        direction: React.PropTypes.oneOf([ 'up', 'down', 'left', 'right' ]),
        duration: React.PropTypes.number,
        fixedContainer: React.PropTypes.bool
    }

    render() {
        const {
            className,
            children = [],
            direction = 'down',
            duration = 300,
            ...otherProps
        } = this.props;

        const transitionEnter = /down|right/.test(direction);

        const transitionGroupProps = {
            children: transitionEnter ? children : [],
            className: classNames({
                'k-slide-animation': !transitionEnter,
                [className]: true
            }),
            transitionEnter: transitionEnter,
            transitionLeave: !transitionEnter,
            transitionName: {
                appear: styles[`${direction}-appear`],
                enter: styles[`${direction}-enter`],
                leave: styles[`${direction}-leave`]
            }
        };

        return (
            <Animation {...transitionGroupProps} {...otherProps} />
        );
    }
}
