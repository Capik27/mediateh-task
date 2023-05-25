<template>
	<button class="bbtn">{{ value }}</button>
</template>

<script>
export default {
	name: "BButton",
	props: {
		value: {
			type: String,
			required: false,
		},
	},
};
</script>

<style lang="scss" scoped>
@import "@/utils/colorVars.scss";

.bbtn {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px 16px;
	gap: 12px;

	font-family: "Open Sans", sans-serif;
	font-style: normal;
	font-weight: 700;
	font-size: 15px;
	line-height: 20px;

	color: $COLOR_red;

	border: 2px solid rgba(244, 67, 54, 0.3);
	background-color: transparent;
	border-radius: 6px;

	transition: all 0.33s;
	&:hover {
		cursor: pointer;
		background-color: rgba(244, 67, 54, 0.171);
	}
}
</style>
