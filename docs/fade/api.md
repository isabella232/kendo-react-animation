---
title: API
page_title: API | Kendo UI FadeIn for React
description: "Configure the Kendo UI FadeIn for React through its API reference."
slug: api_fadein_kendouiforreact
position: 2
---

# FadeIn API

Represents the Kendo UI FadeIn component for React.

## Animation duration

### duration `Number`*(default: 500)*

Specifies the duration of the fade in animation. Note that after the time runs out, the animation will be terminated.

> The `duration` value should be synchronized with the duration of the CSS transition animation

## Animation effect

### transitionName `String|Object`*(default: "k-fade-in")*

Specifies the CSS classes used to animate the element.

> The `duration` value should be synchronized with the duration of the CSS transition animation

### transitionName.fadeIn `String`

Specifies the CSS class that will be added to the animation element on initial render

### transitionName.fadeInActive `String`

Specifies the CSS class that will be added to the animation element after `fadeIn` class to start the animation

> Note that `fadeInActive` CSS class should perform the CSS transition effect
