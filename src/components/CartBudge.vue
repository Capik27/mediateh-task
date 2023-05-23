<template>
	<div class="budge">
		<span>{{ 9 }}</span>
	</div>
</template>

<script>
export default {
	name: "CartBudge",
	components: {
		//
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
}
</style>
