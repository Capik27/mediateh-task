<template>
	<div class="cart" @click="reset">
		<img src="@/assets/cart.png" class="cart__icon" alt="cart" />
		<span class="cart__sum">{{ nws(sumPrice) }} $</span>
		<RedBudge :value="itemCount" />
	</div>
</template>

<script>
import numberWithSpaces from "@/utils/numberWithSpaces.js";
import RedBudge from "@/components/RedBudge.vue";
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
export default defineComponent({
	name: "CartLayout",
	components: {
		RedBudge,
	},
	setup() {
		const store = useStore();

		const nws = numberWithSpaces;
		const reset = () => {
			store.commit("reset");
		};

		const itemCount = computed(() => store.state.cart.items.length);
		const sumPrice = computed(() =>
			store.state.cart.items.reduce((acc, curr) => {
				if (!curr) return acc;
				if (curr.discountPercentage) {
					return (
						acc +
						Math.round(
							curr.price - (curr.discountPercentage * curr.price) / 100
						)
					);
				} else {
					return acc + Math.round(curr.price);
				}
			}, 0)
		);

		return { sumPrice, itemCount, reset, nws };
	},
});
</script>

<style lang="scss" scoped>
@import "@/utils/colorVars.scss";
.cart {
	height: 56px;
	flex-basis: 181px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 12px;
	border-radius: 12px;

	background-color: $COLOR_BG;
	color: $COLOR_darkblue;

	font-weight: 400;
	font-style: normal;
	font-size: 16px;
	line-height: 24px;

	transition: all 0.33s;
	&:hover {
		cursor: pointer;
		background-color: rgba(244, 67, 54, 0.171);
	}

	&__icon img {
		width: 24px;
		height: 24px;
	}

	&__sum {
		min-width: 60px;
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
	}
}
</style>
