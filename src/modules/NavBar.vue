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

@media (max-width: 1440px) {
	.navbar_wrapper {
		max-width: 1054px;
	}
}
@media (max-width: 1200px) {
	.navbar_wrapper {
		max-width: 844px;
	}
}
@media (max-width: 960px) {
	.navbar_wrapper {
		max-width: 634px;
	}
}
@media (max-width: 720px) {
	.navbar_wrapper {
		max-width: 424px;
	}
}
@media (max-width: 480px) {
	.navbar_wrapper {
		max-width: 210px;
		justify-content: center;
	}
}
</style>
