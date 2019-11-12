import { configure } from '@storybook/vue';

const req = require.context('../src', true, /.stories.(j|t)s$/);
function loadStories() {
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
