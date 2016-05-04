import React from 'react';
import ReactDOM from 'react-dom';
import AnimationGroup from './AnimationGroup';

import assign from 'object-assign';
import styles from '@telerik/kendo-theme-default/styles/animation/main';
import util from './util';

/*eslint react/forbid-prop-types:0*/

export default class Zoom extends React.Component {
    static propTypes = {
        animateOnZoomIn: React.PropTypes.bool,
        animateOnZoomOut: React.PropTypes.bool,
        children: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.node
        ]),
        className: React.PropTypes.string,
        componentChildClassName: React.PropTypes.string,
        componentDidZoomIn: React.PropTypes.func,
        componentWillZoomIn: React.PropTypes.func,
        direction: React.PropTypes.oneOf([ 'in', 'out' ]),
        fixedContainer: React.PropTypes.bool,
        style: React.PropTypes.object,
        transitionName: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.shape({
                zoomIn: React.PropTypes.string,
                zoomInActive: React.PropTypes.string,
                zoomOut: React.PropTypes.string,
                zoomOutActive: React.PropTypes.string
            })
        ]),
        zoomInDuration: React.PropTypes.number,
        zoomOutDuration: React.PropTypes.number
    }

    static defaultProps = {
        animateOnZoomIn: true,
        animateOnZoomOut: true,
        zoomInDuration: 300,
        zoomOutDuration: 300,
        direction: 'out',
        fixedContainer: true
    }

    constructor(props) {
        super(props);

        this.state = { style: null };
    }

    componentDidMount() {
        this.updateContainerDimensions();
    }

    componentWillReceiveProps() {
        this.updateContainerDimensions();
    }

    getDefaultTransitionName() {
        const { direction } = this.props;

        return {
            zoomIn: styles[`zoom-${direction}-enter`],
            zoomInActive: styles[`zoom-${direction}-enter-active`],
            zoomOut: styles[`zoom-${direction}-leave`],
            zoomOutActive: styles[`zoom-${direction}-leave-active`]
        };
    }

    updateContainerDimensions() {
        const { height, width } = this.state;
        const content = ReactDOM.findDOMNode(this).firstChild.firstChild;

        let style = null;

        if (this.props.fixedContainer && content) {
            const newHeight = util.outerHeight(content);
            const newWidth = util.outerWidth(content);

            if (height !== newHeight || width !== newWidth) {
                style = {
                    height: newHeight,
                    width: newWidth
                };
            }
        }

        this.setState({ style: style });
    }

    componentDidEnter = () => {
        const { componentDidZoomIn } = this.props;

        if (componentDidZoomIn) {
            componentDidZoomIn();
        }

        this.updateContainerDimensions();
    }

    getChildProps() {
        const {
            animateOnZoomIn,
            animateOnZoomOut,
            componentChildClassName,
            componentWillZoomIn,
            zoomInDuration,
            zoomOutDuration,
            transitionName = this.getDefaultTransitionName()
        } = this.props;

        let mappedTransitionName = util.mapTransitionClasses(
            transitionName,
            [ 'zoomIn', 'zoomOut' ],
            [ 'enter', 'leave' ]
        );

        return {
            componentChildClassName: componentChildClassName,
            componentDidEnter: this.componentDidEnter,
            componentWillEnter: componentWillZoomIn,
            transitionAppear: false,
            transitionEnter: animateOnZoomIn,
            transitionEnterTimeout: zoomInDuration,
            transitionLeave: animateOnZoomOut,
            transitionLeaveTimeout: zoomOutDuration,
            transitionName: mappedTransitionName
        };
    }

    render() {
        const { children, className, style } = this.props;

        const animationProps = {
            childFactory: (child) => React.cloneElement(child, this.getChildProps()),
            className: className,
            style: assign({}, style, this.state.style),
            transitionName: ""
        };

        return (
            <AnimationGroup {...animationProps}>
                {children}
            </AnimationGroup>
        );
    }
}
