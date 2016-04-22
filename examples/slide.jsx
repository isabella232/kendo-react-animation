import * as React from 'react';
import ReactDOM from 'react-dom';
import { Slide } from '@telerik/kendo-react-animation';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { show: true };
    }

    onClick = () => {
        this.setState({
            show: !this.state.show
        });
    }

    render() {
        const { show } = this.state;

        const children = show ? (<div className="wrapper">Content</div>) : null;

        return (
            <div>
                <dl>
                    <dt>
                        Slide:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <Slide>
                    {children}
                </Slide>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
