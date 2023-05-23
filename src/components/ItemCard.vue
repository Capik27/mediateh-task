<template>
	<div class="card" v-if="item">
		<div class="card_preview">
			<img :src="item.thumbnail" :alt="item.title" />
		</div>
		<div class="card_rating">
			<div class="card_stars">
				<img
					src="@/assets/star.png"
					alt="star"
					v-for="(_, index) in new Array(decRound(this.item.rating))"
					:key="index"
				/>
			</div>
			<span class="card_stars-number">{{ decRound(item.rating) }}</span>
		</div>
		<div class="card_title">{{ item.title }}</div>
		<div class="card_price-info">
			<div class="card_discount" v-if="item.discountPercentage > 0">
				{{ decRound(item.price) }} -{{ decRound(item.discountPercentage) }}%
			</div>
			<div class="card_price">
				{{
					decRound(
						item.price - ((item.discountPercentage || 1) * item.price) / 100
					)
				}}
				$
			</div>
		</div>
		<BButton class="card_buybutton" />
	</div>
</template>

<script>
import { defineComponent } from "vue";
import decimalRound from "@/utils/decimalRound.js";
import BButton from "@/components/BButton.vue";
export default defineComponent({
	name: "ItemCard",
	components: {
		BButton,
	},
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
	setup() {
		const decRound = decimalRound;

		return { decRound };
	},
});
</script>

<style lang="scss" scoped>
@import "@/utils/colorVars.scss";
.card {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	gap: 16px;
	color: $COLOR_grey;
	background-color: $COLOR_white;
	padding: 15px 15px 24px 15px;
	word-break: break-word;

	min-width: 210px;
	max-width: 210px;

	border: 1px solid red;

	&_preview {
		width: 145px;
		height: 145px;
		overflow: hidden;
		img {
			object-fit: cover;
			width: 100%;
			height: 100%;
		}
	}

	&_stars {
		display: flex;
		align-items: center;
		justify-content: center;

		&-number {
			color: $COLOR_greyligth;
		}
	}

	&_rating {
		display: flex;
		align-items: center;
		gap: 8px;
	}
}
</style>
