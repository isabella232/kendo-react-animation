---
title: FadeIn Overview
page_title: FadeIn Overview | Kendo UI FadeIn Animation for React
description: "Use the Kendo UI FadeIn Animation component in a React project."
slug: overview_fadein_kendouiforreact
position: 1
---

# FadeIn Overview

The Kendo UI FadeIn component for React enables animation of the entering elements. The component utilizes [ReactTransitionGroup](https://facebook.github.io/react/docs/animation.html) to detect which children is entering or leaving.
All leaving elements will be removed right away and the entering ones will be shown with animated `opacity`.

> The Kendo UI FadeIn component should be always present in the virtual DOM in order to work

## Demos

### Default Setup

The example below demonstrates the default setup of a Kendo UI FadeIn Animation for React.

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
                        Action:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <KendoReactAnimation.FadeIn>
                    <div key={index}>{index}</div>
                </KendoReactAnimation.FadeIn>
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

### Fade in duration

The component allows to control the duration of the `fade in` animation. This configuration is pretty similar to the [ReactCSSTransitionGroup](https://facebook.github.io/react/docs/animation.html#animating-one-or-zero-items) component. The process includes configuration of 2 properties:

- duration - define the duration of the animation
- transitionName - define the CSS classe that include the updated transition duration

The `duration` property controls the duration of the animation. After the time runs out, the animation will be cut out even of the actual CSS transition hasn't finished yet.
The `transitionName` property defines the class name that will be added to the entering element. If a string name, e.g. 'fade-in', is defined, then it will be prefixed with `-enter` and `-enter-active` values.
The first class name will be added in on initial render and after one animation frame (~16ms), the second one that contains the CSS transition configuration will be added.

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

                <KendoReactAnimation.FadeIn duration={800} transitionName="fade-in">
                    <div key={index}>{index}</div>
                </KendoReactAnimation.FadeIn>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

### Fade in animation

The `fade in` animation can be modified using custom CSS classes. They can be defined using `transitionName` property.

> If the duration of the animation is different than default `500ms`, then you will need to update the `duration` property.

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

                <KendoReactAnimation.FadeIn transitionName="fade-in">
                    <div key={index}>{index}</div>
                </KendoReactAnimation.FadeIn>
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
