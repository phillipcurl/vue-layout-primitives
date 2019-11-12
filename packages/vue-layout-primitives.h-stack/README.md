# vue-layout-primitives.h-stack

> A component renders its children in a row and collapses to a vertical stack at a specified width.

## Installation

### Directly in the browser

Drop the component in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-layout-primitives.h-stack"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the component with NPM:

```bash
npm install vue-layout-primitives.h-stack
```

Then import the component:

```js
import HStack from 'vue-layout-primitives.h-stack'
```

And either globally register it for use in all components:

```js
Vue.component(HStack, 'vue-layout-primitives.h-stack')
```

or locally register it for use in an individual component:

```js
export default {
components: { HStack }
}
```

## Usage

```html
<!-- No props or content are necessary. -->
  <HStack>
		...
	</HStack>
```
