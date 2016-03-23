---
title: Client-Side API
page_title: Client-Side API | Kendo UI Animation for React
description: "Configure and customize the Kendo UI Animation for React through its client-side API reference."
slug: api_animation_kendouiforreact
position: 2
---

# Animation Client-Side API

Represents the Kendo UI Animation component for React.

### Single Elements

#### single `String`

Defines whether the animation content a zero or single element.

### Multiple Elements

#### enterDuration `String`

Defines the duration of the enter animation.

#### leaveDuration `String`

Defines the duration of the leave animation.

### Initial Mounts

#### animateAppear `Boolean`*(default: "true")*

Enables initial animation of the mounted children.

#### appearDuration `Number`

Defines the duration of the appearing animation.

#### component `String`

Defines the HTML tag type of the rendered wrapper. By default, the component renders the `div` element.

### Built-In Effects

#### className `String`

Defines the class names you want to append to the animation container. By default, the `k-animation-container` class is added to the wrapper.

#### effect `String`

Defines the effect type that is used to animate the component.
