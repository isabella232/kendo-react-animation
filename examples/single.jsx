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
        return [ "left", "right", "up", "down", "zoom-in", "zoom-out" ].map(function(item) {
            return <option key={item} value={item}>{item}</option>;
        });
    }

    render() {
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

                <Animation className="parent" effect={Styles[this.state.effect]} single="true">
                    <div className="child-div">{this.state.index}</div>
                </Animation>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
