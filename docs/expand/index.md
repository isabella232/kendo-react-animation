---
title: Expand Overview
page_title: Expand Overview | Kendo UI Expand Animation for React
description: "Use the Kendo UI Expand Animation component in a React project."
slug: overview_expand_kendouiforreact
position: 1
---

# Expand Overview

The Kendo UI Expand component for React shows/hides a single element animating the height of the root element. The component utilizes [ReactTransitionGroup](https://facebook.github.io/react/docs/animation.html) to detect which children are entering or leaving.
The entering element will be shown with a gradual `height` transition from 0% to 100%. Conversely, the leaving element will be hidden with a gradual `height` transition from 100% to 0%.

> **Note that only entering or leaving elements from the DOM will be animated**.

> **The Kendo UI Expand component should be always present in the `rendering tree` in order to work**

### Default Setup

The example below demonstrates the default setup of a Kendo UI Expand Animation for React.

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

### Expand duration

The Expand component can control the duration of the expand (showing) effect. To configure the expand duration you will need to define the `expandDuration` property

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

### Collapse duration

The Expand component can control the duration of the collapse (hiding) effect. To configure the collapse duration you will need to define the `collapseDuration` property

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

### Disable expand animation

The Expand component allows to disable the showing animation, which will result in instant element display. To disable animation, you will need to define the `animateOnExpand` option to `false`.

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

### Disable collapse animation

The Expand allows to disable the hiding animation, which will result in instant element hiding. To disable animation, you will need to define the `animateOnCollapse` option to `false`.

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

* [Client-Side API Reference for the Kendo UI Expand Component](https://github.com/telerik/kendo-react-animation/blob/master/docs/expand/api.md)
