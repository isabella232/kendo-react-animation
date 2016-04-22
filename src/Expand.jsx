import React from 'react';
import TransitionGroup from 'react-addons-transition-group';

import ExpandChild from './ExpandChild';

export default class Expand extends React.Component {
    static propTypes = {
        animateOnCollapse: React.PropTypes.bool,
        animateOnExpand: React.PropTypes.bool,
        children: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.node
        ]),
        collapseDuration: React.PropTypes.number,
        expandDuration: React.PropTypes.number
    }

    static defaultProps = {
        animateOnCollapse: true,
        animateOnExpand: true,
        collapseDuration: 300,
        expandDuration: 300
    }

    renderChildren() {
        const { children, ...other } = this.props;

        return React.Children.map(children, (child, idx) => (
            <ExpandChild {...other} key={idx}>
                {child}
            </ExpandChild>
        ));
    }

    render() {
        return (
            <TransitionGroup component="div">
                {this.renderChildren()}
            </TransitionGroup>
        );
    }
}
