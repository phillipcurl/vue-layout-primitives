<template>
	<select
:id="id"
:name="id"
:value="value"
@input="$emit('input', $event.target.value)"
>
		<option value="0">
0
</option>
		<option value="1">
1
</option>
		<option value="2">
2
</option>
		<option value="3">
3
</option>
		<option value="4">
4
</option>
		<option value="5">
5
</option>
		<option value="6">
6
</option>
		<option value="7">
7
</option>
		<option value="8">
8
</option>
		<option value="9">
9
</option>
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
