---
title: Overview
page_title: Overview | Kendo UI Push Animation for React
description: "Use the Kendo UI Push Animation component in a React project."
slug: overview_push_kendouiforreact
position: 1
---

# Push Overview

The Kendo UI Push component for React shows a new component with a push transition effect. The component uses the [ReactTransitionGroup](https://facebook.github.io/react/docs/animation.html) component to detect whether the content is entering or leaving.

The entering element will slide in pushing the old one out. The push direction can be 'up', 'down', 'left' or 'right'.

> * In order for the Kendo UI Push component to work, it must always be present in the rendering tree.

## Demos

### Default Setup

The example below demonstrates the default setup of a Kendo UI Push for React.

```html-preview
  <style>
  .content {
    width: 100px;
    padding: 10px;
    color: #787878;
    background-color: #fcf7f8;
    font-size: 13px;
    font-family: Helvetica, Arial, sans-serif;
    letter-spacing: 1px;
    text-align: center;
    border: 1px solid rgba(0,0,0,.05);
  }
  </style>
  <div id="app"></div>
```
```jsx
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
        const { index } = this.state;

        return (
            <div>
                <dl>
                    <dt>
                        Push:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <KendoReactAnimation.Push>
                    <div className="content" key={index}>{index}</div>
                </KendoReactAnimation.Push>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

## Configuration

### Define Direction

The component enables you to control the push direction of the entering element. Use the [`direction`]({% slug api_push_kendouiforreact %}#direction-stringdefault-left) property to control the push direction.

The supported directions are:
- (Default) The `left` direction&mdash;Pushes the content from right to left.
- The `right` direction&mdash;Pushes the content from left to right.
- The `up` direction&mdash;Pushes the content from bottom to top.
- The `down` direction&mdash;Pushes the content from top to bottom.

```html-preview
  <style>
  .content {
    width: 100px;
    padding: 10px;
    color: #787878;
    background-color: #fcf7f8;
    font-size: 13px;
    font-family: Helvetica, Arial, sans-serif;
    letter-spacing: 1px;
    text-align: center;
    border: 1px solid rgba(0,0,0,.05);
  }
  </style>
  <div id="app"></div>
```
```jsx
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { direction: "left", index: 1 };
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
                            <option value="up">Up</option>
                            <option value="right">Right</option>
                            <option value="down">Down</option>
                            <option value="left">Left</option>
                        </select>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        Push:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <KendoReactAnimation.Push direction={direction}>
                    <div className="content" key={index}>{index}</div>
                </KendoReactAnimation.Push>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

### Set Push-In Duration

The component enables you to control the animation duration of the entering component. To modify the push-in duration, update the [`pushInDuration`]({% slug api_push_kendouiforreact %}#pushinduration-numberdefault-300) property and update the duration in the corresponding CSS class.

> Sync up the `pushInDuration` property with the transition duration defined in the static `k-push-{direction}-enter-active` CSS class.

```html
  <style>
    .k-push-left-enter-active {
        transition: transform 800ms ease-in-out;
    }

    .content {
        width: 100px;
        padding: 10px;
        color: #787878;
        background-color: #fcf7f8;
        font-size: 13px;
        font-family: Helvetica, Arial, sans-serif;
        letter-spacing: 1px;
        text-align: center;
        border: 1px solid rgba(0,0,0,.05);
    }
  </style>
  <div id="app"></div>
```
```jsx
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
        const { index } = this.state;

        const pushProps = {
            pushInDuration: 800
        };

        return (
            <div>
                <dl>
                    <dt>
                        Push:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <KendoReactAnimation.Push {...pushProps}>
                    <div className="content" key={index}>{index}</div>
                </KendoReactAnimation.Push>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

### Set Push-Out Duration

The component enables you to control the animation duration of the leaving component. To modify the push-out duration, update the [`pushOutDuration`]({% slug api_push_kendouiforreact %}#pushoutduration-numberdefault-300-1) property and update the duration in the corresponding CSS class.

> Sync up the `pushOutDuration` property with the transition duration defined in the static `k-push-{direction}-leave-active` CSS class.

```html
  <style>
    .k-push-left-leave-active {
        transition: transform 800ms ease-in-out;
    }
  </style>
  <style>
    .content {
        width: 100px;
        padding: 10px;
        color: #787878;
        background-color: #fcf7f8;
        font-size: 13px;
        font-family: Helvetica, Arial, sans-serif;
        letter-spacing: 1px;
        text-align: center;
        border: 1px solid rgba(0,0,0,.05);
    }
  </style>
  <div id="app"></div>
```
```jsx
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
        const { index } = this.state;

        const pushProps = {
            pushOutDuration: 800
        };

        return (
            <div>
                <dl>
                    <dt>
                        Push:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <KendoReactAnimation.Push {...pushProps}>
                    <div className="content" key={index}>{index}</div>
                </KendoReactAnimation.Push>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

### Disable Push-In Animation

The Push component allows you to disable the showing animation, which will result in an instant element display. To disable the push-in animation, set the [`animateOnPushIn`]({% slug api_push_kendouiforreact %}#animateonpushin-booleandefault-true) option to `false`.

```html
  <style>
  .content {
    width: 100px;
    padding: 10px;
    color: #787878;
    background-color: #fcf7f8;
    font-size: 13px;
    font-family: Helvetica, Arial, sans-serif;
    letter-spacing: 1px;
    text-align: center;
    border: 1px solid rgba(0,0,0,.05);
  }
  </style>
  <div id="app"></div>
```
```jsx
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
        const { index } = this.state;

        return (
            <div>
                <dl>
                    <dt>
                        Push:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <KendoReactAnimation.Push animateOnPushIn={false}>
                    <div className="content" key={index}>{index}</div>
                </KendoReactAnimation.Push>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

### Disable Push-Out Animation

The Push component allows you to disable the hiding animation, which will result in an instant element hiding. To disable the push-out animation, set the [`animateOnPushOut`]({% slug api_push_kendouiforreact %}#animateonpushout-booleandefault-false) option to `false`.

By default, the push-out animation is disabled.

```html
  <style>
  .content {
    width: 100px;
    padding: 10px;
    color: #787878;
    background-color: #fcf7f8;
    font-size: 13px;
    font-family: Helvetica, Arial, sans-serif;
    letter-spacing: 1px;
    text-align: center;
    border: 1px solid rgba(0,0,0,.05);
  }
  </style>
  <div id="app"></div>
```
```jsx
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
        const { index } = this.state;

        return (
            <div>
                <dl>
                    <dt>
                        Push:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <KendoReactAnimation.Push animateOnPushOut={false}>
                    <div className="content" key={index}>{index}</div>
                </KendoReactAnimation.Push>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

## Wire Life-Cycle Hooks

The Push Animation component calls special hooks when children are declaratively added.

### Before Animation Starts

The [`componentWillPushIn`]({% slug api_push_kendouiforreact %}#componentwillpushin) hook is called when a component is added to an existing Push component and the animation has not started yet.

```html-preview
  <style>
  .content {
    width: 100px;
    padding: 10px;
    color: #787878;
    background-color: #fcf7f8;
    font-size: 13px;
    font-family: Helvetica, Arial, sans-serif;
    letter-spacing: 1px;
    text-align: center;
    border: 1px solid rgba(0,0,0,.05);
  }
  .example {
    display: flex;
  }

  .example > div {
    width: 200px;
  }
  </style>
  <div id="app"></div>
```
```jsx
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { callbackCalls: [], index: 1 };
    }

    onClick = () => {
        this.setState({
            index: this.state.index + 1
        });
    }

    onComponentWillPushIn = () => {
        const calls = this.state.callbackCalls.slice();

        calls.push("component will push in");

        this.setState({
            callbackCalls: calls
        });
    }

    renderCallbackCalls() {
        return this.state.callbackCalls.map((call) => (
            <li>{call}</li>
        ));
    }

    render() {
        const { index } = this.state;

        return (
            <div className="example">
                <div>
                    <dl>
                        <dt>
                            Push:
                        </dt>
                        <dd>
                            <button onClick={this.onClick}>Animate</button>
                        </dd>
                    </dl>

                    <KendoReactAnimation.Push componentWillPushIn={this.onComponentWillPushIn}>
                        <div className="content" key={index}>{index}</div>
                    </KendoReactAnimation.Push>
                </div>

                <div>
                    <h4>Log:</h4>
                    <ul>
                        {this.renderCallbackCalls()}
                    </ul>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

### After Animation Finishes

The [`componentDidPushIn`]({% slug api_push_kendouiforreact %}#componentdidpushin) hook is called when a component is added to an existing Push component and the animation is now finished.

```html-preview
  <style>
  .content {
    width: 100px;
    padding: 10px;
    color: #787878;
    background-color: #fcf7f8;
    font-size: 13px;
    font-family: Helvetica, Arial, sans-serif;
    letter-spacing: 1px;
    text-align: center;
    border: 1px solid rgba(0,0,0,.05);
  }
  .example {
    display: flex;
  }

  .example > div {
    width: 200px;
  }
  </style>
  <div id="app"></div>
```
```jsx
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { callbackCalls: [], index: 1 };
    }

    onClick = () => {
        this.setState({
            index: this.state.index + 1
        });
    }

    onComponentDidPushIn = () => {
        const calls = this.state.callbackCalls.slice();

        calls.push("component did push in");

        this.setState({
            callbackCalls: calls
        });
    }

    renderCallbackCalls() {
        return this.state.callbackCalls.map((call) => (
            <li>{call}</li>
        ));
    }

    render() {
        const { index } = this.state;

        return (
            <div className="example">
                <div>
                    <dl>
                        <dt>
                            Push:
                        </dt>
                        <dd>
                            <button onClick={this.onClick}>Animate</button>
                        </dd>
                    </dl>

                    <KendoReactAnimation.Push componentDidPushIn={this.onComponentDidPushIn}>
                        <div className="content" key={index}>{index}</div>
                    </KendoReactAnimation.Push>
                </div>

                <div>
                    <h4>Log:</h4>
                    <ul>
                        {this.renderCallbackCalls()}
                    </ul>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

## Style the Appearance

Custom CSS classes can be set to the Push component and to its children components.

### Decorate the Zoom

To set a CSS class to the Push component use the `className` property.

```html
  <style>
  .content {
    width: 100px;
    padding: 10px;
    color: #787878;
    background-color: #fcf7f8;
    font-size: 13px;
    font-family: Helvetica, Arial, sans-serif;
    letter-spacing: 1px;
    text-align: center;
    border: 1px solid rgba(0,0,0,.05);
  }
  .example {
    display: flex;
  }

  .wrapper {
    border: 1px solid red;
  }
  </style>
  <div id="app"></div>
```
```jsx
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
        const { index } = this.state;

        return (
            <div className="example">
                <div>
                    <dl>
                        <dt>
                            Push:
                        </dt>
                        <dd>
                            <button onClick={this.onClick}>Animate</button>
                        </dd>
                    </dl>

                    <KendoReactAnimation.Push className="wrapper">
                        <div className="content" key={index}>{index}</div>
                    </KendoReactAnimation.Push>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

### Decorate the Children

#### Set a CSS class

To set a CSS class to the Push children components use the `componentChildClassName` property. Use it to style the animated content.

```html
  <style>
  .child {
    color: black;
    background-color: orange;
  }

  .content {
    width: 100px;
    padding: 10px;
    font-size: 13px;
    font-family: Helvetica, Arial, sans-serif;
    letter-spacing: 1px;
    text-align: center;
    border: 1px solid rgba(0,0,0,.05);
  }
  .example {
    display: flex;
  }
  </style>
  <div id="app"></div>
```
```jsx
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
        const { index } = this.state;

        return (
            <div className="example">
                <div>
                    <dl>
                        <dt>
                            Push:
                        </dt>
                        <dd>
                            <button onClick={this.onClick}>Animate</button>
                        </dd>
                    </dl>

                    <KendoReactAnimation.Push componentChildClassName="child">
                        <div className="content" key={index}>{index}</div>
                    </KendoReactAnimation.Push>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

#### Use default child CSS class

By default, the child component renders a `k-child-animation-container` CSS class. It can be used to style the element without the need of specifying a separate CSS class.

```html
  <style>
  .k-animation-container > .k-child-animation-container {
    color: black;
    background-color: orange;
  }

  .content {
    width: 100px;
    padding: 10px;
    font-size: 13px;
    font-family: Helvetica, Arial, sans-serif;
    letter-spacing: 1px;
    text-align: center;
    border: 1px solid rgba(0,0,0,.05);
  }
  .example {
    display: flex;
  }
  </style>
  <div id="app"></div>
```
```jsx
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
        const { index } = this.state;

        return (
            <div className="example">
                <div>
                    <dl>
                        <dt>
                            Push:
                        </dt>
                        <dd>
                            <button onClick={this.onClick}>Animate</button>
                        </dd>
                    </dl>

                    <KendoReactAnimation.Push>
                        <div className="content" key={index}>{index}</div>
                    </KendoReactAnimation.Push>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

## Suggested Links

* [API Reference of the Push Component]({% slug api_push_kendouiforreact %})
