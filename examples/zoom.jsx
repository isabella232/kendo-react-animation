import * as React from 'react';
import ReactDOM from 'react-dom';
import { Zoom } from '@telerik/kendo-react-animation';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { direction: "in", index: 1 };
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
                            <option value="in">In</option>
                            <option value="out">Out</option>
                        </select>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        Zoom:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <Zoom className="container" direction={direction}>
                    <div className="content" key={index}>{index}</div>
                </Zoom>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
