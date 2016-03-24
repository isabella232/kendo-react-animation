import * as React from 'react';
import ReactDOM from 'react-dom';
import Animation from '@telerik/kendo-react-animation';

import Styles from '@telerik/kendo-theme-default/styles/animation/main';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { effect: "left", index: 1 };
    }

    onClick = () => {
        this.setState({
            index: this.state.index + 1
        });
    }

    onEffectChange = (e) => {
        this.setState({
            effect: e.currentTarget.value,
            index: this.state.index
        });
    }

    renderOptions() {
        return [ "left", "right", "up", "down", "toggle", "zoom-in", "zoom-out" ].map(function(item) {
            return <option key={item} value={item}>{item}</option>;
        });
    }

    render() {
        const { effect, index } = this.state;
        const duration = effect === 'toggle' ? 500 : 300;

        const animationProps = {
            className: 'parent-div',
            fixedContainer: true,
            transitionEnterTimeout: duration,
            transitionLeaveTimeout: duration,
            transitionName: Styles[effect]
        };

        return (
            <div>
                <dl>
                    <dt>
                        Choose effect:
                    </dt>
                    <dd>
                        <select onChange={this.onEffectChange}>
                            {this.renderOptions()}
                        </select>
                    </dd>
                </dl>

                <dl>
                    <dt>
                        Animate:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <Animation {...animationProps}>
                    <div className="child-div">{index}</div>
                </Animation>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
