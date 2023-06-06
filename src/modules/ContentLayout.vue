<template>
	<section>
		<div class="container">
			<div class="content" v-if="items">
				<h3 class="content__title">Новинки</h3>
				<div class="content__items">
					<ItemCard v-for="item in items" :key="item.id" :item="item" />
				</div>
			</div>
			<div class="content__load" v-if="!items && !error">
				<LoadSpinner />
			</div>
			<div class="content__load" v-if="error">
				<h2>{{ error }}</h2>
			</div>
		</div>
	</section>
</template>

<script>
import { defineComponent, ref, onBeforeMount } from "vue";
import ItemCard from "@/components/ItemCard.vue";
import LoadSpinner from "@/components/LoadSpinner.vue";
export default defineComponent({
	name: "ContentLayout",
	components: {
		ItemCard,
		LoadSpinner,
	},
	setup() {
		const items = ref();
		const error = ref();

		const fetchItems = async () => {
			const url = "https://dummyjson.com/products?limit=10";
			let res = await fetch(url);
			if (res.ok) {
				let json = await res.json();

				// мутация для проверки разных кейсов
				json.products[0].discountPercentage = 0;
				json.products[0].title =
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. ";
				json.products[2].discountPercentage = 0;
				json.products[4].title =
					"Супер длинное название, чтобы не влезало в эту сроку, однако этого может не достаточно ;) ";
				//

				items.value = json.products;
			} else {
				error.value = "Error: " + res.status;
			}
		};

		onBeforeMount(() => {
			const delay = Math.random() * 1000;
			setTimeout(() => {
				fetchItems();
			}, delay);
		});

		return { items, error };
	},
});
</script>

<style lang="scss">
@import "@/utils/colorVars.scss";
@import "@/utils/fontInter.scss";

.content {
	max-width: 1264px;

	&__load {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		color: $COLOR_darkblue;
	}

	&__title {
		color: $COLOR_darkblue;
		font-size: 40px;
		font-weight: 500;
		text-align: left;
		padding: 31px 0px;
	}

	&__items {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;

		gap: 1px;
		padding-bottom: 60px;
	}
}

@media (max-width: 1320px) {
	.content {
		padding: 0 20px;
		.card {
			flex-basis: calc((100% / 5) - 1px);
		}
	}
}

@media (max-width: 990px) {
	.content {
		.card {
			flex-basis: calc((100% / 4) - 1px);
		}
	}
}

@media (max-width: 805px) {
	.content {
		.card {
			flex-basis: calc((100% / 3) - 1px);
		}
	}
}
@media (max-width: 620px) {
	.content {
		.card {
			flex-basis: calc((100% / 2) - 1px);
		}
	}
}

@media (max-width: 440px) {
	.content {
		&_title {
			text-align: center;
		}
		.card {
			flex-basis: 100%;
		}
	}
}
</style>
