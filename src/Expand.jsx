import React from 'react';
import TransitionGroup from 'react-addons-transition-group';

import ExpandChild from './ExpandChild';

export default class Expand extends React.Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.node
        ]),
        collapseTimeout: React.PropTypes.number,
        expandTimeout: React.PropTypes.number
    }

    static defaultProps = {
        collapseTimeout: 300,
        expandTimeout: 300
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
