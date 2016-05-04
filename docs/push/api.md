---
title: API
page_title: API | Kendo UI Push for React
description: "Configure the Kendo UI Push for React through its API reference."
slug: api_push_kendouiforreact
position: 2
---

# Push API

Represents the Kendo UI Push Animation component for React.

## Define Direction

#### direction `String`*(default: "left")*

Specifies the direction of the `push` animation.

> The `direction` property is ignored if a custom `transitionName` configuration is defined. In such cases, change the animation direction with the custom CSS classes that are used.

The supported directions are:
- (Default) The `left` direction&mdash;Pushes the content from right to left.
- The `right` direction&mdash;Pushes the content from left to right.
- The `up` direction&mdash;Pushes the content from bottom to top.
- The `down` direction&mdash;Pushes the content from top to bottom.

## Set Duration

#### pushInDuration `Number`*(default: 300)*

Specifies the duration of the `push in` animation. After the time runs out, the animation will be terminated.

> The `duration` value should be synchronized with the duration of the CSS transition animation.

#### pushOutDuration `Number`*(default: 300)*

Specifies the duration of the `push out` animation. After the time runs out, the animation will be terminated.

> The `duration` value should be synchronized with the duration of the CSS transition animation.

## Apply Effects

#### transitionName `String|Object`*(default: "k-push")*

Specifies the CSS classes used to animate the elements.

> The `duration` value should be synchronized with the duration of the CSS transition animation.

#### transitionName.pushIn `String`

Specifies the CSS class that is added to the entering element on initial render.

#### transitionName.pushInActive `String`

Specifies the CSS class that is added to the entering element after the `pushIn` class to start the animation.

> The `pushInActive` CSS class should perform the CSS transition effect.

#### transitionName.pushOut `String`

Specifies the CSS class that is added to the leaving element on initial render.

#### transitionName.pushOutActive `String`

Specifies the CSS class that is added to the leaving element after the `pushOut` class to start the animation.

> The `pushOutActive` CSS class should perform the CSS transition effect.

## Disable Animation

#### animateOnPushIn `Boolean`*(default: true)*

Specifies whether to animate the entering (showing) element.

#### animateOnPushOut `Boolean`*(default: false)*

Specifies whether to animate the leaving (showing) element.

## Wire Life-cycle hooks

### componentWillPushIn

Called when a component is added to an existing Push component and the animation hasn't started yet.

### componentDidPushIn

Called when a component is added to an existing Push component and the animation is finished.

## Class Name Decoration

#### className `String`

Specifies CSS class name(s), set to the animation component

#### componentChildClassName `String`

Specifies CSS class name(s), set to each of the animated children components
