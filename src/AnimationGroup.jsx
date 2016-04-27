import React from 'react';
import TransitionGroup from 'react-addons-transition-group';
import AnimationChild from './AnimationChild';

import classNames from 'classnames';
import styles from '@telerik/kendo-theme-default/styles/animation/main';

/*eslint react/forbid-prop-types:0*/

export default class AnimationGroup extends React.Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.node
        ]),
        className: React.PropTypes.string,
        component: React.PropTypes.string,
        componentChildClassName: React.PropTypes.string,
        componentDidAppear: React.PropTypes.func,
        componentDidEnter: React.PropTypes.func,
        componentDidLeave: React.PropTypes.func,
        componentWillAppear: React.PropTypes.func,
        componentWillEnter: React.PropTypes.func,
        componentWillLeave: React.PropTypes.func,
        style: React.PropTypes.object,
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

    static defaultProps = {
        component: 'div',
        transitionAppear: false,
        transitionAppearTimeout: 300,
        transitionEnter: true,
        transitionEnterTimeout: 300,
        transitionLeave: true,
        transitionLeaveTimeout: 300
    }

    componentWillReceiveProps() {
        const childRefs = this.refs.group.refs;
        const mute = true;

        for (let key in childRefs) {
            childRefs[key].stop(mute);
        }
    }

    render() {
        const { children, className, component, style, ...other } = this.props;

        const content = React.Children.map(children, (child, idx) => (
            <AnimationChild {...other} key={idx}>
                {child}
            </AnimationChild>
        ));

        const transitionProps = {
            className: classNames(styles['animation-container'], className),
            component: component,
            ref: "group",
            style: style
        };

        return (
            <TransitionGroup {...transitionProps}>
                {content}
            </TransitionGroup>
        );
    }
}
