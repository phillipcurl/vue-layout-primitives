# Vue Layout Primitives

> An example component library built with Vue CLI 3.

## Usage

### Directly in the browser

Drop the library in with a `<script>` tag alongside Vue to globally install all components:

```html
<div id="app">
	<layout>...</layout>
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-layout-primitives"></script>
<script>
	new Vue({ el: '#app' });
</script>
```

Or, if you only want to use a small subset of components, drop them in individually:

```html
<div id="app">
	<layout></layout>
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-layout-primitives/Layout"></script>
<script>
	new Vue({ el: '#app' });
</script>
```

### In a module system

Install the library with NPM:

```bash
npm install vue-layout-primitives
```

Then register the library as a plugin to globally install all components:

```js
import VueLayoutPrimitives from 'vue-layout-primitives';

Vue.use(VueLayoutPrimitives);
```

Or, import components individually for local registration:

```js
import { Layout } from 'vue-layout-primitives';

export default {
	components: { Layout }
};
```

#### Individually packaged components

If you only want to use a small subset of components, only import individually packaged components to reduce the size of your application:

```js
import Layout from 'vue-layout-primitives.Layout';
```
