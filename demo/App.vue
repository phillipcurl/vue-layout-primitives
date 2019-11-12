<template>
	<Layout id="app">
		<Cover
			:gap="coverGap"
			:height="coverHeight"
			:class="{'is-focused': focusedElement === 'Cover'}"
			style="background-color: cornflowerblue;"
		>
			<template
v-if="showCoverHeader"
v-slot:header
>
				<Box
pad="4"
style="background-color: whitesmoke;"
>
					<Heading level="3">
Cover Header
</Heading>
				</Box>
			</template>
			<Box
pad="4"
style="background-color: whitesmoke;"
>
				<div
@mouseenter="focusComponent('Cover')"
@mouseleave="clearFocus()"
>
					<VStack gap="4">
						<Heading level="2">
Cover
</Heading>
						<label>
							<input
v-model="showCoverHeader"
type="checkbox"
>
							Show Header
						</label>
						<label>
							<input
v-model="showCoverFooter"
type="checkbox"
>
							Show Footer
						</label>
						<Inline gap="3">
							<label for="cover-height">height</label>
							<input
id="cover-height"
v-model="coverHeight"
type="text"
name="cover-height"
>
						</Inline>
						<Inline gap="3">
							<label for="cover-gap">gap</label>
							<SpacingSelect
id="cover-gap"
v-model="coverGap"
/>
						</Inline>
						<BaseText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel quisquam delectus aliquam nemo harum adipisci similique quos animi neque sequi et, sed explicabo. Quisquam repellat dolor nihil perferendis laboriosam iste!</BaseText>
					</VStack>
				</div>
			</Box>
			<template
v-if="showCoverFooter"
v-slot:footer
>
				<Box
pad="4"
style="background-color: whitesmoke;"
>
					<Heading level="3">
Cover Footer
</Heading>
				</Box>
			</template>
		</Cover>
		<VStack
gap="5"
pad-y="5"
>
			<VStack
				:gap="vstackGap"
				:pad-x="vstackPadX"
				:pad-y="vstackPadY"
				:class="{'is-focused': focusedElement === 'VStack'}"
				style="background-color: blueviolet;"
			>
				<Box
pad="4"
style="background-color: whitesmoke;"
>
					<div
@mouseenter="focusComponent('VStack')"
@mouseleave="clearFocus()"
>
						<HStack gap="4">
							<VStack gap="4">
								<Heading level="2">
VStack
</Heading>
								<Inline gap="3">
									<label for="vstack-gap">gap</label>
									<SpacingSelect
id="vstack-gap"
v-model="vstackGap"
/>
								</Inline>
								<Inline gap="3">
									<label for="vstack-padY">padY</label>
									<SpacingSelect
id="vstack-padY"
v-model="vstackPadY"
/>
								</Inline>
								<Inline gap="3">
									<label for="vstack-padX">padX</label>
									<SpacingSelect
id="vstack-padX"
v-model="vstackPadX"
/>
								</Inline>
							</VStack>
							<BaseText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel quisquam delectus aliquam nemo harum adipisci similique quos animi neque sequi et, sed explicabo. Quisquam repellat dolor nihil perferendis laboriosam iste!</BaseText>
						</HStack>
					</div>
				</Box>
				<DemoBox
v-for="i in 3"
:key="i"
/>
			</VStack>
			<HStack
				:gap="hstackGap"
				:pad-x="hstackPadX"
				:pad-y="hstackPadY"
				:class="{'is-focused': focusedElement === 'HStack'}"
				style="background-color: tomato;"
			>
				<Box
pad="4"
style="background-color: whitesmoke;"
>
					<div
@mouseenter="focusComponent('HStack')"
@mouseleave="clearFocus()"
>
						<VStack gap="4">
							<Heading level="2">
HStack
</Heading>
							<Inline gap="3">
								<label for="hstack-gap">gap</label>
								<SpacingSelect
id="hstack-gap"
v-model="hstackGap"
/>
							</Inline>
							<Inline gap="3">
								<label for="hstack-padY">padY</label>
								<SpacingSelect
id="vstack-padY"
v-model="hstackPadY"
/>
							</Inline>
							<Inline gap="3">
								<label for="hstack-padX">padX</label>
								<SpacingSelect
id="hstack-padX"
v-model="hstackPadX"
/>
							</Inline>
						</VStack>
					</div>
					<!-- <BaseText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel quisquam delectus aliquam nemo harum adipisci similique quos animi neque sequi et, sed explicabo. Quisquam repellat dolor nihil perferendis laboriosam iste!</BaseText> -->
				</Box>
				<DemoBox
v-for="i in 2"
:key="i"
/>
			</HStack>
			<Box
				:pad="boxPad"
				:class="{'is-focused': focusedElement === 'Box'}"
				style="background-color: whitesmoke;"
			>
				<div
@mouseenter="focusComponent('Box')"
@mouseleave="clearFocus()"
>
					<HStack>
						<VStack gap="4">
							<Heading level="2">
Box
</Heading>
							<Inline gap="3">
								<label for="box-pad">pad</label>
								<SpacingSelect
id="box-pad"
v-model="boxPad"
/>
							</Inline>
						</VStack>
						<BaseText>All of the gray boxes on this page are an instance of the Box component. For demonstration purposes, they are all being passed the same pad prop, but this can be set dynamically for each component instance.</BaseText>
					</HStack>
				</div>
			</Box>
			<Grid
				:gap="gridGap"
				:pad-x="gridPadX"
				:pad-y="gridPadY"
				:width="gridWidth"
				:columns="gridCols"
				:class="{'is-focused': focusedElement === 'Grid'}"
				style="background-color: gold;"
			>
				<Box
pad="4"
style="background-color: whitesmoke;"
>
					<div
@mouseenter="focusComponent('Grid')"
@mouseleave="clearFocus()"
>
						<VStack gap="4">
							<Heading level="2">
Grid
</Heading>
							<Inline gap="3">
								<label for="grid-gap">gap</label>
								<SpacingSelect
id="grid-gap"
v-model="gridGap"
/>
							</Inline>
							<Inline gap="3">
								<label for="grid-padY">padY</label>
								<SpacingSelect
id="grid-padY"
v-model="gridPadY"
/>
							</Inline>
							<Inline gap="3">
								<label for="grid-padX">padX</label>
								<SpacingSelect
id="grid-padX"
v-model="gridPadX"
/>
							</Inline>
							<Inline
v-if="!gridUseCols"
gap="3"
>
								<label for="grid-width">width</label>
								<input
id="grid-width"
v-model="gridWidth"
type="text"
name="grid-width"
>
							</Inline>
							<Inline
v-if="gridUseCols"
gap="3"
>
								<label for="grid-cols">columns</label>
								<input
id="grid-cols"
v-model="gridCols"
type="text"
name="grid-cols"
>
							</Inline>
							<Inline gap="3">
								<button @click="toggleGridCols">
{{ gridUseCols ? 'Use Width' : 'Use Columns' }}
</button>
							</Inline>
						</VStack>
					</div>
				</Box>
				<DemoBox
v-for="i in 8"
:key="i"
/>
			</Grid>
			<Center
:class="{'is-focused': focusedElement === 'Center'}"
style="background-color: seagreen;"
>
				<div
@mouseenter="focusComponent('Center')"
@mouseleave="clearFocus()"
>
					<VStack gap="5">
						<Box
pad="4"
style="background-color: whitesmoke;"
>
							<Heading level="2">
Center
</Heading>
							<BaseText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel quisquam delectus aliquam nemo harum adipisci similique quos animi neque sequi et, sed explicabo. Quisquam repellat dolor nihil perferendis laboriosam iste!</BaseText>
						</Box>
						<Box
v-for="i in 3"
:key="i"
pad="4"
style="background-color: whitesmoke;"
>
							<Heading level="3">
Sample Heading
</Heading>
							<BaseText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel quisquam delectus aliquam nemo harum adipisci similique quos animi neque sequi et, sed explicabo. Quisquam repellat dolor nihil perferendis laboriosam iste!</BaseText>
						</Box>
					</VStack>
				</div>
			</Center>
			<Inline
				:gap="inlineGap"
				:align="inlineAlign"
				:class="{'is-focused': focusedElement === 'Inline'}"
				style="background-color: tomato;"
			>
				<Box
pad="4"
style="background-color: whitesmoke;"
>
					<div
@mouseenter="focusComponent('Inline')"
@mouseleave="clearFocus()"
>
						<VStack gap="4">
							<Heading
								level="2"
								@mouseenter="focusedElement = 'Inline'"
								@mouseleave="focusedElement = ''"
							>
Inline
</Heading>
							<Inline gap="3">
								<label for="inline-gap">gap</label>
								<SpacingSelect
id="inline-gap"
v-model="inlineGap"
/>
							</Inline>
							<Inline gap="3">
								<label for="inline-align">Align</label>
								<BasicSelect
id="inline-align"
v-model="inlineAlign"
>
									<option value="baseline">
baseline
</option>
									<option value="center">
center
</option>
									<option value="flex-end">
flex-end
</option>
									<option value="flex-start">
flex-start
</option>
									<option value="initial">
initial
</option>
									<option value="stretch">
stretch
</option>
									<option value="unset">
unset
</option>
								</BasicSelect>
							</Inline>
						</VStack>
					</div>
				</Box>
				<Box
v-for="i in 8"
:key="i"
as="article"
pad="4"
style="background-color: whitesmoke;"
>
					<Heading level="3">
Sample Heading
</Heading>
					<BaseText v-if="(i % 5) === 0">
Lorem ipsum dolor sit, amet consectetur adipisicing elit.
</BaseText>
				</Box>
			</Inline>
			<Center>
				<VStack>
					<Box
pad="4"
style="background-color: whitesmoke;"
>
						<div
@mouseenter="focusComponent('Frame')"
@mouseleave="clearFocus()"
>
							<VStack gap="4">
								<Heading level="2">
Frame
</Heading>
								<Inline gap="3">
									<label for="frame-d">ratio</label>
									<input
id="frame-d"
v-model="frameD"
type="number"
name="frame-d"
>:
									<input
id="frame-n"
v-model="frameN"
type="number"
name="frame-n"
>
								</Inline>
								<BaseText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel quisquam delectus aliquam nemo harum adipisci similique quos animi neque sequi et, sed explicabo. Quisquam repellat dolor nihil perferendis laboriosam iste!</BaseText>
							</VStack>
						</div>
					</Box>
					<Frame
:ratio="frameRatio"
:class="{'outlined': focusedElement === 'Frame'}"
>
						<img
src="https://picsum.photos/1600/900"
alt
srcset
>
					</Frame>
				</VStack>
			</Center>
		</VStack>
	</Layout>
</template>

<script>
import BasicSelect from './BasicSelect.vue';
import SpacingSelect from './SpacingSelect.vue';
import DemoBox from './DemoBox.vue';

export default {
	components: {
		BasicSelect,
		SpacingSelect,
		DemoBox
	},
	data() {
		return {
			focusedElement: '',
			showCoverHeader: false,
			showCoverFooter: false,
			coverHeight: '70vh',
			coverGap: '0',
			vstackGap: '5',
			vstackPadY: '0',
			vstackPadX: '0',
			hstackGap: '5',
			hstackPadY: '0',
			hstackPadX: '0',
			boxPad: '4',
			gridGap: '5',
			gridPadY: '0',
			gridPadX: '0',
			gridWidth: '20rem',
			gridUseCols: false,
			gridCols: null,
			inlineGap: '5',
			inlineAlign: 'center',
			frameN: 9,
			frameD: 16
		};
	},
	computed: {
		frameRatio() {
			return `${this.frameD}:${this.frameN}`;
		}
	},
	methods: {
		toggleGridCols() {
			if (this.gridUseCols) {
				this.gridWidth = '20rem';
				this.gridCols = null;
				this.gridUseCols = false;
			} else {
				this.gridWidth = null;
				this.gridCols = '5';
				this.gridUseCols = true;
			}
		},
		focusComponent(name) {
			this.focusedElement = name;
		},
		clearFocus() {
			this.focusedElement = '';
		}
	}
};
</script>

<style>
html,
body {
	margin: 0;
	font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
		'Helvetica Neue', Ubuntu, Arial, sans-serif;
}

#app {
	width: 100vw;
	overflow-x: hidden;
}

.rounded {
	border-radius: 0.5rem;
}

.is-focused {
	outline: 4px dotted red;
	outline-offset: -4px;
}

.outlined {
	border: 4px dotted red;
}
</style>
