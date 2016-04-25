---
title: Slide Overview
page_title: Slide Overview | Kendo UI Slide Animation for React
description: "Use the Kendo UI Slide Animation component in a React project."
slug: overview_slide_kendouiforreact
position: 1
---

# Slide Overview

The Kendo UI Slide component for React shows or hides a single element with vertical sliding effect. The component utilizes [ReactTransitionGroup](https://facebook.github.io/react/docs/animation.html) to detect whether content is entering or leaving.
The entering element will slide from top to bottom. Conversely, the leaving element will slide out from bottom to top.

> **Note that only entering or leaving elements from the DOM will be animated**.

> **The Kendo UI Slide component should be always present in the `rendering tree` in order to work**

### Default Setup

The example below demonstrates the default setup of a Kendo UI Slide Animation for React.

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

        this.state = { show: true };
    }

    onClick = () => {
        this.setState({
            show: !this.state.show
        });
    }

    render() {
        const { show } = this.state;

        const children = show ? (<div className="content">CONTENT</div>) : null;

        return (
            <div>
                <dl>
                    <dt>
                        Slide:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <KendoReactAnimation.Slide>
                    {children}
                </KendoReactAnimation.Slide>
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

### Direction

The component can control the `slide direction` of the entering/leaving element. Use `direction` property to control the slide direction.

The supported directions are:

- `down` (default) - slide the content from **top** to **bottom** on show and vice-versa.
- `up` - slide the content from **bottom** to **top** on show and vice-versa.

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

        this.state = { show: true };
    }

    onClick = () => {
        this.setState({
            show: !this.state.show
        });
    }

    render() {
        const { show } = this.state;

        const children = show ? (<div className="content">CONTENT</div>) : null;

        return (
            <div>
                <dl>
                    <dt>
                        Slide:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <KendoReactAnimation.Slide direction="up">
                    {children}
                </KendoReactAnimation.Slide>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

### Slide In Duration

The component can control the duration of the `slide in` animation. To modify the `slide in` duration, you will need to update the `slideInDuration` property and
update the duration in the corresponding CSS class.

> Sync up the `slideInDuration` property with the transition duration defined in the static `k-slide-down-enter-active` CSS class.

```html
  <style>
    .k-slide-down-enter-active {
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

        this.state = { show: false };
    }

    onClick = () => {
        this.setState({
            show: !this.state.show
        });
    }

    render() {
        const { show } = this.state;

        const children = show ? (<div className="content">CONTENT</div>) : null;

        const slideProps = {
            slideInDuration: 800
        };

        return (
            <div>
                <dl>
                    <dt>
                        Slide:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <KendoReactAnimation.Slide {...slideProps}>
                    {children}
                </KendoReactAnimation.Slide>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

### Slide Out Duration

The component can control the duration of the `slide out` animation. To modify the `slide out` duration, you will need to update the `slideOutDuration` property and
update the duration in the corresponding CSS class.

> Sync up the `slideOutDuration` property with the transition duration defined in the static `k-slide-down-leave-active` CSS class.

```html
  <style>
    .k-slide-down-leave-active {
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

        this.state = { show: true };
    }

    onClick = () => {
        this.setState({
            show: !this.state.show
        });
    }

    render() {
        const { show } = this.state;

        const children = show ? (<div className="content">CONTENT</div>) : null;

        const slideProps = {
            slideOutDuration: 800
        };

        return (
            <div>
                <dl>
                    <dt>
                        Slide:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <KendoReactAnimation.Slide {...slideProps}>
                    {children}
                </KendoReactAnimation.Slide>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

### Disable Slide In Animation

The Slide component allows to disable the showing animation, which will result in instant element display. To disable animation, you will need to define the `animateOnSlideIn` option to `false`.

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

        this.state = { show: false };
    }

    onClick = () => {
        this.setState({
            show: !this.state.show
        });
    }

    render() {
        const { show } = this.state;

        const children = show ? (<div className="content">CONTENT</div>) : null;

        return (
            <div>
                <dl>
                    <dt>
                        Slide:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <KendoReactAnimation.Slide animateOnSlideIn={false}>
                    {children}
                </KendoReactAnimation.Slide>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

### Disable Slide Out Animation

The Slide component allows to disable the hiding animation, which will result in instant element hiding. To disable animation, you will need to define the `animateOnSlideOut` option to `false`.

> By default, `slide out` animation is disabled

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

        this.state = { show: true };
    }

    onClick = () => {
        this.setState({
            show: !this.state.show
        });
    }

    render() {
        const { show } = this.state;

        const children = show ? (<div className="content">CONTENT</div>) : null;

        return (
            <div>
                <dl>
                    <dt>
                        Slide:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <KendoReactAnimation.Slide animateOnSlideOut={false}>
                    {children}
                </KendoReactAnimation.Slide>
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

* [Client-Side API Reference for the Kendo UI Slide Component](https://github.com/telerik/kendo-react-animation/blob/master/docs/slide/api.md)
