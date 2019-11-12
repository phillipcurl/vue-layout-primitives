
# vue-layout-primitives

> A collection of layout primitives for building Vue apps.

## Installation

### Directly in the browser

Drop the library in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use components here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-layout-primitives"></script>
<script>
new Vue({ el: '#app' })
</script>
```

Or, if you only want to use a small subset of components, drop them in individually:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-layout-primitives/HelloA"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the library with NPM:

```bash
npm install vue-layout-primitives
```

Then either import the library and either globally register all components with:

```js
import VueLayoutPrimitives from 'vue-layout-primitives'

Vue.use(VueLayoutPrimitives)
```

or import and locally register a single component with:

```js
import { HelloA } from 'vue-layout-primitives'

export default {
components: { VueLayoutPrimitives }
}
```

#### Individually packaged components

If you only want to use a small subset of components, import only individually packaged components to reduce the size of your application:

```js
import HelloA from 'vue-layout-primitives/HelloA'
import HelloB from 'vue-layout-primitives/HelloB'
```
