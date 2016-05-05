---
title: API
page_title: API | Kendo UI Zoom for React
description: "Configure the Kendo UI Zoom for React through its API reference."
slug: api_zoom_kendouiforreact
position: 2
---

# Zoom API

Represents the Kendo UI Zoom Animation component for React.

## Define Direction

#### direction `String`*(default: "left")*

Specifies the direction of the `zoom` animation.

> The `direction` property is ignored if a custom `transitionName` configuration is defined. In such cases, change the animation direction with the custom CSS classes that are used.

The supported directions are:
- (Default) The `left` direction&mdash;Zoomes the content from right to left.
- The `right` direction&mdash;Zoomes the content from left to right.
- The `up` direction&mdash;Zoomes the content from bottom to top.
- The `down` direction&mdash;Zoomes the content from top to bottom.

## Set Duration

#### zoomInDuration `Number`*(default: 300)*

Specifies the duration of the `zoom in` animation. After the time runs out, the animation will be terminated.

> The `duration` value should be synchronized with the duration of the CSS transition animation.

#### zoomOutDuration `Number`*(default: 300)*

Specifies the duration of the `zoom out` animation. After the time runs out, the animation will be terminated.

> The `duration` value should be synchronized with the duration of the CSS transition animation.

## Apply Effects

#### transitionName `String|Object`*(default: "k-zoom")*

Specifies the CSS classes used to animate the elements.

> The `duration` value should be synchronized with the duration of the CSS transition animation.

#### transitionName.zoomIn `String`

Specifies the CSS class that is added to the entering element on initial render.

#### transitionName.zoomInActive `String`

Specifies the CSS class that is added to the entering element after the `zoomIn` class to start the animation.

> The `zoomInActive` CSS class should perform the CSS transition effect.

#### transitionName.zoomOut `String`

Specifies the CSS class that is added to the leaving element on initial render.

#### transitionName.zoomOutActive `String`

Specifies the CSS class that is added to the leaving element after the `zoomOut` class to start the animation.

> The `zoomOutActive` CSS class should perform the CSS transition effect.

## Disable Animation

#### animateOnZoomIn `Boolean`*(default: true)*

Specifies whether to animate the entering (showing) element.

#### animateOnZoomOut `Boolean`*(default: false)*

Specifies whether to animate the leaving (showing) element.

## Wire Life-cycle hooks

### componentWillZoomIn

Called when a component is added to an existing Zoom component and the animation has not started yet.

### componentDidZoomIn

Called when a component is added to an existing Zoom component and the animation is now finished.

## Class Name Decoration

#### className `String`

Specifies CSS class names, set to the animation component

#### componentChildClassName `String`

Specifies CSS class names, set to each of the animated children components
