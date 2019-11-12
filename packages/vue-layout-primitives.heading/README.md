# vue-layout-primitives.heading

> A component that says "HelloB" with green text.

## Installation

### Directly in the browser

Drop the component in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-layout-primitives.heading"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the component with NPM:

```bash
npm install vue-layout-primitives.heading
```

Then import the component:

```js
import Heading from 'vue-layout-primitives.heading'
```

And either globally register it for use in all components:

```js
Vue.component(Heading, 'vue-layout-primitives.heading')
```

or locally register it for use in an individual component:

```js
export default {
components: { Heading }
}
```

## Usage

```html
<!-- No props or content are necessary. -->
<hello-b></hello-b>
```
