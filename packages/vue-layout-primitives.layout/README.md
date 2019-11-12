# vue-layout-primitives.layout

> The base Application component

## Installation

### Directly in the browser

Drop the component in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-layout-primitives.layout"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the component with NPM:

```bash
npm install vue-layout-primitives.layout
```

Then import the component:

```js
import Layout from 'vue-layout-primitives.layout'
```

And either globally register it for use in all components:

```js
Vue.component(Layout, 'vue-layout-primitives.layout')
```

or locally register it for use in an individual component:

```js
export default {
components: { Layout }
}
```

## Usage

```html
<!-- No props or content are necessary. -->
  <Application id="app">
		Your application content goes here.
	</Application>
```
