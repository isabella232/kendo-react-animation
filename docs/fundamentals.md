---
title: Fundamentals
page_title: Fundamentals | Kendo UI Animation Package for React
description: "Learn how the Kendo UI Animation components work."
slug: fundamentals_animation_kendouiforreact
position: 1
---

# Fundamentals

## How does the animation work?

The Kendo UI Animation components are based on [ReactTransitionGroup](https://facebook.github.io/react/docs/animation.html) and are an easy way to perform CSS transitions and animation
when a React component enters or leaves the DOM. A notable difference that worth to be mentioned is the Expand component, that does not use CSS transition classes. It will animate the content updating the `height` style property.

The Animation component is a simple element that wraps all of the components you are interested in animating. Every child element will be enclosed in a `AnimationChild` component
that implements [special life-cycle hooks](https://facebook.github.io/react/docs/animation.html#low-level-api-reacttransitiongroup) called by `ReactTransitionGroup`. As a result,
every child component will be wrapped in additional wrapping `div` element. Take that into consideration when styling the children components.

> CSS transition classes are set to the 'div' element that wraps the child component.

** Figure 1: Default setup of a Kendo UI Animation component for React **

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

In the above example, the 'CONTENT' element added to the Slide component will get a 'k-slide-enter' CSS class set and 'k-slide-enter-active' class set on the next tick. Conversely, when the content is removed,

### Animating entering component

The Animation component will set a `{name}-enter` CSS class to the entering animation child. In the next tick it will add a `{name}-enter-active` CSS class to start the animation. The naming convention for
the CSS class names is inherited from the `ReactTransitionGroup` component.

For instance, the Slide component will add a 'k-slide-enter' CSS class on enter and in the next tick will add a 'k-slide-enter-active' to activate the transition.

![Slide enter](images/slide-enter.png)

### Animating leaving component

The Animation component will set a `{name}-leave` CSS class to the leaving animation child. In the next tick it will add a `{name}-leave-active` CSS class to start the animation. The naming convention for
the CSS class names is inherited from the `ReactTransitionGroup` component.

For instance, the Slide component will add a 'k-slide-leave' CSS class on leave and in the next tick will add a 'k-slide-leave-active' to activate the transition.

> Note that leaving component will be present in the DOM until the animation finishes.

![Slide enter](images/slide-leave.png)

## Styling the Appearance

Custom CSS classes can be set to the Animation component and/or to its children components

### Decorate Animation Component

To set a custom CSS class to the element that wraps all animated components use the `className` property.

> Component renders a default 'k-animation-container' CSS class that also can be used for styling.

![Custom CSS](images/custom-class.png)

### Decorate Animation Child Component

To set a custom CSS class to the element that wraps the animated child use the `componentChildClassName` property

> Component renders a default 'k-child-animation-container' CSS class that also can be used for styling.

![Custom CSS](images/custom-class.png)

## Differences with ReactCSSTransitionGroup

#### Animations in action

The Animation component stops the active animation before a new one is started. Conversely, the `ReactCSSTransitionGroup` will leave the old animation until it finishes.

## Suggested Links

Articles on the Kendo UI Animation components for React:

* [Get Started with the Fade Component]({% slug overview_fade_kendouiforreact %})
* [API Reference of the Fade Component]({% slug api_fade_kendouiforreact %})
* [Get Started with the Expand Component]({% slug overview_expand_kendouiforreact %})
* [API Reference of the Expand Component]({% slug api_expand_kendouiforreact %})
* [Get Started with the Slide Component]({% slug overview_slide_kendouiforreact %})
* [API Reference of the Slide Component]({% slug api_slide_kendouiforreact %})
