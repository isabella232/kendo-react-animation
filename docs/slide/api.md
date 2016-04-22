---
title: API
page_title: API | Kendo UI Slide for React
description: "Configure the Kendo UI Slide for React through its API reference."
slug: api_slide_kendouiforreact
position: 2
---

# Slide API

Represents the Kendo UI Slide component for React.

## Animation direction

### direction `String`*(default: "down")*

Specifies the direction of the `slide` animation.

> Note that `direction` property will be ignored if custom `transitionName` is defined. In that case, you will change direction with the used custom CSS classed.

The supported directions are:

- `down` (default) - slide the content from **top** to **bottom** on show and vice-versa.
- `up` - slide the content from **bottom** to **top** on show and vice-versa.

### slideOutDuration `Number`*(default: 500)*

Specifies the duration of the `slide out` animation. Note that after the time runs out, the animation will be terminated.

> The `duration` value should be synchronized with the duration of the CSS transition animation

## Animation duration

### slideInDuration `Number`*(default: 500)*

Specifies the duration of the `slide in` animation. Note that after the time runs out, the animation will be terminated.

> The `duration` value should be synchronized with the duration of the CSS transition animation

### slideOutDuration `Number`*(default: 500)*

Specifies the duration of the `slide out` animation. Note that after the time runs out, the animation will be terminated.

> The `duration` value should be synchronized with the duration of the CSS transition animation

## Animation effect

### transitionName `String|Object`*(default: "k-slide")*

Specifies the CSS classes used to animate the elements.

> The `duration` value should be synchronized with the duration of the CSS transition animation

### transitionName.slideIn `String`

Specifies the CSS class that will be added to the entering element on initial render

### transitionName.slideInActive `String`

Specifies the CSS class that will be added to the entering element, after `slideIn` class, to start the animation

> Note that `slideInActive` CSS class should perform the CSS transition effect

### transitionName.slideOut `String`

Specifies the CSS class that will be added to the leaving element on initial render

### transitionName.slideOutActive `String`

Specifies the CSS class that will be added to the leaving element, after `slideOut` class, to start the animation

> Note that `slideOutActive` CSS class should perform the CSS transition effect

## Disable animation

### animateOnSlideIn `Boolean`*(default: true)*

Specifies whether to animate the entering (showing) element.

### animateOnSlideOut `Boolean`*(default: false)*

Specifies whether to animate the leaving (showing) element.
