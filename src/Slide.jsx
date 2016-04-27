import React from 'react';
import AnimationGroup from './AnimationGroup';

import styles from '@telerik/kendo-theme-default/styles/animation/main';
import util from './util';

/*eslint react/forbid-prop-types:0*/

export default class Slide extends React.Component {
    static propTypes = {
        animateOnSlideIn: React.PropTypes.bool,
        animateOnSlideOut: React.PropTypes.bool,
        children: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.node
        ]),
        className: React.PropTypes.string,
        componentChildClassName: React.PropTypes.string,
        componentDidSlideIn: React.PropTypes.func,
        componentWillSlideIn: React.PropTypes.func,
        direction: React.PropTypes.oneOf([ 'up', 'down' ]),
        slideInDuration: React.PropTypes.number,
        slideOutDuration: React.PropTypes.number,
        style: React.PropTypes.object,
        transitionName: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.shape({
                slideIn: React.PropTypes.string,
                slideInActive: React.PropTypes.string,
                slideOut: React.PropTypes.string,
                slideOutActive: React.PropTypes.string
            })
        ])
    }

    static defaultProps = {
        animateOnSlideIn: true,
        animateOnSlideOut: true,
        slideInDuration: 300,
        slideOutDuration: 300,
        direction: "down"
    }

    getDefaultTransitionName() {
        const { direction } = this.props;

        return {
            slideIn: styles[`slide-${direction}-enter`],
            slideInActive: styles[`slide-${direction}-enter-active`],
            slideOut: styles[`slide-${direction}-leave`],
            slideOutActive: styles[`slide-${direction}-leave-active`]
        };
    }

    render() {
        const {
            animateOnSlideIn,
            animateOnSlideOut,
            children,
            className,
            componentChildClassName,
            componentWillSlideIn,
            componentDidSlideIn,
            slideInDuration,
            slideOutDuration,
            style,
            transitionName = this.getDefaultTransitionName()
        } = this.props;

        let mappedTransitionName = util.mapTransitionClasses(
            transitionName,
            [ 'slideIn', 'slideOut' ],
            [ 'enter', 'leave' ]
        );

        const animationProps = {
            componentChildClassName: componentChildClassName,
            componentDidEnter: componentDidSlideIn,
            componentWillEnter: componentWillSlideIn,
            transitionAppear: false,
            transitionEnter: animateOnSlideIn,
            transitionEnterTimeout: slideInDuration,
            transitionLeave: animateOnSlideOut,
            transitionLeaveTimeout: slideOutDuration,
            transitionName: mappedTransitionName
        };

        return (
            <AnimationGroup className={className} style={style} {...animationProps}>
                {children}
            </AnimationGroup>
        );
    }
}
