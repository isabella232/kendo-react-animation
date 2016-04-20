import React from 'react';
import AnimationGroup from './AnimationGroup';

import styles from '@telerik/kendo-theme-default/styles/animation/main';

export default class Toggle extends React.Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.node
        ]),
        toggleTimeout: React.PropTypes.number,
        transitionName: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.shape({
                enter: React.PropTypes.string,
                enterActive: React.PropTypes.string
            })
        ])
    }

    static defaultProps = {
        toggleTimeout: 500,
        transitionName: {
            enter: styles['toggle-enter'],
            enterActive: styles['toggle-enter-active']
        }
    }

    render() {
        const { children, toggleTimeout, transitionName } = this.props;

        const animationProps = {
            transitionAppear: false,
            transitionEnterTimeout: toggleTimeout,
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
