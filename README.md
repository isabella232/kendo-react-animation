[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# Kendo UI Animation for React

* [Overview](https://github.com/telerik/kendo-react-animation#overview)
* [Basic Usage](https://github.com/telerik/kendo-react-animation#basic-usage)
* [Installation](https://github.com/telerik/kendo-react-animation#installation)
* [Browser Support](https://github.com/telerik/kendo-react-animation#browser-support)
* [Glossary](https://github.com/telerik/kendo-react-animation#glossary)
  * [Component](https://github.com/telerik/kendo-react-animation#component)
  * [Package](https://github.com/telerik/kendo-react-animation#package)

## Overview

This repository contains the source code and documentation of the Kendo UI Animation package for React.

Currently, it includes the following components:

* Fade
* Expand
* Push
* Slide
* Zoom

For more information on upcoming Animation features, refer to the [Roadmap](https://github.com/telerik/kendo-react-animation/blob/master/docs/roadmap.md).

## Basic Usage

The Animation components use the [ReactTransitionGroup](https://facebook.github.io/react/docs/animation.html) component to animate elements that appear, enter, or leave.

### Kendo UI Fade

The Fade animates newly-added children with a fade-in effect.

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

For more examples and available configuration options, refer to the [Fade documentation](https://github.com/telerik/kendo-react-animation/blob/master/docs/fade/index.md).

### Kendo UI Expand

The Expand animates the CSS `height` property of the container element.

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

For more examples and available configuration options, refer to the [Expand documentation](https://github.com/telerik/kendo-react-animation/blob/master/docs/expand/index.md).

### Kendo UI Push

The Push slides the new content pushing the old one out.

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
                        Push:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <KendoReactAnimation.Push>
                    <div className="content" key={index}>{index}</div>
                </KendoReactAnimation.Push>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

For more examples and available configuration options, refer to the [Push documentation](https://github.com/telerik/kendo-react-animation/blob/master/docs/push/index.md).

### Kendo UI Slide 

The Slide slides a single piece of content vertically.

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

For more examples and available configuration options, refer to the [Slide documentation](https://github.com/telerik/kendo-react-animation/blob/master/docs/slide/index.md).|

### Kendo UI Zoom

The Zoom shows new content using a zoom transition.

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

For more examples and available configuration options, refer to the [Zoom documentation](https://github.com/telerik/kendo-react-animation/blob/master/docs/zoom/index.md).

## Installation

The Animation components are published as a [public scoped NPM package](https://docs.npmjs.com/misc/scope) in the [Telerik organization](https://www.npmjs.com/~telerik) in http://npmjs.org/.

Install it using NPM.

```sh
npm install --save @telerik/kendo-react-animation;
```

Once installed, import the module.

```jsx
// ES2015 module syntax
import {Fade} from 'kendo-react-animation';
```
```jsx
// CommonJS format
var Fade = require('kendo-react-animation').Fade;
```

> To install the npm package, it is recommended that you use Node.js 5.0.0 or later versions.

## Browser Support

The Animation components work in all browsers supported by the React framework&mdash;Internet Explorer 9 and later versions.

## Glossary

Below are explained the basic terms the suite for React applies.

### Component

A Component refers to a [React Component](https://facebook.github.io/react/docs/jsx-in-depth.html#html-tags-vs.-react-components).

### Package

A package contains one or more components, developed in a single repository and distributed in a single NPM package. For example, the Fade, Expand, Slide, Push, and Zoom components for React are part of the Animation Package.
