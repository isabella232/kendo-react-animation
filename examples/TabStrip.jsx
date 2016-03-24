import * as React from 'react';
import ReactDOM from 'react-dom';
import Animation from '@telerik/kendo-react-animation';

class TabStrip extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0
        };
    }

    toggle = () => {
        let index = this.state.index;

        if (index === 0) {
            index += 1;
        } else {
            index = 0;
        }

        this.setState({
            index: index
        });
    }

    renderContents() {
        const contents = [ "content1", "content2" ];

        return contents.map((content, idx) => {
            const active = idx === this.state.index;
            const effect = active ? 'k-show' : 'k-hide';

            const contentStyle = `content ${active ? 'visible' : 'hidden'}`;

            return (
                <Animation key={idx} transitionName={effect}>
                    <div className={contentStyle}>
                        {content}
                    </div>
                </Animation>
            );
        });
    }

    render() {
        return (
            <div className="tabstrip">
                <button onClick={this.toggle}>Toggle</button>

                <div>
                    {this.renderContents()}
                </div>
            </div>
        );
    }
}

ReactDOM.render(
  <TabStrip />,
  document.getElementById('tabstrip')
);
