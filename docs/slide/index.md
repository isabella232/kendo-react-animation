---
title: Slide Overview
page_title: Slide Overview | Kendo UI Slide Animation for React
description: "Use the Kendo UI Slide Animation component in a React project."
slug: overview_slide_kendouiforreact
position: 1
---

# Slide Overview

The Kendo UI Slide component for React shows or hides a single element with vertical sliding effect. The component utilizes [ReactTransitionGroup](https://facebook.github.io/react/docs/animation.html) to detect whether content is entering or leaving.
The entering element will be slide in from top to bottom. Conversely, the leaving element will be slide out from bottom to top.

> **Note that only entering or leaving elements from the DOM will be animated**.

> The Kendo UI Slide component should be always present in the `rendering tree` in order to work

## Demos

### Default Setup

The example below demonstrates the default setup of a Kendo UI Slide Animation for React.

```html-preview
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

        const children = show ? (<div>Content</div>) : null;

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

```html-preview
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

        const children = show ? (<div>Content</div>) : null;

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

### Animation Duration

The component can control the duration of the `slide in` animation. This configuration is similar to the [ReactCSSTransitionGroup](https://facebook.github.io/react/docs/animation.html#animating-one-or-zero-items) component.
To update the `slide-in` duration, 2 properties should be modified:

- slideInDuration - defines the duration of the `slide-in` animation
- transitionName - defines the CSS class that include the updated transition duration

The `slideInDuration` property controls the duration of the animation. After the time runs out, the animation will be cut out even if the actual CSS transition hasn't finished yet.
The `transitionName` property defines the class name that will be added to the entering element. If a string name, e.g. 'slide-in', is defined then it will be prefixed with `-enter` and `-enter-active` values.
The first class name will be added on initial render and after one animation frame (~16ms), the second one that contains the CSS transition configuration will be added.

```html
  <style>
    .slide-down-enter {
        transform: translateY(-100%);
    }

    .slide-down-enter-active {
        transform: translateY(0);
        transition: transform 800ms ease-in-out;
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

        const children = show ? (<div>Content</div>) : null;

        const slideProps = {
            slideInDuration: 800,
            transitionName: "slide-down"
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

The component can control the duration of the `slide out` animation. This configuration is similar to the [ReactCSSTransitionGroup](https://facebook.github.io/react/docs/animation.html#animating-one-or-zero-items) component.
To update the `slide-out` duration, 2 properties should be modified:

- slideOutDuration - defines the duration of the `slide-out` animation
- transitionName - defines the CSS class that include the updated transition duration

The `slideOutDuration` property controls the duration of the animation. After the time runs out, the animation will be cut out even if the actual CSS transition hasn't finished yet.
The `transitionName` property defines the class name that will be added to the entering element. If a string name, e.g. 'slide', is defined then it will be prefixed with `-leave` and `-leave-active` values.
The first class name will be added on initial render and after one animation frame (~16ms), the second one that contains the CSS transition configuration will be added.

```html
  <style>
    .slide-down-leave {
        transform: translateY(0);
    }

    .slide-down-leave-active {
        transform: translateY(-100%);
        transition: transform 800ms ease-in-out;
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

        const children = show ? (<div>Content</div>) : null;

        const slideProps = {
            slideInDuration: 800,
            transitionName: "slide-down"
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

### Slide In Animation

The `slide in` animation effect can be modified using custom CSS classes. They can be defined using the `transitionName` property.

> If the duration of the animation is different than default `300ms`, then the `slideInDuration` property should be updated accordingly.

> The `direction` property will be ignored if custom `transitionName` name is defined

```html
  <style>
    .slide-up-enter {
        transform: translateY(100%);
    }

    .slide-up-enter-active {
        transform: translateY(0);
        transition: transform 300ms ease-in-out;
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

        const children = show ? (<div>Content</div>) : null;

        const slideProps = {
            transitionName: "slide-up"
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

### Slide Out Animation

The `slide out` animation effect can be modified using custom CSS classes. They can be defined using the `transitionName` property.

> If the duration of the animation is different than default `300ms`, then the `slideOutDuration` property should be updated accordingly.

> The `direction` property will be ignored if custom `transitionName` name is defined

```html
  <style>
    .slide-up-leave {
        transform: translateY(0);
    }

    .slide-up-leave-active {
        transform: translateY(100%);
        transition: transform 300ms ease-in-out;
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

        const children = show ? (<div>Content</div>) : null;

        const slideProps = {
            transitionName: "slide-up"
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

        const children = show ? (<div>Content</div>) : null;

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

        const children = show ? (<div>Content</div>) : null;

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
