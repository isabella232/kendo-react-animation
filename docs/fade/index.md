---
title: Fade Overview
page_title: Fade Overview | Kendo UI Fade Animation for React
description: "Use the Kendo UI Fade Animation component in a React project."
slug: overview_fade_kendouiforreact
position: 1
---

# Fade Overview

The Kendo UI Fade component for React shows or hides the elements with animated opacity. The component utilizes [ReactTransitionGroup](https://facebook.github.io/react/docs/animation.html) to detect which children is entering or leaving.
All leaving elements will be removed with animated `opacity` from 1 to 0. Conversely, entering elements will be added with animated `opacity` from 0 to 1.

> **Note that only entering or leaving from the DOM elements will be animated**.

> The Kendo UI Fade component should be always present in the virtual DOM in order to work

## Demos

### Default Setup

The example below demonstrates the default setup of a Kendo UI Fade Animation for React.

```html-preview
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
                    <div key={index}>{index}</div>
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

### Fade In Duration

The component can control the duration of the `fade in` animation. This configuration is similar to the [ReactCSSTransitionGroup](https://facebook.github.io/react/docs/animation.html#animating-one-or-zero-items) component.
To update the `fade-in` duration, 2 properties should be modified:

- fadeInDuration - defines the duration of the `fade-in` animation
- transitionName - defines the CSS class that include the updated transition duration

The `fadeInDuration` property controls the duration of the animation. After the time runs out, the animation will be cut out even if the actual CSS transition hasn't finished yet.
The `transitionName` property defines the class name that will be added to the entering element. If a string name, e.g. 'fade-in', is defined then it will be prefixed with `-enter` and `-enter-active` values.
The first class name will be added on initial render and after one animation frame (~16ms), the second one that contains the CSS transition configuration will be added.

```html
  <style>
    .fade-in-enter {
        opacity: 0;
    }

    .fade-in-enter-active {
        opacity: 1;
        transition: opacity 800ms ease-in-out;
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
            fadeInDuration: 800,
            transitionName: "fade-in"
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
                    <div key={index}>{index}</div>
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

### Fade Out Duration

The component can control the duration of the `fade out` animation. This configuration is similar to the [ReactCSSTransitionGroup](https://facebook.github.io/react/docs/animation.html#animating-one-or-zero-items) component.
To update the `fade-out` duration, 2 properties should be modified:

- fadeOutDuration - defines the duration of the `fade-out` animation
- transitionName - defines the CSS class that include the updated transition duration

The `fadeOutDuration` property controls the duration of the animation. After the time runs out, the animation will be cut out even if the actual CSS transition hasn't finished yet.
The `transitionName` property defines the class name that will be added to the entering element. If a string name, e.g. 'fade', is defined then it will be prefixed with `-leave` and `-leave-active` values.
The first class name will be added on initial render and after one animation frame (~16ms), the second one that contains the CSS transition configuration will be added.

```html
  <style>
    .fade-leave {
        opacity: 1;
    }

    .fade-leave-active {
        opacity: 0;
        transition: opacity 800ms ease-in-out;
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
            animateOnFadeIn: false,
            animateOnFadeOut: true,
            fadeInDuration: 800,
            transitionName: "fade"
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
                    <div key={index}>{index}</div>
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

### Fade In Animation

The `fade in` animation effect can be modified using custom CSS classes. They can be defined using the `transitionName` property.

> If the duration of the animation is different than default `500ms`, then the `fadeInDuration` property should be updated accordingly.

```html
  <style>
    .fade-in-enter {
        opacity: 0;
        transform: scale(0);
        transform-origin: top left;
    }

    .fade-in-enter-active {
        opacity: 1;
        transform: scale(1);
        transition: opacity 500ms ease-in-out, transform 500ms ease-in-out;
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
                        Action:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <KendoReactAnimation.Fade transitionName="fade-in">
                    <div key={index}>{index}</div>
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

### Fade Out Animation

The `fade out` animation effect can be modified using custom CSS classes. They can be defined using the `transitionName` property.

> If the duration of the animation is different than default `500ms`, then the `fadeOutDuration` property should be updated accordingly.

```html
  <style>
    .fade-leave {
        opacity: 1;
        transform: scale(1);
        transform-origin: top left;
    }

    .fade-leave-active {
        opacity: 0;
        transform: scale(0);
        transition: opacity 500ms ease-in-out, transform 500ms ease-in-out;
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
            animateOnFadeIn: false,
            animateOnFadeOut: true,
            transitionName: "fade"
        };

        return (
            <div>
                <dl>
                    <dt>
                        Action:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <KendoReactAnimation.Fade {...fadeProps}>
                    <div key={index}>{index}</div>
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

### Disable Fade In Animation

The Fade component allows to disable the showing animation, which will result in instant element display. To disable animation, you will need to define the `animateOnFadeIn` option to `false`.

```html-preview
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
                    <div key={index}>{index}</div>
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

### Disable Fade Out Animation

The Fade component allows to disable the hiding animation, which will result in instant element hiding. To disable animation, you will need to define the `animateOnFadeOut` option to `false`.

> By default, `fade out` animation is disabled

```html-preview
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
                    <div key={index}>{index}</div>
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

## Suggested Links

* [Client-Side API Reference for the Kendo UI Animation Component](https://github.com/telerik/kendo-react-animation/blob/master/docs/api.md)
