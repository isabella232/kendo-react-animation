import * as React from 'react';
import ReactDOM from 'react-dom';
import { FadeIn } from '@telerik/kendo-react-animation';

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
        const fadeInClassNames = {
            fadeIn: styles['toggle-enter'],
            fadeInActive: styles['toggle-enter-active']
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

                <FadeIn duration={500} transitionName={fadeInClassNames}>
                    <div className="child" key={key}>{this.state.index}</div>
                </FadeIn>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
