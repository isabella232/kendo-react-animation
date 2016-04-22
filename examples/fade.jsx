import * as React from 'react';
import ReactDOM from 'react-dom';
import { Fade } from '@telerik/kendo-react-animation';

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
        const key = new Date().getTime();

        return (
            <div>
                <dl>
                    <dt>
                        Fade element:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <Fade animateOnFadeOut={false}>
                    <div className="child" key={key}>{this.state.index}</div>
                </Fade>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
