import React from 'react';
import AnimationGroup from './AnimationGroup';

import styles from '@telerik/kendo-theme-default/styles/animation/main';
import util from './util';

/*eslint react/forbid-prop-types:0*/

export default class Fade extends React.Component {
    static propTypes = {
        animateOnFadeIn: React.PropTypes.bool,
        animateOnFadeOut: React.PropTypes.bool,
        children: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.node
        ]),
        className: React.PropTypes.string,
        componentDidFadeIn: React.PropTypes.func,
        componentWillFadeIn: React.PropTypes.func,
        fadeInDuration: React.PropTypes.number,
        fadeOutDuration: React.PropTypes.number,
        style: React.PropTypes.object,
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
        animateOnFadeIn: true,
        animateOnFadeOut: false,
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
            className,
            componentDidFadeIn,
            componentWillFadeIn,
            fadeInDuration,
            fadeOutDuration,
            style,
            transitionName
        } = this.props;

        let mappedTransitionName = util.mapTransitionClasses(
            transitionName,
            [ 'fadeIn', 'fadeOut' ],
            [ 'enter', 'leave' ]
        );

        const animationProps = {
            componentDidEnter: componentDidFadeIn,
            componentWillEnter: componentWillFadeIn,
            transitionAppear: false,
            transitionEnter: animateOnFadeIn,
            transitionEnterTimeout: fadeInDuration,
            transitionLeave: animateOnFadeOut,
            transitionLeaveTimeout: fadeOutDuration,
            transitionName: mappedTransitionName
        };

        return (
            <AnimationGroup className={className} style={style} {...animationProps}>
                {children}
            </AnimationGroup>
        );
    }
}
