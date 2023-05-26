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

<style lang="scss">
@import "@/utils/colorVars.scss";
@import "@/utils/fontInter.scss";
.navbar {
	width: 100%;
	height: 83px;
	background-color: $COLOR_white;

	&_wrapper {
		max-width: 1264px;
		margin: auto;
		width: 100%;
		height: 83px;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
}

@media (max-width: 1320px) {
	.navbar_wrapper {
		padding: 0 20px;
	}
}
@media (max-width: 440px) {
	.navbar_wrapper {
		padding: 0 20px;
		justify-content: center;
	}
}
</style>
