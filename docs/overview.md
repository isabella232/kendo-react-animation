# Kendo React Animation Overview

The Kendo React Animation component is a thin wrapper over the [ReactCSSTransitionGroup](https://facebook.github.io/react/docs/animation.html)
component. It provides a default animation effects that work both with single/zero or multiple elements animation.

> You need to be familiar with the **ReactCSSTransitionGroup** component in order to use this one.

## Animating single element

As the component uses the `ReactCSSTransitionGroup` under the hood, animating a single element is pretty simple. Our component
will set a `key` attribute to the child automatically to honor the proper content update. More details about this requirement
can be found in the corresponding React documentation:

- [Animating One or Zero Items](https://facebook.github.io/react/docs/animation.html#animating-one-or-zero-items)

The Kendo React Animation component will also size the animation container to the first content element. Thus it will
ensure the proper `enter` and `leave` transitions of the old and new elements.

> Set `single` property to **true** in order to enable single element animation

#### Demo

```html
  <div id="app"></div>
```
```jsx
ReactDOM.render(
  (
    <Animation effect="k-left" single={true}>
        <div>content</div>
    </Animation>
  ),
  document.getElementById('app')
);

//Second rendering will trigger the animation
ReactDOM.render(
  (
    <Animation effect="k-left" single={true}>
        <div>content2</div>
    </Animation>
  ),
  document.getElementById('app')
);
```

## Animating multiple elements

This is the default state of the component. It will animate any entering and/or leaving elements based on the defined `effect` prop.

#### Demo

```html
  <div id="app"></div>
```
```jsx
ReactDOM.render(
  (
    <Animation effect="k-zoom-in">
        <div>content</div>
    </Animation>
  ),
  document.getElementById('app')
);

//Second rendering will trigger the animation
ReactDOM.render(
  (
    <Animation effect="k-zoom-in">
        <div>content</div>
        <div>content2</div>
    </Animation>
  ),
  document.getElementById('app')
);
```

## Animating initial mount

By default animation component will animate only subsequent DOM update. If you would like to animate initial mount of the
content then you will need to enable it using `animateAppear` prop.

#### Demo

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
    <Animation animateAppear={true} effect="zoom">
        <div>content</div>
    </Animation>
  ),
  document.getElementById('app')
);
```

## Built-in effects

The available effects can be found here:

- [Effects](https://github.com/telerik/kendo-theme-default/blob/master/styles/animation/_effect.scss)

Basically, you will need to define the `effect` option of the component to define the animation effect:

### Using the built-in effects from 'kendo-theme-default' repo

1. Import styles from `@telerik/kendo-theme-default/styles/animation/main`

```jsx
import styles from '@telerik/kendo-theme-default/styles/animation/main';
```

2. Use them directly in the `Animation` configuration

```jsx
<Animation effect={styles.left}>
    <div className="child-div">{index}</div>
</Animation>
```
