import * as React from 'react';
import ReactDOM from 'react-dom';
import { Expand } from '@telerik/kendo-react-animation';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { expand: true };
    }

    onClick = () => {
        this.setState({
            expand: !this.state.expand
        });
    }

    render() {
        const { expand } = this.state;

        const children = expand ? (<div>Content</div>) : null;

        return (
            <div>
                <dl>
                    <dt>
                        Animate:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <Expand>
                    {children}
                </Expand>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
