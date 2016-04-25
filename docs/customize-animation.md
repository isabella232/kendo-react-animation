---
title: Customize animation
page_title: Customize animation | Kendo UI Animation Package for React
description: "Learn how to customize the Kendo UI Animation components for React."
slug: overview_customizeanimation_kendouiforreact
position: 2
---

# Customize Animation

The Kendo UI Animation components accept custom CSS classes that could be used customize the animation effects. All animation
components support that functionality, with the notable exception of the `Expand` component.

The component animation effect can be updated through the usage of `transitionName` property. It defines the class name
that will be added to the entering/leaving element. The terms come from the `ReactTransitionGroup` context and means:

- appear element - an element that are part of the rendered animation component
- enter element - an element that is added to the children collection of the animation component
- leave element - an element that is removed from the children collection of the animation component

## Configure entering animation

To configure the entering animation, you will need to define CSS classes with the following syntax:

```
  .{transition name}-enter {
    /* The class that will be added on initial render of the element */
  }

  .{transition name}-enter-active {
    /* The class that will be added after one time-frame(~16ms) to initiate the transition */
  }
```

#### Demo: customize Slide animation

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

## Configure leaving animation

To configure the leaving animation, you will need to define CSS classes with the following syntax:

```
  .{transition name}-leave {
    /* The class that will be added on initial render of the element */
  }

  .{transition name}-leave-active {
    /* The class that will be added after one time-frame(~16ms) to initiate the transition */
  }
```

#### Demo: customize Slide animation

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

* [Client-Side API Reference for the Kendo UI Fade Component](https://github.com/telerik/kendo-react-animation/blob/master/docs/fade/api.md)
* [Client-Side API Reference for the Kendo UI Slide Component](https://github.com/telerik/kendo-react-animation/blob/master/docs/slide/api.md)
