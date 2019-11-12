# vue-layout-primitives.inline

> A component that aligns its children inline.

## Installation

### Directly in the browser

Drop the component in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-layout-primitives.inline"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the component with NPM:

```bash
npm install vue-layout-primitives.inline
```

Then import the component:

```js
import Inline from 'vue-layout-primitives.inline'
```

And either globally register it for use in all components:

```js
Vue.component(Inline, 'vue-layout-primitives.inline')
```

or locally register it for use in an individual component:

```js
export default {
components: { Inline }
}
```

## Usage

```html
<!-- No props or content are necessary. -->
  <Inline>
		...
	</Inline>
```
