<template>
	<select
:id="id"
:name="id"
:value="value"
@input="$emit('input', $event.target.value)"
>
		<slot />
	</select>
</template>

<script>
export default {
	props: {
		id: {
			type: String,
			required: true
		},
		value: {
			type: String,
			required: true
		}
	}
};
</script>
