import React from 'react';

import classnames from 'classnames';
import raf from 'raf';

export default class ToggleChild extends React.Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.node
        ]),
        name: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.shape({
                enter: React.PropTypes.string
            }),
            React.PropTypes.shape({
                enter: React.PropTypes.string,
                enterActive: React.PropTypes.string
            })
        ]).isRequired,
        toggleTimeout: React.PropTypes.number
    }

    static defaultProps = {
        toggleTimeout: 300
    }

    constructor(props) {
        super(props);

        this.state = { className: null };
    }

    animationId = null
    timeoutId = null

    animate(className, activeClassName) {
        if (this.animationId || this.timeoutId) {
            this.stop();
            return;
        }

        this.timeoutId = setTimeout(() => {
            this.stop();
        }, this.props.toggleTimeout);

        this.animationId = raf(() => this.performAnimation(className, activeClassName));
    }

    performAnimation = (className, activeClassName, activate) => {
        this.setState({
            className: classnames({ [className]: true, [activeClassName]: activate })
        });

        if (!activate) {
            this.animationId = raf(() => this.performAnimation(className, activeClassName, true));
        }
    }

    reset() {
        this.animationId = null;
        this.enterCallback = null;
        this.timeoutId = null;
    }

    stop() {
        clearTimeout(this.timeoutId);

        if (this.enterCallback) {
            this.enterCallback();
        }

        this.reset();
    }

    componentWillEnter(done) {
        const { name } = this.props;
        const className = name.enter || `${name}-enter`;
        const activeClassName = name.enterActive || `${className}-active`;

        this.enterCallback = done;

        this.animate(className, activeClassName);
    }

    componentDidEnter() {
        this.setState({ className: null });
    }

    render() {
        const { className } = this.state;

        return (
            <div className={className}>
                {this.props.children}
            </div>
        );
    }
}
