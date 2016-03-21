import * as React from 'react';
import ReactDOM from 'react-dom';
import Animation from '@telerik/kendo-react-animation';

const Content = () => {
    const animateOnAppear = true;
    const appearDuration = 800;

    return (
        <Animation animateAppear={animateOnAppear} appearDuration={appearDuration} effect="zoom">
            <div className="content">
                This is the content!
            </div>
        </Animation>
    );
};

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { content: false };
    }

    append = () => {
        this.setState({
            content: true
        });
    }

    reset = () => {
        this.setState({
            content: false
        });
    }

    render() {
        let content = null;

        if (this.state.content) {
            content = <Content />;
        }

        return (
            <div>
                <fieldset>
                    <label>Add content:</label>
                    <button onClick={this.append}>Append</button>
                </fieldset>

                <fieldset>
                    <label>Reset state:</label>
                    <button onClick={this.reset}>Reset</button>
                </fieldset>

                {content}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
