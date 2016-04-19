import React from 'react';
import ReactDOM from 'react-dom';

import raf from 'raf';

export default class ExpandChild extends React.Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.node
        ]),
        collapseTimeout: React.PropTypes.number,
        expandTimeout: React.PropTypes.number
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

    componentWillEnter(done) {
        const domEl = ReactDOM.findDOMNode(this);
        const rect = domEl.getBoundingClientRect();
        const maxHeight = rect.height;
        const calc = (progress) => maxHeight * progress;

        this.style = { height: 0 };

        this.animate(calc, this.props.expandTimeout, done);
    }

    componentDidEnter() {
        this.setState({ style: null });
    }

    componentWillLeave(done) {
        const domEl = ReactDOM.findDOMNode(this);
        const rect = domEl.getBoundingClientRect();
        const maxHeight = rect.height;
        const calc = (progress) => maxHeight - (maxHeight * progress);

        this.style = { height: maxHeight };

        this.animate(calc, this.props.collapseTimeout, done);
    }

    render() {
        return (
            <div className="wrapper" style={this.state.style}>
                {this.props.children}
            </div>
        );
    }
}
