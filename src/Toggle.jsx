import React from 'react';
import TransitionGroup from 'react-addons-transition-group';

import ToggleChild from './ToggleChild';

export default class Toggle extends React.Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.node
        ]),
        toggleTimeout: React.PropTypes.number
    }

    static defaultProps = {
        toggleTimeout: 300
    }

    componentWillReceiveProps() {
        const childRefs = this.refs.group.refs;

        for (let key in childRefs) {
            childRefs[key].stop();
        }
    }

    render() {
        const { children, ...other } = this.props;

        const content = React.Children.map(children, (child, idx) => (
            <ToggleChild {...other} key={idx}>
                {child}
            </ToggleChild>
        ));

        return (
            <TransitionGroup component="div" ref="group">
                {content}
            </TransitionGroup>
        );
    }
}
