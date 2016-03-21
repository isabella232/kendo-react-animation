import * as React from 'react';
import ReactDOM from 'react-dom';
import Animation from '@telerik/kendo-react-animation';

const Task = ({ dataItem, onRemove }) => {
    const click = function() {
        onRemove(dataItem);
    };

    const iconProps = {
        className: 'k-font-icon k-i-x'
    };

    return (
        <div className="k-item k-header">
            {dataItem.name}
            <span {...iconProps} onClick={click}></span>
        </div>
    );
};

class Tasks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: []
        };
    }

    add = () => {
        let tasks = this.state.tasks.slice();

        tasks.push({
            name: this.refs.name.value
        });

        this.refs.name.value = "";

        this.setState({
            action: "add",
            tasks: tasks
        });
    }

    remove = (item) => {
        let predicate = function(current) {
            return current !== item;
        };

        this.setState({
            action: "remove",
            tasks: this.state.tasks.filter(predicate)
        });
    }

    renderTasks() {
        return this.state.tasks.map((task, idx) => (
            <Task dataItem={task} key={idx} onRemove={this.remove} />
        ));
    }

    render() {
        const effect = this.state.action === "add" ? "k-slide-right" : "k-slide-left";

        return (
            <div>
                <fieldset>
                    <input placeholder="Item name..." ref="name" />
                    <button onClick={this.add}>Add</button>
                </fieldset>

                <Animation className="k-list k-reset" effect={effect}>
                    {this.renderTasks()}
                </Animation>
            </div>
        );
    }
}

ReactDOM.render(
  <Tasks />,
  document.getElementById('tasks')
);
