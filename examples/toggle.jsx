import * as React from 'react';
import ReactDOM from 'react-dom';
import { Toggle } from '@telerik/kendo-react-animation';

import styles from '@telerik/kendo-theme-default/styles/animation/main';

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
        const toggleClassNames = {
            enter: styles['toggle-enter'],
            enterActive: styles['toggle-enter-active']
        };

        const key = new Date().getTime();

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

                <Toggle name={toggleClassNames} toggleTimeout={500}>
                    <div className="child" key={key}>{this.state.index}</div>
                </Toggle>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
