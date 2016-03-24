import * as React from 'react';
import ReactDOM from 'react-dom';
import ToggleAnimation from '../src/ToggleAnimation';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { index: 1 };
    }

    onClick = () => {
        this.setState({
            index: this.state.index + 1
        });
    }

    render() {
        return (
            <div>
                <dl>
                    <dt>
                        Toggle element:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <ToggleAnimation className="parent" duration={500} fixedContainer>
                    <div className="child">{this.state.index}</div>
                </ToggleAnimation>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
