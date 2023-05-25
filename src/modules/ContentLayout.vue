<template>
	<section>
		<div class="container">
			<div class="content" v-if="items">
				<h3 class="content_title">Новинки</h3>
				<div class="content_items">
					<ItemCard v-for="item in items" :key="item.id" :item="item" />
				</div>
			</div>
			<div class="content_load" v-if="!items && !error">
				<LoadSpinner />
			</div>
			<div class="content_load" v-if="error">
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

.content {
	max-width: 1264px;

	&_load {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		color: $COLOR_darkblue;
	}

	&_title {
		color: $COLOR_darkblue;
		font-size: 40px;
		font-weight: 500;
		text-align: left;
		padding: 31px 0px;
	}

	&_items {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		background-color: $COLOR_white;

		// display: grid;
		// grid-template-columns: repeat(auto-fit, minmax(209px, 209px));
		// justify-content: center;
	}
}

@media (max-width: 1440px) {
	.content {
		max-width: 1054px;
	}
}
@media (max-width: 1200px) {
	.content {
		max-width: 844px;
	}
}
@media (max-width: 960px) {
	.content {
		max-width: 634px;
	}
}
@media (max-width: 720px) {
	.content {
		max-width: 424px;
	}
}
@media (max-width: 480px) {
	.content {
		max-width: 210px;

		&_title {
			text-align: center;
		}
	}
}
</style>
