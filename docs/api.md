---
title: API
page_title: API | Kendo UI Animation for React
description: "Configure and customize the Kendo UI Animation for React through its API reference."
slug: api_animation_kendouiforreact
position: 2
---

# Animation API

Represents the Kendo UI Animation component for React.

### className `String`

Defines the class names you want to append to the animation container. By default, the `k-animation-container` class is added to the wrapper.

### component `String`

Defines the HTML tag type of the rendered wrapper. By default, the component renders the `div` element.

### fixedContainer `Boolean`*(default: "false")*

Defines whether the animation content a zero or single element.

### transitionAppear `Boolean`*(default: "true")*

Enables initial animation of the mounted children.

#### transitionAppearTimeout `Number`

Defines the duration of the appearing animation.

### transitionEnter `String`

Enables animation of the entering children.

### transitionEnterTimeout `String`

Defines the duration of the enter animation.

### transitionLeave `String`

Enables animation of the leaving children.

### transitionLeaveTimeout `String`

Defines the duration of the leave animation.

### transitionName `String`

Defines the effect type that is used to animate the component.

#### Built-In Effects

The following list describes the available effects:

    - 'k-left': slide the content to the left
    - 'k-right': slide the content to the right
    - 'k-up': slide the content in up direction
    - 'k-down': slide the content in down direction
    - 'k-toggle': fade out the old content and fade in the new content
    - 'k-zoom-in': fades out the old content and zooms in the new one
    - 'k-zoom-out': zooms out the old content and fades in the new one

To see the full list of available effects, refer to the [Effects sass file](https://github.com/telerik/kendo-theme-default/blob/master/styles/animation/_effect.scss).
