import * as React from 'react';
import ReactDOM from 'react-dom';
import { SlideAnimation } from '@telerik/kendo-react-animation';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { open: false };
    }

    onClick = () => {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        const actionText = this.state.open ? "Close" : "Open";
        const direction = this.state.open ? "down" : "up";

        return (
            <div>
                <dl>
                    <dt>
                        {actionText} element:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>{actionText}</button>
                    </dd>
                </dl>
                <SlideAnimation className="parent" direction={direction} duration={300}>
                    <div className="child">{actionText}</div>
                </SlideAnimation>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
