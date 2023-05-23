<template>
	<header>
		<div class="navbar">
			<div class="navbar_wrapper">
				<CartLayout class="navbar_cart" />
			</div>
		</div>
	</header>
</template>

<script>
import CartLayout from "@/components/CartLayout.vue";
export default {
	name: "NavBar",
	components: {
		CartLayout,
	},
};
</script>

<style lang="scss" scoped>
@import "@/utils/colorVars.scss";
.navbar {
	width: 100%;
	height: 83px;
	background-color: $COLOR_white;

	&_wrapper {
		max-width: 1920px;
		margin: auto;
		width: 100%;
		height: 83px;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	// &_cart {
	// 	justify-self: flex-end;
	// }
}
</style>
