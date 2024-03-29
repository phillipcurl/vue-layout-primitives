// THIS FILE IS AUTOMATICALLY GENERATED IN:
//
//   build-utils/update-file-index.js
//
// YOU SHOULD NEVER UPDATE THIS FILE DIRECTLY

import BaseText from './BaseText/BaseText.vue'
import Box from './Box/Box.vue'
import Center from './Center/Center.vue'
import Cover from './Cover/Cover.vue'
import Frame from './Frame/Frame.vue'
import Grid from './Grid/Grid.vue'
import HStack from './HStack/HStack.vue'
import Heading from './Heading/Heading.vue'
import Inline from './Inline/Inline.vue'
import Layout from './Layout/Layout.vue'
import VStack from './VStack/VStack.vue'

// Export components individually
export { BaseText, Box, Center, Cover, Frame, Grid, HStack, Heading, Inline, Layout, VStack }

// What should happen if the user installs the library as a plugin
function install(Vue) {
  Vue.component('BaseText', BaseText)
  Vue.component('Box', Box)
  Vue.component('Center', Center)
  Vue.component('Cover', Cover)
  Vue.component('Frame', Frame)
  Vue.component('Grid', Grid)
  Vue.component('HStack', HStack)
  Vue.component('Heading', Heading)
  Vue.component('Inline', Inline)
  Vue.component('Layout', Layout)
  Vue.component('VStack', VStack)
}

// Export the library as a plugin
export default { install: install }
