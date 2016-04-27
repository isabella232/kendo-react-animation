<a name="0.2.0"></a>
# 0.2.0 (2016-04-27)


### Features

* **animation-group:** render a specified class name to the animated child([a72f1fd](https://github.com/telerik/kendo-react-animation/commit/a72f1fd))
* **expand-animation:** render a specified class name to the animated content([02a2d3a](https://github.com/telerik/kendo-react-animation/commit/02a2d3a))
* **fade-animation:** render a specified class name to the animated content([db20ff4](https://github.com/telerik/kendo-react-animation/commit/db20ff4))
* **slide-animation:** render a specified class name to the animated content([ff9066c](https://github.com/telerik/kendo-react-animation/commit/ff9066c))



<a name="0.2.0"></a>
# 0.2.0 (2016-04-27)


### Bug Fixes

* **animation-group:** do not call life-cycle hooks when animation is terminated explicitly([c92222f](https://github.com/telerik/kendo-react-animation/commit/c92222f))
* **slide-animation:** stop calling component leave hooks as they are unstable([eba4c15](https://github.com/telerik/kendo-react-animation/commit/eba4c15))


### Features

* **animation-group:** add life-cycle hooks notifying for the appearing/entering/leaving components([e8f42e6](https://github.com/telerik/kendo-react-animation/commit/e8f42e6))
* **expand-animation:** add life-cycle hooks for the entering component([96bfda3](https://github.com/telerik/kendo-react-animation/commit/96bfda3))
* **fade-animation:** add life-cycle hooks for the entering component([28a1143](https://github.com/telerik/kendo-react-animation/commit/28a1143))
* **slide-animation:** life-cycle hooks called when component slides in/out([be1ee1b](https://github.com/telerik/kendo-react-animation/commit/be1ee1b))



<a name="0.1.0"></a>
# 0.1.0 (2016-04-26)


### Bug Fixes

* attempt to fix the dependency resolution of kendo-react-animation([2e3b5c8](https://github.com/telerik/kendo-react-animation/commit/2e3b5c8))
* move react-addons to the peerDependency list([94cfcc3](https://github.com/telerik/kendo-react-animation/commit/94cfcc3))
* remove old Animation component that utilized ReactCSSTransitionGroup component([acc6fb6](https://github.com/telerik/kendo-react-animation/commit/acc6fb6))
* remove unnecessary file from NPM package([8ec4112](https://github.com/telerik/kendo-react-animation/commit/8ec4112))
* scripts with cjs are built before publishing([1341978](https://github.com/telerik/kendo-react-animation/commit/1341978))
* **PackageConfig:** use kendo-theme-default package as regular dependency([520e2f0](https://github.com/telerik/kendo-react-animation/commit/520e2f0))
* The CDN example works now([560ab6d](https://github.com/telerik/kendo-react-animation/commit/560ab6d))
* **animation:** update package.json to include latest kendo theme([0e86c7f](https://github.com/telerik/kendo-react-animation/commit/0e86c7f))
* **animation:** update package.json to include latest kendo theme([dbbd749](https://github.com/telerik/kendo-react-animation/commit/dbbd749))
* **Animation:** Set dimensions of animation container when fixedContainer is enabled([6d5600f](https://github.com/telerik/kendo-react-animation/commit/6d5600f))
* **Animation:** Size the container using wrapper clientHeight([8bf36f3](https://github.com/telerik/kendo-react-animation/commit/8bf36f3))
* **Examples:** Import Animation component correctly([fa0fc04](https://github.com/telerik/kendo-react-animation/commit/fa0fc04))
* **fade-animation:** include correct fade script in its example([17582bd](https://github.com/telerik/kendo-react-animation/commit/17582bd))
* **fade-in:** fix documentation demos([5d97f96](https://github.com/telerik/kendo-react-animation/commit/5d97f96))
* **fade-in-animation:** map transitionName classes to 'enter' transition type([3748cc5](https://github.com/telerik/kendo-react-animation/commit/3748cc5))
* use react and react-dom as peer dependency. move kendo theme to devDependency([cc5a763](https://github.com/telerik/kendo-react-animation/commit/cc5a763))


### Features

* **Animation:** Add a basic animation demo([b75aceb](https://github.com/telerik/kendo-react-animation/commit/b75aceb))
* **Animation:** Add basic wrapper component for ReactCssTransitionGroup addon([230a726](https://github.com/telerik/kendo-react-animation/commit/230a726))
* **Animation:** Add initial animation on first mount([c8446f4](https://github.com/telerik/kendo-react-animation/commit/c8446f4))
* **Animation:** Add slide animation demo([3bde18e](https://github.com/telerik/kendo-react-animation/commit/3bde18e))
* **Animation:** Animate multiple elements with different animation effects([d0744a7](https://github.com/telerik/kendo-react-animation/commit/d0744a7))
* **Animation:** Demo showing how to animate initially([5209d46](https://github.com/telerik/kendo-react-animation/commit/5209d46))
* **Animation:** Render children with custom keys. Set dimensions of the container([7dbf0b2](https://github.com/telerik/kendo-react-animation/commit/7dbf0b2))
* **Animation:** Reset animation container dimensions on transition end([29970d4](https://github.com/telerik/kendo-react-animation/commit/29970d4))
* **Animation:** Size animation container if single animation is enabled([7b514f7](https://github.com/telerik/kendo-react-animation/commit/7b514f7))
* **expand-animation:** add support for disabling expand/collapse animation([0d7f3b4](https://github.com/telerik/kendo-react-animation/commit/0d7f3b4))
* **expand-animation:** update expand example to render content with specific CSS class([381f363](https://github.com/telerik/kendo-react-animation/commit/381f363))
* **ExpandAnimation:** add expand/collapse custom animation component([2bad22c](https://github.com/telerik/kendo-react-animation/commit/2bad22c))
* **fade-animation:** add fade animation with fade-in and fade-out effect([0643452](https://github.com/telerik/kendo-react-animation/commit/0643452))
* **fade-animation:** disable fade out animation by default([0ad8bf8](https://github.com/telerik/kendo-react-animation/commit/0ad8bf8))
* **SingleAnimation:** Show 'toggle' effect animating single element([7054811](https://github.com/telerik/kendo-react-animation/commit/7054811))
* **slide-animation:** add Slide component([b9ec05a](https://github.com/telerik/kendo-react-animation/commit/b9ec05a))
* **slide-animation:** add slide in/out duration. add a way to prevent slide in/out animation([f712170](https://github.com/telerik/kendo-react-animation/commit/f712170))
* **styling:** Add reference to the theme base([45e54f9](https://github.com/telerik/kendo-react-animation/commit/45e54f9))
* Add a SlideAnimation component([25f80ed](https://github.com/telerik/kendo-react-animation/commit/25f80ed))
* add reference to request-animation-frame (raf) package([b61fc9f](https://github.com/telerik/kendo-react-animation/commit/b61fc9f))
* Add ToggleAnimation component([71dd15f](https://github.com/telerik/kendo-react-animation/commit/71dd15f))
* Allow defining custom transition names for appear, enter and leave animation([c4ec40d](https://github.com/telerik/kendo-react-animation/commit/c4ec40d))
* e2e test example([6c95609](https://github.com/telerik/kendo-react-animation/commit/6c95609))
* implement toggle animation using the generic AnimationGroup component([5a6d547](https://github.com/telerik/kendo-react-animation/commit/5a6d547))
* include UMD scripts in NPM package([2689dd4](https://github.com/telerik/kendo-react-animation/commit/2689dd4))
* introduce generation animation component([4d261c9](https://github.com/telerik/kendo-react-animation/commit/4d261c9))
* Release Toggle and Expand animation components([f7285f7](https://github.com/telerik/kendo-react-animation/commit/f7285f7))
* render passed className and style properties to the animation wrapper([5f6d67b](https://github.com/telerik/kendo-react-animation/commit/5f6d67b))
* **ToggleAnimation:** add toggle custom animation([c48a5a3](https://github.com/telerik/kendo-react-animation/commit/c48a5a3))



<a name="0.2.0"></a>
## 0.2.0 (2016-04-27)

### Bug Fixes

* **animation-group:** do not call life-cycle hooks when animation is terminated explicitly ([c92222f](https://github.com/telerik/kendo-react-animation/commit/c92222f))
* **slide-animation:** stop calling component leave hooks as they are unstable ([eba4c15](https://github.com/telerik/kendo-react-animation/commit/eba4c15))

### Features

* **animation-group:** add life-cycle hooks notifying for the appearing/entering/leaving components ([e8f42e6](https://github.com/telerik/kendo-react-animation/commit/e8f42e6))
* **expand-animation:** add life-cycle hooks for the entering component ([96bfda3](https://github.com/telerik/kendo-react-animation/commit/96bfda3))
* **fade-animation:** add life-cycle hooks for the entering component ([28a1143](https://github.com/telerik/kendo-react-animation/commit/28a1143))
* **slide-animation:** life-cycle hooks called when component slides in/out ([be1ee1b](https://github.com/telerik/kendo-react-animation/commit/be1ee1b))

<a name="0.1.0"></a>
# 0.1.0 (2016-04-26)


### Features

* Expand animation component ([f7285f7](https://github.com/telerik/kendo-react-animation/commit/f7285f7))
* Slide component ([b9ec05a](https://github.com/telerik/kendo-react-animation/commit/b9ec05a))
* Fade component ([0643452](https://github.com/telerik/kendo-react-animation/commit/0643452))

