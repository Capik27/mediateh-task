<template>
	<div class="card" v-if="item">
		<div class="card__preview">
			<img :src="item.thumbnail" :alt="item.title" />
		</div>
		<div class="card__rating">
			<div class="card__rating_stars">
				<img
					src="@/assets/star.png"
					alt="star"
					v-for="(_, index) in new Array(itemRating)"
					:key="index"
				/>
			</div>
			<span class="card__rating_stars-number">{{ itemRating }}</span>
		</div>
		<div class="card__title">{{ item.title }}</div>
		<div class="card__price-info">
			<div class="card__price-info_discount-wrapper">
				<div
					class="card__price-info_discount"
					v-if="item.discountPercentage > 0"
				>
					<div class="card__price-info_discount_old-price">
						<span>{{ nws(Math.round(item.price)) }} $</span>
						<div class="card__price-info_discount-line"></div>
					</div>
					<RedBudge
						:value="`– ${Math.round(item.discountPercentage)}%`"
						type="cube"
					/>
				</div>
			</div>
			<div
				class="card__price-info_current-price"
				:class="{
					'card__price-info_current-price_hot': item.discountPercentage,
				}"
			>
				{{ nws(currentPrice) }} $
			</div>
		</div>
		<BButton value="В корзину" class="card_buybutton" @click="addItem" />
	</div>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import numberWithSpaces from "@/utils/numberWithSpaces.js";
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

		const itemRating = computed(() => Math.round(props.item.rating));
		const currentPrice = computed(() => {
			let result = props.item.price;
			if (props.item.discountPercentage) {
				result =
					props.item.price -
					(props.item.discountPercentage * props.item.price) / 100;
			}
			return Math.round(result);
		});

		const nws = numberWithSpaces;
		const addItem = () => {
			store.commit("addItem", props.item);
		};

		return { currentPrice, itemRating, addItem, nws };
	},
});
</script>

<style lang="scss" scoped>
@import "@/utils/colorVars.scss";
@import "@/utils/fontInter.scss";
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
	position: relative;

	flex-basis: calc((100% / 6) - 1px);

	transition: all 0.33s;
	animation: 0.77s fade linear;

	&:before {
		content: "";
		position: absolute;
		pointer-events: none;
		left: -1px;
		top: -1px;
		height: 100%;
		width: 100%;
		border: 1px solid transparent;
		transition: all 0.33s;
		z-index: 1;
	}

	&:hover:before {
		border-color: $COLOR_greyligth;
	}

	&__preview {
		height: 145px;
		overflow: hidden;
		img {
			object-fit: cover;
			width: 100%;
			height: 100%;
		}
	}

	&__rating {
		display: flex;
		align-items: center;
		height: 20px;
		gap: 8px;

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
				font-size: 14px;
				line-height: 20px;
			}
		}
	}

	&__title {
		height: 60px;
		overflow: hidden;
		font-family: "Open Sans", sans-serif;
		font-size: 15px;
		font-weight: 600;
		line-height: 20px;
		letter-spacing: 0px;

		-ms-text-overflow: ellipsis;
		-o-text-overflow: ellipsis;
		text-overflow: ellipsis;
		overflow: hidden;
		-ms-line-clamp: 3;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		display: -webkit-box;
		display: box;
		word-wrap: break-word;
		-webkit-box-orient: vertical;
		box-orient: vertical;
	}

	&__price-info {
		%ffbox {
			display: flex;
			height: 20px;
			gap: 8px;
		}

		&_discount {
			@extend %ffbox;

			&-wrapper {
				@extend %ffbox;
			}

			&_old-price {
				display: flex;
				align-items: center;
				position: relative;
				span {
					font-size: 14px;
					font-weight: 400;
					color: $COLOR_greyligth;
					line-height: 20px;
					letter-spacing: 0.05rem;
				}
			}
			&-line {
				position: absolute;
				justify-self: center;
				width: 100%;
				top: 49%;
				left: 0;
				border-top: 1px solid $COLOR_red;
			}
		}

		&_current-price {
			padding-top: 4px;
			font-size: 26px;
			font-weight: 500;
			line-height: 32px;
			letter-spacing: 0.1rem;

			&_hot {
				color: $COLOR_red;
			}
		}
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
