---
title: API
page_title: API | Kendo UI Slide for React
description: "Configure the Kendo UI Slide for React through its API reference."
slug: api_slide_kendouiforreact
position: 2
---

# Slide API

Represents the Kendo UI Slide Animation component for React.

## Define Direction

#### direction `String`*(default: "down")*

Specifies the direction of the `slide` animation.

> The `direction` property is ignored if a custom `transitionName` configuration is defined. In such cases, change the animation direction with the custom CSS classed that are used.

The supported directions are:

- (Default) The `down` direction&mdash;Slides the content from top to bottom on show, and vice-versa.
- The `up` direction&mdash;Slides the content from bottom to top on show, and vice-versa.
- The `left` direction&mdash;Slides the content from right to left on show, and vice-versa.
- The `right` direction&mdash;Slides the content from left to right on show, and vice-versa.

#### slideOutDuration `Number`*(default: 500)*

Specifies the duration of the `slide out` animation. After the time runs out, the animation will be terminated.

> The `duration` value should be synchronized with the duration of the CSS transition animation.

## Set Duration

#### slideInDuration `Number`*(default: 500)*

Specifies the duration of the `slide in` animation. After the time runs out, the animation will be terminated.

> The `duration` value should be synchronized with the duration of the CSS transition animation.

#### slideOutDuration `Number`*(default: 500)*

Specifies the duration of the `slide out` animation. After the time runs out, the animation will be terminated.

> The `duration` value should be synchronized with the duration of the CSS transition animation.

## Apply Effects

#### transitionName `String|Object`*(default: "k-slide")*

Specifies the CSS classes used to animate the elements.

> The `duration` value should be synchronized with the duration of the CSS transition animation.

#### transitionName.slideIn `String`

Specifies the CSS class that is added to the entering element on initial render.

#### transitionName.slideInActive `String`

Specifies the CSS class that is added to the entering element after the `slideIn` class to start the animation.

> The `slideInActive` CSS class should perform the CSS transition effect.

#### transitionName.slideOut `String`

Specifies the CSS class that is added to the leaving element on initial render.

#### transitionName.slideOutActive `String`

Specifies the CSS class that is added to the leaving element after the `slideOut` class to start the animation.

> The `slideOutActive` CSS class should perform the CSS transition effect.

## Disable Animation

#### animateOnSlideIn `Boolean`*(default: true)*

Specifies whether to animate the entering (showing) element.

#### animateOnSlideOut `Boolean`*(default: false)*

Specifies whether to animate the leaving (showing) element.

## Wire Life-Cycle Hooks

### componentWillSlideIn

Called when a component is added to an existing Slide component and the animation has not started yet.

### componentDidSlideIn

Called when a component is added to an existing Slide component and the animation is now finished.

## Style the Appearance

#### className `String`

Specifies CSS class names, set to the Animation component.

#### componentChildClassName `String`

Specifies CSS class names, set to each of the animated children components.
