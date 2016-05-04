import * as React from 'react';
import ReactDOM from 'react-dom';
import { Push } from '@telerik/kendo-react-animation';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { direction: "left", index: 1 };
    }

    onClick = () => {
        this.setState({
            index: this.state.index + 1
        });
    }

    onChange = (e) => {
        this.setState({
            direction: e.target.value
        });
    }

    render() {
        const { direction, index } = this.state;

        return (
            <div>
                <dl>
                    <dt>
                        Direction:
                    </dt>
                    <dd>
                        <select onChange={this.onChange} value={direction}>
                            <option value="up">Up</option>
                            <option value="right">Right</option>
                            <option value="down">Down</option>
                            <option value="left">Left</option>
                        </select>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        Push:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <Push className="container" direction={direction}>
                    <div className="content" key={index}>{index}</div>
                </Push>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
