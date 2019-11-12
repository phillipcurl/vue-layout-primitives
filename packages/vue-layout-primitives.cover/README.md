# vue-layout-primitives.cover

> A component that says "HelloB" with green text.

## Installation

### Directly in the browser

Drop the component in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-layout-primitives.cover"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the component with NPM:

```bash
npm install vue-layout-primitives.cover
```

Then import the component:

```js
import Cover from 'vue-layout-primitives.cover'
```

And either globally register it for use in all components:

```js
Vue.component(Cover, 'vue-layout-primitives.cover')
```

or locally register it for use in an individual component:

```js
export default {
components: { Cover }
}
```

## Usage

```html
<!-- No props or content are necessary. -->
<hello-b></hello-b>
```
