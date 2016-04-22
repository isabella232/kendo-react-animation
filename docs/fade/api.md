---
title: API
page_title: API | Kendo UI Fade for React
description: "Configure the Kendo UI Fade for React through its API reference."
slug: api_fade_kendouiforreact
position: 2
---

# Fade API

Represents the Kendo UI Fade component for React.

## Animation duration

### fadeInDuration `Number`*(default: 500)*

Specifies the duration of the `fade in` animation. Note that after the time runs out, the animation will be terminated.

> The `duration` value should be synchronized with the duration of the CSS transition animation

### fadeOutDuration `Number`*(default: 500)*

Specifies the duration of the `fade out` animation. Note that after the time runs out, the animation will be terminated.

> The `duration` value should be synchronized with the duration of the CSS transition animation

## Animation effect

### transitionName `String|Object`*(default: "k-fade")*

Specifies the CSS classes used to animate the elements.

> The `duration` value should be synchronized with the duration of the CSS transition animation

### transitionName.fadeIn `String`

Specifies the CSS class that will be added to the entering element on initial render

### transitionName.fadeInActive `String`

Specifies the CSS class that will be added to the entering element, after `fadeIn` class, to start the animation

> Note that `fadeInActive` CSS class should perform the CSS transition effect

### transitionName.fadeOut `String`

Specifies the CSS class that will be added to the leaving element on initial render

### transitionName.fadeOutActive `String`

Specifies the CSS class that will be added to the leaving element, after `fadeOut` class, to start the animation

> Note that `fadeOutActive` CSS class should perform the CSS transition effect

## Disable animation

### animateOnFadeIn `Boolean`*(default: true)*

Specifies whether to animate the entering (showing) element.

### animateOnFadeOut `Boolean`*(default: false)*

Specifies whether to animate the leaving (showing) element.
