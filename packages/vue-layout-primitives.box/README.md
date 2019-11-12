# vue-layout-primitives.box

> The base Box component that can be used in a variety of ways to ensure consistent spacing.

## Installation

### Directly in the browser

Drop the component in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-layout-primitives.box"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the component with NPM:

```bash
npm install vue-layout-primitives.box
```

Then import the component:

```js
import Box from 'vue-layout-primitives.box'
```

And either globally register it for use in all components:

```js
Vue.component(Box, 'vue-layout-primitives.box')
```

or locally register it for use in an individual component:

```js
export default {
components: { Box }
}
```

## Usage

```html
<!-- No props or content are necessary. -->
  <Box pad="1">
		Some context
	</Box>
```
