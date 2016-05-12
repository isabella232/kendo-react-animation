import React from 'react';
import TransitionGroup from 'react-addons-transition-group';
import ExpandChild from './ExpandChild';

import classNames from 'classnames';
import styles from '@telerik/kendo-theme-default/styles/animation/main';

/*eslint react/forbid-prop-types:0*/

export default class Expand extends React.Component {
    static propTypes = {
        animateOnCollapse: React.PropTypes.bool,
        animateOnExpand: React.PropTypes.bool,
        children: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.node
        ]),
        className: React.PropTypes.string,
        collapseDuration: React.PropTypes.number,
        componentChildClassName: React.PropTypes.string,
        componentDidExpand: React.PropTypes.func,
        componentWillExpand: React.PropTypes.func,
        expandDuration: React.PropTypes.number,
        style: React.PropTypes.object
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
        const { className, style } = this.props;
        const combinedClasses = classNames(styles['animation-container'], 'k-expand', className);

        return (
            <TransitionGroup className={combinedClasses} component="div" style={style}>
                {this.renderChildren()}
            </TransitionGroup>
        );
    }
}
