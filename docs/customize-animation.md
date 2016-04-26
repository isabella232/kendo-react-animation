---
title: Customize Animation
page_title: Customize Animation | Kendo UI Animation Package for React
description: "Customize the Kendo UI Animation components for React."
slug: customizeanimation_kendouiforreact
position: 2
---

# Customize Animation

The Kendo UI Animation components accept custom CSS classes that can be used to customize the animation effects. Except for the Expand component for React, all Animation components support this functionality.

The Animation effect can be updated through the usage of the `transitionName` property. It defines the class name that will be added to the enter or leave elements. The terms come from the `ReactTransitionGroup` context. 

Below are listed the conventions of their meaning:
- Appear element&mdash;The Appear element is an element that is part of the rendered Animation component.
- Enter element&mdash;An element that is added to the children collection of the Animation component.
- Leave element&mdash;An element that is removed from the children collection of the Animation component.

## Configuration

### Entering Animation

To configure the entering animation, define the CSS classes with the syntax demonstrated below. 

```
  .{transition name}-enter {
    /* The class that will be added on initial render of the element */
  }

  .{transition name}-enter-active {
    /* The class that will be added after one time-frame(~16ms) to initiate the transition */
  }
```

The example below demonstrates how to customize the Slide Animation.

```html
<style>
    .slide-up-enter {
        transform: translateY(100%) scale(0);
        transform-origin: top left;
    }

    .slide-up-enter-active {
        transform: translateY(0) scale(1);
        transition: transform 500ms ease-in-out;
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
            slideInDuration: 500,
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

### Leaving Animation

To configure the leaving animation, define the CSS classes with the syntax demonstrated below. 

```
  .{transition name}-leave {
    /* The class that will be added on initial render of the element */
  }

  .{transition name}-leave-active {
    /* The class that will be added after one time-frame(~16ms) to initiate the transition */
  }
```

The example below demonstrates how to customize the Slide Animation.

```html
<style>
    .slide-up-leave {
        transform: translateY(0) scale(1);
        transform-origin: top left;
    }

    .slide-up-leave-active {
        transform: translateY(100%) scale(0);
        transition: transform 500ms ease-in-out;
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
            slideOutDuration: 500,
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

## Suggested Links

* [API Reference of the Fade Component]({% slug api_fade_kendouiforreact %})
* [API Reference of the Slide Component]({% slug api_slide_kendouiforreact %})
