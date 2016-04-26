---
title: Expand Overview
page_title: Expand Overview | Kendo UI Expand for React
description: "Use the Kendo UI Expand Animation component in a React project."
slug: overview_expand_kendouiforreact
position: 1
---

# Expand Overview

The Kendo UI Expand component for React shows or hides a single element by animating the height of the root element. The component utilizes the [`ReactTransitionGroup`](https://facebook.github.io/react/docs/animation.html) configuration to detect which children are entering or leaving.

The entering element will be shown with a gradual `height` transition from `0%` to `100%`. The leaving element will be hidden with a gradual `height` transition from `100%` to `0%`.

> * Only entering or leaving elements from the DOM will be animated.
> * In order for the Kendo UI Expand component to work, it must always be present in the rendering tree.

## Demos

### Default Setup

The example below demonstrates the default setup of a Kendo UI Expand for React.

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

        this.state = { expand: true };
    }

    onClick = () => {
        this.setState({
            expand: !this.state.expand
        });
    }

    render() {
        const { expand } = this.state;

        const children = expand ? (<div className="content">CONTENT</div>) : null;

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

                <KendoReactAnimation.Expand>
                    {children}
                </KendoReactAnimation.Expand>
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

### Set Expand Duration

The Expand component enables you to control the duration of the expand (showing) effect. To configure the expand duration, define the `expandDuration` property.

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

        this.state = { expand: false };
    }

    onClick = () => {
        this.setState({
            expand: !this.state.expand
        });
    }

    render() {
        const { expand } = this.state;

        const children = expand ? (<div className="content">CONTENT</div>) : null;

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

                <KendoReactAnimation.Expand expandDuration={800}>
                    {children}
                </KendoReactAnimation.Expand>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

### Set Collapse Duration

The Expand component enables you to control the duration of the collapse (hiding) effect. To configure the collapse duration. define the `collapseDuration` property.

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

        this.state = { expand: true };
    }

    onClick = () => {
        this.setState({
            expand: !this.state.expand
        });
    }

    render() {
        const { expand } = this.state;

        const children = expand ? (<div className="content">CONTENT</div>) : null;

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

                <KendoReactAnimation.Expand collapseDuration={800}>
                    {children}
                </KendoReactAnimation.Expand>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

### Disable Expand Animation

The Expand component allows you to disable the showing animation, which will result in an instant element display. To disable the Expand animation, set the `animateOnExpand` option to `false`.

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

        this.state = { expand: false };
    }

    onClick = () => {
        this.setState({
            expand: !this.state.expand
        });
    }

    render() {
        const { expand } = this.state;

        const children = expand ? (<div className="content">CONTENT</div>) : null;

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

                <KendoReactAnimation.Expand animateOnExpand={false}>
                    {children}
                </KendoReactAnimation.Expand>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

### Disable Collapse Animation

The Expand allows you to disable the hiding animation, which will result in an instant element hiding. To disable animation, ste the `animateOnCollapse` option to `false`.

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

        this.state = { expand: true };
    }

    onClick = () => {
        this.setState({
            expand: !this.state.expand
        });
    }

    render() {
        const { expand } = this.state;

        const children = expand ? (<div className="content">CONTENT</div>) : null;

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

                <KendoReactAnimation.Expand animateOnCollapse={false}>
                    {children}
                </KendoReactAnimation.Expand>
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

* [API Reference of the Expand Component]({% slug api_expand_kendouiforreact %})
