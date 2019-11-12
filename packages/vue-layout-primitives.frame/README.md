# vue-layout-primitives.frame

> A component renders its content in a fixed aspect ratio container.

## Installation

### Directly in the browser

Drop the component in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-layout-primitives.frame"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the component with NPM:

```bash
npm install vue-layout-primitives.frame
```

Then import the component:

```js
import Frame from 'vue-layout-primitives.frame'
```

And either globally register it for use in all components:

```js
Vue.component(Frame, 'vue-layout-primitives.frame')
```

or locally register it for use in an individual component:

```js
export default {
components: { Frame }
}
```

## Usage

```html
<!-- No props or content are necessary. -->
  <Frame>
		...
	</Frame>
```
