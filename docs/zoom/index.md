---
title: Overview
page_title: Overview | Kendo UI Zoom Animation for React
description: "Use the Kendo UI Zoom Animation component in a React project."
slug: overview_zoom_kendouiforreact
position: 1
---

# Zoom Overview

> Check the [Fundamentals]({% fundamentals_animation_kendouiforreact %}) help topic to get a better understanding of the animation basics.

The Kendo UI Zoom component for React shows the entering element using a combination of zoom and fade animation effects. It uses the [ReactTransitionGroup](https://facebook.github.io/react/docs/animation.html) component to detect whether the content is entering or leaving.

By default, the entering component zooms in and the leaving component fades out. Note that the Zoom component animates both (new and old) elements simultaneously.

> In order for the Zoom to work, it must always be present in the rendering tree.

## Demos

### Default Setup

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

The Zoom enables you to control the zoom direction of the entering element through the [`direction`]({% slug api_zoom_kendouiforreact %}#direction-stringdefault-in) property.

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

### Set Zoom Duration

The Zoom enables you to control the animation duration of the zoom transition. To modify the zoom duration, update the [`duration`]({% slug api_zoom_kendouiforreact %}#duration-numberdefault-300) property and update the duration in the corresponding CSS class.

> Sync up the `duration` property with the transition duration defined in the static `k-zoom-{direction}-enter-active` and `k-zoom-{direction}-leave-active` CSS classes.

```html
  <style>
    .k-zoom-out-enter-active {
        transition: transform 800ms ease-in-out;
    }

    .k-zoom-out-leave-active {
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
            duration: 800
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

### Disable Zoom Animation

The Zoom component allows you to disable the animation, which results in an instant element display. To disable the zoom animation, set the [`animateOnZoom`]({% slug api_zoom_kendouiforreact %}#animateonzoom-booleandefault-true) option to `false`.

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

                <KendoReactAnimation.Zoom animateOnZoom={false}>
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

The Zoom calls special hooks when children are declaratively added.

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

Custom CSS classes can be set to the Zoom and to its children components.

### Decorate the Zoom

To set a CSS class to the Zoom, use the [`className`]({% slug api_zoom_kendouiforreact %}#classname-string) property.

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

#### Set CSS Classes

To set a CSS class to the Zoom children components and to style the animated content, use the [`componentChildClassName`]({% slug api_zoom_kendouiforreact %}#componentchildclassname-string) property.

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

#### Use Default Child CSS Classes

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

* [API Reference of the Zoom]({% slug api_zoom_kendouiforreact %})
