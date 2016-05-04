---
title: Overview
page_title: Overview | Kendo UI Zoom Animation for React
description: "Use the Kendo UI Zoom Animation component in a React project."
slug: overview_zoom_kendouiforreact
position: 1
---

# Zoom Overview

The Kendo UI Zoom component for React shows the entering element using a combination of zoom and fade animation effects. The component uses the [ReactTransitionGroup](https://facebook.github.io/react/docs/animation.html) component to detect whether the content is entering or leaving.

By default, the entering component will zoom in and the leaving component will fade out.

> * In order for the Kendo UI Zoom component to work, it must always be present in the rendering tree.

## Demos

### Default Setup

The example below demonstrates the default setup of a Kendo UI Zoom for React.

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
                        Zoom:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <KendoReactAnimation.Zoom>
                    <div className="content" key={index}>{index}</div>
                </KendoReactAnimation.Zoom>
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

The component enables you to control the zoom direction of the entering element. Use the [`direction`]({% slug api_zoom_kendouiforreact %}#direction-stringdefault-in) property to control the zoom direction.

The supported directions are:
- (Default) The `out` direction&mdash;Zooms in the entering element and fades out leaving one.
- The `in` direction&mdash;Fades in the entering element and zooms out the leaving one.

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

        this.state = { direction: 'out', index: 1 };
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
                            <option value="in">In</option>
                            <option value="out">Out</option>
                        </select>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        Zoom:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <KendoReactAnimation.Zoom direction={direction}>
                    <div className="content" key={index}>{index}</div>
                </KendoReactAnimation.Zoom>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

### Set Zoom-In Duration

The component enables you to control the animation duration of the entering component. To modify the zoom-in duration, update the [`zoomInDuration`]({% slug api_zoom_kendouiforreact %}#zoominduration-numberdefault-300) property and update the duration in the corresponding CSS class.

> Sync up the `zoomInDuration` property with the transition duration defined in the static `k-zoom-{direction}-enter-active` CSS class.

```html
  <style>
    .k-zoom-out-enter-active {
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

        const zoomProps = {
            zoomInDuration: 800
        };

        return (
            <div>
                <dl>
                    <dt>
                        Zoom:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <KendoReactAnimation.Zoom {...zoomProps}>
                    <div className="content" key={index}>{index}</div>
                </KendoReactAnimation.Zoom>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

### Set Zoom-Out Duration

The component enables you to control the animation duration of the leaving component. To modify the zoom-out duration, update the [`zoomOutDuration`]({% slug api_zoom_kendouiforreact %}#zoomoutduration-numberdefault-300-1) property and update the duration in the corresponding CSS class.

> Sync up the `zoomOutDuration` property with the transition duration defined in the static `k-zoom-{direction}-leave-active` CSS class.

```html
  <style>
    .k-zoom-out-leave-active {
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

        const zoomProps = {
            zoomOutDuration: 800
        };

        return (
            <div>
                <dl>
                    <dt>
                        Zoom:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <KendoReactAnimation.Zoom {...zoomProps}>
                    <div className="content" key={index}>{index}</div>
                </KendoReactAnimation.Zoom>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

### Disable Zoom-In Animation

The Zoom component allows you to disable the showing animation, which will result in an instant element display. To disable the zoom-in animation, set the [`animateOnZoomIn`]({% slug api_zoom_kendouiforreact %}#animateonzoomin-booleandefault-true) option to `false`.

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
                        Zoom:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <KendoReactAnimation.Zoom animateOnZoomIn={false}>
                    <div className="content" key={index}>{index}</div>
                </KendoReactAnimation.Zoom>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

### Disable Zoom-Out Animation

The Zoom component allows you to disable the hiding animation, which will result in an instant element hiding. To disable the zoom-out animation, set the [`animateOnZoomOut`]({% slug api_zoom_kendouiforreact %}#animateonzoomout-booleandefault-false) option to `false`.

By default, the zoom-out animation is disabled.

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
                        Zoom:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <KendoReactAnimation.Zoom animateOnZoomOut={false}>
                    <div className="content" key={index}>{index}</div>
                </KendoReactAnimation.Zoom>
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

The Zoom Animation component calls special hooks when children are declaratively added.

### Before Animation Starts

The [`componentWillZoomIn`]({% slug api_zoom_kendouiforreact %}#componentwillzoomin) hook is called when a component is added to an existing Zoom component and the animation has not started yet.

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

    onComponentWillZoomIn = () => {
        const calls = this.state.callbackCalls.slice();

        calls.push("component will zoom in");

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
                            Zoom:
                        </dt>
                        <dd>
                            <button onClick={this.onClick}>Animate</button>
                        </dd>
                    </dl>

                    <KendoReactAnimation.Zoom componentWillZoomIn={this.onComponentWillZoomIn}>
                        <div className="content" key={index}>{index}</div>
                    </KendoReactAnimation.Zoom>
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

The [`componentDidZoomIn`]({% slug api_zoom_kendouiforreact %}#componentdidzoomin) hook is called when a component is added to an existing Zoom component and the animation is now finished.

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

    onComponentDidZoomIn = () => {
        const calls = this.state.callbackCalls.slice();

        calls.push("component did zoom in");

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
                            Zoom:
                        </dt>
                        <dd>
                            <button onClick={this.onClick}>Animate</button>
                        </dd>
                    </dl>

                    <KendoReactAnimation.Zoom componentDidZoomIn={this.onComponentDidZoomIn}>
                        <div className="content" key={index}>{index}</div>
                    </KendoReactAnimation.Zoom>
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

Custom CSS classes can be set to the Zoom component and to its children components.

### Decorate the Zoom

To set a CSS class to the Zoom component use the `className` property.

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
                            Zoom:
                        </dt>
                        <dd>
                            <button onClick={this.onClick}>Animate</button>
                        </dd>
                    </dl>

                    <KendoReactAnimation.Zoom className="wrapper">
                        <div className="content" key={index}>{index}</div>
                    </KendoReactAnimation.Zoom>
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

To set a CSS class to the Zoom children components use the `componentChildClassName` property. Use it to style the animated content.

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
                            Zoom:
                        </dt>
                        <dd>
                            <button onClick={this.onClick}>Animate</button>
                        </dd>
                    </dl>

                    <KendoReactAnimation.Zoom componentChildClassName="child">
                        <div className="content" key={index}>{index}</div>
                    </KendoReactAnimation.Zoom>
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
                            Zoom:
                        </dt>
                        <dd>
                            <button onClick={this.onClick}>Animate</button>
                        </dd>
                    </dl>

                    <KendoReactAnimation.Zoom>
                        <div className="content" key={index}>{index}</div>
                    </KendoReactAnimation.Zoom>
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

* [API Reference of the Zoom Component]({% slug api_zoom_kendouiforreact %})
