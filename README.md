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

This repository contains the source code and documentation of the Kendo UI Animation components for React.

Currently, the package includes the following Animation components:
* Fade 
* Expand
* Slide 

For more information on forthcoming Animation package features, refer to the [Roadmap](https://github.com/telerik/kendo-react-animation/blob/master/docs/roadmap.md).

## Basic Usage

The Animation components utilize the [ReactTransitionGroup](https://facebook.github.io/react/docs/animation.html) component to animate elements that appear, enter, or leave.

### Kendo UI Fade for React 

The Fade component animates newly-added children with `fade in` effect.

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

### Kendo UI Expand for React 

The Expand component animates the CSS `height` property of the container element.

```html-preview
// code goes here
```
```jsx
// code 
```

### Kendo UI Slide for React 

The Slide component slides a single piece of content vertically.

```html-preview
// code goes here
```
```jsx
// code 
```

For more examples and available configuration options, refer to the [Animation documentation section](https://github.com/telerik/kendo-react-animation/blob/master/docs/index.md).

## Installation

The React Animation is published as a [public scoped NPM package](https://docs.npmjs.com/misc/scope) in the [Telerik organization](https://www.npmjs.com/~telerik) in http://npmjs.org/.

Install it using NPM:

```sh
npm install --save @telerik/kendo-react-animation;
```

Once installed, import the module:

```jsx
// ES2015 module syntax
import {Fade} from 'kendo-react-animation';
```
```jsx
// CommonJS format
var Fade = require('kendo-react-animation').Fade;
```

## Browser Support

The Kendo UI Animation components for React supports all browsers that are supported by the React framework&mdash;Internet Explorer 9 and later versions.

## Glossary

Below are explained the basic terms used the Kendo UI suite for React applies.

### Component

A Component refers to a [React Component](https://facebook.github.io/react/docs/jsx-in-depth.html#html-tags-vs.-react-components).

### Package

A package contains one or more components, developed in a single repository and distributed in a single NPM package. For example, the Kendo UI Fade component for React is part of the Animation Package.
