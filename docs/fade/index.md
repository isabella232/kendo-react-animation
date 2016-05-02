---
title: Overview
page_title: Overview | Kendo UI Fade for React
description: "Use the Kendo UI Fade Animation component in a React project."
slug: overview_fade_kendouiforreact
position: 1
---

# Fade Overview

The Kendo UI Fade component for React shows or hides the elements with animated opacity. The component uses the [ReactTransitionGroup](https://facebook.github.io/react/docs/animation.html) component to detect which children are entering or leaving.

All leaving elements will be removed with an animated opacity from 1 to 0. Entering elements will be added with animated opacity from 0 to 1.

> * Only entering or leaving elements from the DOM will be animated.
> * In order for the Kendo UI Fade component to work, it must always be present in the rendering tree.

## Demos

### Default Setup

The example below demonstrates the default setup of a Kendo UI Fade Animation for React.

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
                        Fade:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <KendoReactAnimation.Fade>
                    <div className="content" key={index}>{index}</div>
                </KendoReactAnimation.Fade>
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

### Set Fade-In Duration

The component enables you to control the duration of the fade-in animation. To modify the fade-in duration, update the [`fadeInDuration`]({% slug api_fade_kendouiforreact %}#fadeinduration-numberdefault-500) property and the duration in the corresponding CSS class.

> Sync up the `fadeInDuration` property with the transition duration defined in the static `k-fade-in-enter-active` CSS class.

```html
  <style>
    .k-fade-in-enter-active {
        transition: opacity 800ms ease-in-out;
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

        const fadeProps = {
            fadeInDuration: 800
        };

        return (
            <div>
                <dl>
                    <dt>
                        Fade in:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <KendoReactAnimation.Fade {...fadeProps}>
                    <div className="content" key={index}>{index}</div>
                </KendoReactAnimation.Fade>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

### Set Fade-Out Duration

The component enables you to control the duration of the fade-out animation. To modify the fade-out duration, update the [`fadeOutDuration`]({% slug api_fade_kendouiforreact %}#fadeoutduration-numberdefault-500) property and the duration in the corresponding CSS class.

> Sync up the `fadeOutDuration` property with the transition duration defined in the static `k-fade-down-leave-active` CSS class.

```html
  <style>
    .k-fade-leave-active {
        transition: opacity 800ms ease-in-out;
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

        const fadeProps = {
            animateOnFadeOut: true,
            fadeInDuration: 800
        };

        return (
            <div>
                <dl>
                    <dt>
                        Fade out:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <KendoReactAnimation.Fade {...fadeProps}>
                    <div className="content" key={index}>{index}</div>
                </KendoReactAnimation.Fade>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

### Disable Fade-In Animations

The Fade component allows you to disable the showing animation, which will result in an instant element display. To disable the fade-in animation, set the [`animateOnFadeIn`]({% slug api_fade_kendouiforreact %}#animateonfadein-booleandefault-true) option to `false`.

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
                        Fade:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <KendoReactAnimation.Fade animateOnFadeIn={false}>
                    <div className="content" key={index}>{index}</div>
                </KendoReactAnimation.Fade>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

```

### Disable Fade-Out Animations

The Fade component allows you to disable the hiding animation, which will result in an instant element hiding. To disable the fade-out animation, set the [`animateOnFadeOut`]({% slug api_fade_kendouiforreact %}#animateonfadeout-booleandefault-false) option to `false`.

By default, the fade-out animation is disabled.

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
                        Fade:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <KendoReactAnimation.Fade animateOnFadeOut={false}>
                    <div className="content" key={index}>{index}</div>
                </KendoReactAnimation.Fade>
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

The Fade Animation component calls special hooks when children are declaratively added.

### componentWillFadeIn

The `componentWillFadeIn` hook is called when a component is added to an existing Fade component and the animation has not started yet.

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

    onComponentWillFadeIn = () => {
        const calls = this.state.callbackCalls.slice();

        calls.push("component will fade in");

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
                            Fade:
                        </dt>
                        <dd>
                            <button onClick={this.onClick}>Animate</button>
                        </dd>
                    </dl>

                    <KendoReactAnimation.Fade componentWillFadeIn={this.onComponentWillFadeIn}>
                        {<div className="content" key={index}>{index}</div>}
                    </KendoReactAnimation.Fade>
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

### componentDidFadeIn

The `componentDidFadeIn` hook is called when a component is added to an existing Fade component and the animation is now finished.

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

    onComponentDidFadeIn = () => {
        const calls = this.state.callbackCalls.slice();

        calls.push("component did fade in");

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
                            Fade:
                        </dt>
                        <dd>
                            <button onClick={this.onClick}>Animate</button>
                        </dd>
                    </dl>

                    <KendoReactAnimation.Fade componentDidFadeIn={this.onComponentDidFadeIn}>
                        {<div className="content" key={index}>{index}</div>}
                    </KendoReactAnimation.Fade>
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

Custom CSS classes can be set to the Fade component and to its children components.

### Decorate the Fade

To set a CSS class to the Fade component, use the [`className`]({% slug api_fade_kendouiforreact %}#classname-string) property.

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
    width: 200px;
    background-color: red;
  }
  </style>
  <div id="app"></div>
```
```jsx
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { index: 0 };
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
                            Fade:
                        </dt>
                        <dd>
                            <button onClick={this.onClick}>Animate</button>
                        </dd>
                    </dl>

                    <KendoReactAnimation.Fade className="wrapper">
                        {<div className="content" key={index}>{index}</div>}
                    </KendoReactAnimation.Fade>
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

To set a CSS class to the Fade children components, use the [`componentChildClassName`]({% slug api_fade_kendouiforreact %}#componentchildclassname-string) property. Apply it to style the animated content.

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

        this.state = { index: 0 };
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
                            Fade:
                        </dt>
                        <dd>
                            <button onClick={this.onClick}>Animate</button>
                        </dd>
                    </dl>

                    <KendoReactAnimation.Fade componentChildClassName="child">
                        {<div className="content" key={index}>{index}</div>}
                    </KendoReactAnimation.Fade>
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

* [API Reference of the Fade Component]({% slug api_fade_kendouiforreact %})
