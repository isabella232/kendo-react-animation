import React from 'react';
import ReactDOM from 'react-dom';

import raf from 'raf';

export default class ExpandChild extends React.Component {
    static propTypes = {
        animateOnCollapse: React.PropTypes.bool,
        animateOnExpand: React.PropTypes.bool,
        children: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.node
        ]),
        collapseDuration: React.PropTypes.number,
        componentDidExpand: React.PropTypes.func,
        componentWillExpand: React.PropTypes.func,
        expandDuration: React.PropTypes.number
    }

    constructor(props) {
        super(props);

        this.state = { style: null };
    }

    animationId = 0
    startTime = 0
    style = null

    animate(calc, duration, done) {
        if (this.animationId) {
            this.reset();
            done();
            return;
        }

        this.animationId = raf((now) => this.performAnimation(now, calc, duration, done));
    }

    performAnimation = (now, calc, duration, done) => {
        const delta = Math.round(now - (this.startTime || now));

        if (!this.startTime) {
            this.startTime = now;
        }

        if (delta >= duration) {
            this.reset();
            done();
            return;
        }

        this.setState({
            style: {
                height: this.style.height
            }
        });

        const progress = delta / duration;

        this.style.height = `${calc(progress)}px`;

        this.animationId = raf((now) => this.performAnimation(now, calc, duration, done));
    }

    reset() {
        this.animationId = null;
        this.startTime = 0;
        this.style = null;
    }

    componentHeight() {
        const domElement = ReactDOM.findDOMNode(this);
        const rect = domElement ? domElement.getBoundingClientRect() : {};
        const height = rect ? rect.height : 0;

        return height;
    }

    componentWillEnter(done) {
        const {
            animateOnExpand,
            componentDidExpand,
            componentWillExpand,
            expandDuration
        } = this.props;

        const maxHeight = this.componentHeight();
        const calc = (progress) => maxHeight * progress;

        this.style = { height: 0 };

        const callback = () => {
            if (componentDidExpand) {
                componentDidExpand();
            }
            done();
        };

        if (componentWillExpand) {
            componentWillExpand();
        }

        if (animateOnExpand) {
            this.animate(calc, expandDuration, callback);
        } else {
            callback();
        }
    }

    componentDidEnter() {
        this.setState({ style: null });
    }

    componentWillLeave(done) {
        const { animateOnCollapse, collapseDuration } = this.props;
        const maxHeight = this.componentHeight();
        const calc = (progress) => maxHeight - (maxHeight * progress);

        this.style = { height: maxHeight };

        if (animateOnCollapse) {
            this.animate(calc, collapseDuration, done);
        } else {
            done();
        }
    }

    render() {
        return (
            <div style={this.state.style}>
                {this.props.children}
            </div>
        );
    }
}
