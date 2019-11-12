# vue-layout-primitives.center

> A centered component with a set max-width.

## Installation

### Directly in the browser

Drop the component in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-layout-primitives.center"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the component with NPM:

```bash
npm install vue-layout-primitives.center
```

Then import the component:

```js
import Center from 'vue-layout-primitives.center'
```

And either globally register it for use in all components:

```js
Vue.component(Center, 'vue-layout-primitives.center')
```

or locally register it for use in an individual component:

```js
export default {
components: { Center }
}
```

## Usage

```html
<!-- No props or content are necessary. -->
  <Center>
		...
	</Center>
```
