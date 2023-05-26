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
			<div class="card_discount">
				<div class="card_discount" v-if="item.discountPercentage > 0">
					<div class="card_discount-price">
						<span>{{ nws(Math.round(item.price)) }} $</span>
						<div class="card_discount-line"></div>
					</div>
					<RedBudge
						:value="`– ${Math.round(item.discountPercentage)}%`"
						type="cube"
					/>
				</div>
			</div>
			<div
				:class="
					item.discountPercentage ? 'card_price  card_price__hot' : 'card_price'
				"
			>
				<!-- eslint-disable no-mixed-spaces-and-tabs  -->
				{{
					item.discountPercentage
						? nws(
								Math.round(
									item.price - (item.discountPercentage * item.price) / 100
								)
						  )
						: nws(Math.round(item.price))
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

		const nws = numberWithSpaces;
		const addItem = () => {
			store.commit("addItem", props.item);
		};

		return { addItem, nws };
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

	min-width: 185px;
	width: calc((100% / 6) - 1px);

	border: 1px solid transparent;

	transition: all 0.33s;
	animation: 0.77s fade linear;
	&:hover {
		border-color: $COLOR_greyligth;
	}

	&_preview {
		// width: 141.52px;
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
			font-size: 14px;
			line-height: 20px;
		}
	}

	&_title {
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

	&_info {
		display: flex;
	}

	&_price {
		padding-top: 4px;
		font-size: 26px;
		font-weight: 500;
		line-height: 32px;
		letter-spacing: 0.1rem;

		&__hot {
			color: $COLOR_red;
		}
	}

	&_discount {
		display: flex;
		height: 20px;
		gap: 8px;

		&-price {
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
