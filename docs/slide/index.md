---
title: Overview
page_title: Overview | Kendo UI Slide Animation for React
description: "Use the Kendo UI Slide Animation component in a React project."
slug: overview_slide_kendouiforreact
position: 1
---

# Slide Overview

This article assumes that you are well-acquainted with the basics of the Animation component. For more information, refer to the [article on Animation fundamentals]({% slug fundamentals_animation_kendouiforreact %}). 

The Kendo UI Slide component for React shows or hides a single element with vertical sliding effect. The component uses the [ReactTransitionGroup](https://facebook.github.io/react/docs/animation.html) component to detect whether the content is entering or leaving.

The entering element will slide from top to bottom. The leaving element will slide from bottom to top.

> * Only entering or leaving elements from the DOM will be animated.
> * In order for the Kendo UI Slide component to work, it must always be present in the rendering tree.

## Default Setup

The example below demonstrates the default setup of a Kendo UI Slide for React.

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

### Define Direction

The component enables you to control the slide direction of the entering or leaving element. Use the [`direction`]({% slug api_slide_kendouiforreact %}#direction-stringdefault-down) property to control the slide direction.

The supported directions are:
- (Default) The `down` direction&mdash;Slides the content from top to bottom on show, and vice-versa.
- The `up` direction&mdash;Slides the content from bottom to top on show, and vice-versa.
- The `left` direction&mdash;Slides the content from right to left on show, and vice-versa.
- The `right` direction&mdash;Slides the content from left to right on show, and vice-versa.

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

### Set Slide-In Duration

The component enables you to control the duration of the slide-in animation. To modify the slide-in duration, update the [`slideInDuration`]({% slug api_slide_kendouiforreact %}#slideinduration-numberdefault-500) property and update the duration in the corresponding CSS class.

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

### Set Slide-Out Duration

The component enables you to control the duration of the slide-out animation. To modify the slide-out duration, update the [`slideOutDuration`]({% slug api_slide_kendouiforreact %}#slideoutduration-numberdefault-500-1) property and update the duration in the corresponding CSS class.

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

### Disable Slide-In Animation

The Slide component allows you to disable the showing animation, which will result in an instant element display. To disable the slide-in animation, set the [`animateOnSlideIn`]({% slug api_slide_kendouiforreact %}#animateonslidein-booleandefault-true) option to `false`.

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

### Disable Slide-Out Animation

The Slide component allows you to disable the hiding animation, which will result in an instant element hiding. To disable the slide-out animation, set the [`animateOnSlideOut`]({% slug api_slide_kendouiforreact %}#animateonslideout-booleandefault-false) option to `false`.

By default, the slide-out animation is disabled.

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

## Wire Life-Cycle Hooks

The Slide Animation component calls special hooks when children are declaratively added.

### Before Animation Starts

The [`componentWillSlideIn`]({% slug api_slide_kendouiforreact %}#componentwillslidein) hook is called when a component is added to an existing Slide component and the animation has not started yet.

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

        this.state = { callbackCalls: [], show: false };
    }

    onClick = () => {
        this.setState({
            show: !this.state.show
        });
    }

    onComponentWillSlideIn = () => {
        const calls = this.state.callbackCalls.slice();

        calls.push("component will slide in");

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
        const { show } = this.state;

        const children = show ? (<div className="content">CONTENT</div>) : null;

        return (
            <div className="example">
                <div>
                    <dl>
                        <dt>
                            Slide:
                        </dt>
                        <dd>
                            <button onClick={this.onClick}>Animate</button>
                        </dd>
                    </dl>

                    <KendoReactAnimation.Slide componentWillSlideIn={this.onComponentWillSlideIn}>
                        {children}
                    </KendoReactAnimation.Slide>
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

The [`componentDidSlideIn`]({% slug api_slide_kendouiforreact %}#componentdidslidein) hook is called when a component is added to an existing Slide component and the animation is now finished.

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

        this.state = { callbackCalls: [], show: false };
    }

    onClick = () => {
        this.setState({
            show: !this.state.show
        });
    }

    onComponentDidSlideIn = () => {
        const calls = this.state.callbackCalls.slice();

        calls.push("component did slide in");

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
        const { show } = this.state;

        const children = show ? (<div className="content">CONTENT</div>) : null;

        return (
            <div className="example">
                <div>
                    <dl>
                        <dt>
                            Slide:
                        </dt>
                        <dd>
                            <button onClick={this.onClick}>Animate</button>
                        </dd>
                    </dl>

                    <KendoReactAnimation.Slide componentDidSlideIn={this.onComponentDidSlideIn}>
                        {children}
                    </KendoReactAnimation.Slide>
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

Custom CSS classes can be set to the Slide component and to its children components.

### Decorate the Slide

To set a CSS class to the Slide component, use the [`className`]({% slug api_slide_kendouiforreact %}#classname-string) property.

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
            <div className="example">
                <div>
                    <dl>
                        <dt>
                            Slide:
                        </dt>
                        <dd>
                            <button onClick={this.onClick}>Animate</button>
                        </dd>
                    </dl>

                    <KendoReactAnimation.Slide className="wrapper">
                        {children}
                    </KendoReactAnimation.Slide>
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

To set a CSS class to the Slide children components, use the [`componentChildClassName`]({% slug api_slide_kendouiforreact %}#componentchildclassname-string) property. Apply it to style the animated content.

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
            <div className="example">
                <div>
                    <dl>
                        <dt>
                            Slide:
                        </dt>
                        <dd>
                            <button onClick={this.onClick}>Animate</button>
                        </dd>
                    </dl>

                    <KendoReactAnimation.Slide componentChildClassName="child">
                        {children}
                    </KendoReactAnimation.Slide>
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
            <div className="example">
                <div>
                    <dl>
                        <dt>
                            Slide:
                        </dt>
                        <dd>
                            <button onClick={this.onClick}>Animate</button>
                        </dd>
                    </dl>

                    <KendoReactAnimation.Slide componentChildClassName="child">
                        {children}
                    </KendoReactAnimation.Slide>
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

* [API Reference of the Slide Component]({% slug api_slide_kendouiforreact %})
