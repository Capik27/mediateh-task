<template>
	<div :class="{ budge_cube: type === 'cube', budge: type != 'cube' }">
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
%fbox {
	display: flex;
	align-items: center;
	justify-content: center;
	white-space: nowrap;
}
.budge {
	@extend %fbox;
	height: 24px;
	width: 24px;
	border-radius: 50%;
	font-style: normal;
	font-weight: 500;
	font-size: 11px;
	line-height: 24px;
	vertical-align: baseline;
	background-color: $COLOR_red;
	color: $COLOR_white;

	&_cube {
		@extend %fbox;
		background-color: $COLOR_red;
		color: $COLOR_white;
		border-radius: 4px;
		padding: 0 6px 0 6px;

		span {
			font-size: 11px;
			line-height: 20px;
			font-weight: 700;
			font-style: normal;
			text-transform: uppercase;
		}
	}
}
</style>
