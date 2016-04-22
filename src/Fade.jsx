import React from 'react';
import AnimationGroup from './AnimationGroup';

import styles from '@telerik/kendo-theme-default/styles/animation/main';
import util from './util';

export default class Fade extends React.Component {
    static propTypes = {
        animateOnFadeIn: React.PropTypes.bool,
        animateOnFadeOut: React.PropTypes.bool,
        children: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.node
        ]),
        fadeInDuration: React.PropTypes.number,
        fadeOutDuration: React.PropTypes.number,
        transitionName: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.shape({
                fadeIn: React.PropTypes.string,
                fadeInActive: React.PropTypes.string,
                fadeOut: React.PropTypes.string,
                fadeOutActive: React.PropTypes.string
            })
        ])
    }

    static defaultProps = {
        fadeInDuration: 500,
        fadeOutDuration: 500,
        transitionName: {
            fadeIn: styles['fade-enter'],
            fadeInActive: styles['fade-enter-active'],
            fadeOut: styles['fade-leave'],
            fadeOutActive: styles['fade-leave-active']
        }
    }

    render() {
        const {
            animateOnFadeIn,
            animateOnFadeOut,
            children,
            fadeInDuration,
            fadeOutDuration,
            transitionName
        } = this.props;

        let mappedTransitionName = util.mapTransitionClasses(
            transitionName,
            [ 'fadeIn', 'fadeOut' ],
            [ 'enter', 'leave' ]
        );

        const animationProps = {
            transitionAppear: false,
            transitionEnter: animateOnFadeIn,
            transitionEnterTimeout: fadeInDuration,
            transitionLeave: animateOnFadeOut,
            transitionLeaveTimeout: fadeOutDuration,
            transitionName: mappedTransitionName
        };

        return (
            <AnimationGroup {...animationProps}>
                {children}
            </AnimationGroup>
        );
    }
}
