# vue-layout-primitives.base-text

> The base text component

## Installation

### Directly in the browser

Drop the component in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-layout-primitives.base-text"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the component with NPM:

```bash
npm install vue-layout-primitives.base-text
```

Then import the component:

```js
import BaseText from 'vue-layout-primitives.base-text'
```

And either globally register it for use in all components:

```js
Vue.component(BaseText, 'vue-layout-primitives.base-text')
```

or locally register it for use in an individual component:

```js
export default {
components: { BaseText }
}
```

## Usage

```html
<!-- No props or content are necessary. -->
  <BaseText>
		Some text
	</BaseText>
```
