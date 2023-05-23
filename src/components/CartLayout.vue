<template>
	<div class="cart">
		<img src="@/assets/cart.png" class="cart_icon" alt="cart" />

		<span class="cart_sum">7 699 ₽</span>
		<CartBudge />
	</div>
</template>

<script>
import CartBudge from "@/components/CartBudge.vue";
export default {
	name: "CartLayout",
	components: {
		CartBudge,
	},
};
</script>

<style lang="scss" scoped>
@import "@/utils/colorVars.scss";
.cart {
	height: 56px;
	width: 181px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 12px;
	border-radius: 12px;

	border: 1px solid black;

	background-color: $COLOR_BG;

	color: $COLOR_darkblue;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;

	&_icon img {
		width: 24px;
		height: 24px;
	}
	// &_sum{

	// }
}
</style>
