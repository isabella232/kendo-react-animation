---
title: API
page_title: API | Kendo UI Expand for React
description: "Configure the Kendo UI Expand for React through its API reference."
slug: api_expand_kendouiforreact
position: 2
---

# Expand API

Represents the Kendo UI Expand Animation component for React.

## Set Duration

#### collapseDuration `Number`*(default: 300)*

Specifies the duration of the collapse (hiding) animation.

#### expandDuration `Number`*(default: 300)*

Specifies the duration of the expand (showing) animation.

## Disable Animation

#### animateOnCollapse `Boolean`*(default: true)*

Specifies whether to animate the leaving (hiding) element.

#### animateOnExpand `Boolean`*(default: true)*

Specifies whether to animate the entering (showing) element.

## Wire Life-Cycle Hooks

### componentWillExpand

Called when a component is added to an existing Expand component and the animation hasn't started yet.

### componentDidExpand

Called when a component is added to an existing Expand component and the animation is finished.
