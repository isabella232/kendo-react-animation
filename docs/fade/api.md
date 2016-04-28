---
title: API
page_title: API | Kendo UI Fade for React
description: "Configure the Kendo UI Fade for React through its API reference."
slug: api_fade_kendouiforreact
position: 2
---

# Fade API

Represents the Kendo UI Fade Animation component for React.

## Set Duration

#### fadeInDuration `Number`*(default: 500)*

Specifies the duration of the `fade in` animation. After the time runs out, the animation will be terminated.

> The `duration` value should be synchronized with the duration of the CSS transition animation.

#### fadeOutDuration `Number`*(default: 500)*

Specifies the duration of the `fade out` animation. After the time runs out, the animation will be terminated.

> The `duration` value should be synchronized with the duration of the CSS transition animation.

## Apply Effects

#### transitionName `String|Object`*(default: "k-fade")*

Specifies the CSS classes used to animate the elements.

> The `duration` value should be synchronized with the duration of the CSS transition animation.

#### transitionName.fadeIn `String`

Specifies the CSS class that is added to the entering element on initial render.

#### transitionName.fadeInActive `String`

Specifies the CSS class that are added to the entering element after the `fadeIn` class to start the animation.

> The `fadeInActive` CSS class should perform the CSS transition effect.

#### transitionName.fadeOut `String`

Specifies the CSS class that is added to the leaving element on initial render.

#### transitionName.fadeOutActive `String`

Specifies the CSS class that is added to the leaving element after `fadeOut` class to start the animation.

> The `fadeOutActive` CSS class should perform the CSS transition effect.

## Disable Animation

#### animateOnFadeIn `Boolean`*(default: true)*

Specifies whether to animate the entering (showing) element.

#### animateOnFadeOut `Boolean`*(default: false)*

Specifies whether to animate the leaving (showing) element.

## Class Name Decoration

#### className `String`

Specifies CSS class name(s), set to the animation component

#### componentChildClassName `String`

Specifies CSS class name(s), set to each of the animated children components
