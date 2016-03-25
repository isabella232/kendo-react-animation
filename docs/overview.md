---
title: Overview
page_title: Overview | Kendo UI Animation for React
description: "Use the Kendo UI Animation component in a React project."
slug: overview_animation_kendouiforreact
position: 1
---

# Animation Overview

The Kendo UI Animation component for React is a thin wrapper over the [ReactCSSTransitionGroup](https://facebook.github.io/react/docs/animation.html) component. It provides default animation effects that work both with single/zero or multiple elements animation.

> To use the Kendo UI Animation component, make sure you get familiar with the [ReactCSSTransitionGroup](https://facebook.github.io/react/docs/animation.html).

## Demos

### Default Setup

//The example below demonstrates the default setup of a Kendo UI Animation for React. - applicable?

```html-preview

```
```jsx

```

## Configuration

### Single Elements

As the component uses the ReactCSSTransitionGroup component under the hood, animating a single element is simple. The Kendo UI Animation component automatically sets a `key` attribute to the child to honor the proper content update.

For more details on this requirement, refer to the [Animating One or Zero Items](https://facebook.github.io/react/docs/animation.html#animating-one-or-zero-items) article from the React documentation.

The Kendo UI Animation component also sizes the animation container to the first content element. Thus it ensures the proper `enter` and `leave` transitions of the old and new elements.

> To enable the single-element animation, set the `fixedContainer` property to `true`.

```html
  <div id="app"></div>
```
```jsx
ReactDOM.render(
  (
    <Animation transitionName="k-left" fixedContainer>
        <div>content</div>
    </Animation>
  ),
  document.getElementById('app')
);

//The second rendering triggers the animation
ReactDOM.render(
  (
    <Animation transitionName="k-left" fixedContainer>
        <div>content2</div>
    </Animation>
  ),
  document.getElementById('app')
);
```

### Multiple Elements

Animating multiple elements is the default state of the Kendo UI Animation component. It animates each entering and/or leaving elements based on the defined `transitionName` property.

```html
  <div id="app"></div>
```
```jsx
ReactDOM.render(
  (
    <Animation transitionName="k-zoom-in">
        <div>content</div>
    </Animation>
  ),
  document.getElementById('app')
);

//The second rendering triggers the animation
ReactDOM.render(
  (
    <Animation transitionName="k-zoom-in">
        <div>content</div>
        <div>content2</div>
    </Animation>
  ),
  document.getElementById('app')
);
```

### Initial Mounts

By default, the Animation component animates subsequent DOM updates only. To animate the initial mount of the content, enable it using the `transitionAppear` property.

```html
  <div id="app"></div>
  <style>
    .zoom-appear {
        opacity: 0.01;
        transform: scale(0);
    }

    .zoom-appear-active {
        opacity: 1;
        transform: scale(1);
        transition: opacity 800ms, transform 800ms ease-in-out;
    }
  </style>
```
```jsx
ReactDOM.render(
  (
    <Animation transitionAppear={true} transitionName="zoom">
        <div>content</div>
    </Animation>
  ),
  document.getElementById('app')
);
```

### Built-In Effects

The list below describes the available built-in effects.

|Configuration | Effect |
|:---          |:---    |
| `k-left`     |Slide the content to the left.|
| `k-right`    |Slide the content to the right.|
| `k-up`       |Slide the content in up direction.|
| `k-down`     |Slide the content in down direction.|
| `k-toggle`   |Fade out the old content and fade in the new content.|
| `k-zoom-in`  |Fade out the old content and zooms in the new one.|
| `k-zoom-out` |Zoom out the old content and fades in the new one.|

To see the full list of available effects, refer to the [Effects sass file](https://github.com/telerik/kendo-theme-default/blob/master/styles/animation/_effect.scss).

Basically, to define the animation effect, define the `effect` option of the component. 

Below are the steps for you to follow when using the built-in effects from the from 'kendo-theme-default' repository.

**Step 1** Import styles from `@telerik/kendo-theme-default/styles/animation/main`.

```jsx
import styles from '@telerik/kendo-theme-default/styles/animation/main';
```

**Step2** Use the styles directly in the `Animation` configuration.

```jsx
<Animation transitionName={styles.left}>
    <div className="child-div">{index}</div>
</Animation>
```

## Accessibility

//The Animation is WAI ARIA-accessible through the `Tab` key. The `aria-disabled` option defines the accessibility setting when an attribute is disabled. - applicable?

## Suggested Links

* [Client-Side API Reference for the Kendo UI Animation Component](https://github.com/telerik/kendo-react-animation/blob/master/docs/api.md)
