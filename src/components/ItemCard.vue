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
					v-for="(_, index) in new Array(Math.round(this.item.rating))"
					:key="index"
				/>
			</div>
			<span class="card_stars-number">{{ Math.round(item.rating) }}</span>
		</div>
		<div class="card_title">{{ item.title }}</div>
		<div class="card_price-info">
			<div class="card_discount" v-if="item.discountPercentage > 0">
				<div class="card_discount-price">
					<span>{{ Math.round(item.price) }} $</span>
					<div class="card_discount-line"></div>
				</div>
				<RedBudge
					:value="`-${Math.round(item.discountPercentage)}%`"
					type="cube"
				/>
			</div>
			<div class="card_price">
				<!-- eslint-disable no-mixed-spaces-and-tabs  -->
				{{
					item.discountPercentage
						? Math.round(
								item.price - (item.discountPercentage * item.price) / 100
						  )
						: Math.round(item.price)
				}}
				<!-- eslint-disable no-mixed-spaces-and-tabs  -->
				$
			</div>
		</div>
		<BButton value="В корзину" class="card_buybutton" @click="addItem" />
	</div>
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from "vuex";
import BButton from "@/components/BButton.vue";
import RedBudge from "@/components/RedBudge.vue";
export default defineComponent({
	name: "ItemCard",
	components: {
		BButton,
		RedBudge,
	},
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
	setup(props) {
		const store = useStore();

		const addItem = () => {
			store.commit("addItem", props.item);
		};

		return { addItem };
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

	width: 210px;

	border: 1px solid transparent;

	transition: all 0.33s;
	animation: 0.77s fade linear;
	&:hover {
		border-color: $COLOR_greyligth;
	}

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

		img {
			width: 16px;
			height: 16px;
		}

		&-number {
			color: $COLOR_greyligth;
			font-weight: 400;
		}
	}

	&_title {
		height: 40px;
		font-family: "Open Sans", sans-serif;
		font-size: 15px;
		font-weight: 600;
		line-height: 20px;
		letter-spacing: 0px;
	}

	&_info {
		display: flex;
	}

	&_price {
		font-size: 26px;
		font-weight: 500;
		line-height: 32px;
		letter-spacing: 0.1rem;
	}

	&_discount {
		display: flex;
		gap: 12px;

		&-price {
			display: flex;
			align-items: center;
			position: relative;

			span {
				color: $COLOR_greyligth;
				line-height: 20px;
			}
		}
		&-line {
			position: absolute;
			justify-self: center;
			width: 105%;
			top: 50%;
			left: -1px;
			border-top: 1px solid $COLOR_red;
		}
	}

	&_rating {
		display: flex;
		align-items: center;
		height: 20px;
		gap: 8px;
	}

	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
}
</style>
