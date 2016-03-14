import * as React from 'react';
import ReactDOM from 'react-dom';
import Animation from '@telerik/kendo-react-animation';

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
                <button onClick={this.onClick}>Left</button>
                <Animation effect="k-left">
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
