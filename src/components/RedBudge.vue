<template>
	<div :class="type === 'cube' ? 'budge_cube' : 'budge'">
		<span>{{ value !== "undefined" ? value : "" }}</span>
	</div>
</template>

<script>
export default {
	name: "RedBudge",
	props: {
		value: {
			required: false,
		},
		type: {
			type: String,
			required: false,
		},
	},
};
</script>

<style lang="scss" scoped>
@import "@/utils/colorVars.scss";
.budge {
	height: 24px;
	width: 24px;
	border-radius: 50%;
	line-height: 24px;
	font-size: 11px;
	background-color: $COLOR_red;
	color: $COLOR_white;

	&_cube {
		background-color: $COLOR_red;
		color: $COLOR_white;
		font-weight: 700;
		border-radius: 4px;
		padding: 4px 6px 4px 6px;
	}
}
</style>
