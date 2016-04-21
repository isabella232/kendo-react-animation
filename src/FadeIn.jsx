import React from 'react';
import AnimationGroup from './AnimationGroup';

import styles from '@telerik/kendo-theme-default/styles/animation/main';

export default class FadeIn extends React.Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.node
        ]),

        duration: React.PropTypes.number,
        transitionName: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.shape({
                fadeIn: React.PropTypes.string,
                fadeInActive: React.PropTypes.string
            })
        ])
    }

    static defaultProps = {
        duration: 500,
        transitionName: {
            fadeIn: styles['fade-in-enter'],
            fadeInActive: styles['fade-in-enter-active']
        }
    }

    render() {
        const { children, duration, transitionName } = this.props;

        const animationProps = {
            transitionAppear: false,
            transitionEnterTimeout: duration,
            transitionLeave: false,
            transitionName: transitionName
        };

        return (
            <AnimationGroup {...animationProps}>
                {children}
            </AnimationGroup>
        );
    }
}
