import React from 'react';
import Animation from './Animation';
import styles from '@telerik/kendo-theme-default/styles/animation/main';

export default class ToggleAnimation extends React.Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.node
        ]),
        className: React.PropTypes.string,
        component: React.PropTypes.string,
        duration: React.PropTypes.number,
        fixedContainer: React.PropTypes.bool
    }

    render() {
        const {
            duration = 300,
                ...otherProps
        } = this.props;

        const transitionGroupProps = {
            transitionEnterTimeout: duration,
            transitionLeave: false,
            transitionName: styles.toggle
        };

        return (
            <Animation {...transitionGroupProps} {...otherProps} />
        );
    }
}
