# vue-layout-primitives.grid

> A grid component that uses CSS grid to create cells of min-width or a set number of columns.

## Installation

### Directly in the browser

Drop the component in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-layout-primitives.grid"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the component with NPM:

```bash
npm install vue-layout-primitives.grid
```

Then import the component:

```js
import Grid from 'vue-layout-primitives.grid'
```

And either globally register it for use in all components:

```js
Vue.component(Grid, 'vue-layout-primitives.grid')
```

or locally register it for use in an individual component:

```js
export default {
components: { Grid }
}
```

## Usage

```html
<!-- No props or content are necessary. -->
  <Grid>
		...
	</Grid>
```
