import Vue from 'vue';

import App from './App';

if (process.env.VUE_APP_E2E) {
	if (window.__e2e_lib) {
		Vue.use(require('vue-layout-primitives').default);
	} else if (window.__e2e_components) {
		Vue.component('Layout', require('vue-layout-primitives.layout').default);
		Vue.component('Box', require('vue-layout-primitives.box').default);
		Vue.component('HStack', require('vue-layout-primitives.h-stack').default);
		Vue.component('VStack', require('vue-layout-primitives.v-stack').default);
		Vue.component('Grid', require('vue-layout-primitives.grid').default);
		Vue.component('Heading', require('vue-layout-primitives.heading').default);
	}
} else {
	// Install the plugin directly from src in development
	Vue.use(require('../src').default);
}

Vue.config.productionTip = false;

new Vue({
	render: h => h(App)
}).$mount('#app');
