<template>
	<section>
		<div class="container">
			<div class="content">
				<h3 class="content_title">Новинки</h3>
				<div class="content_items" v-if="items">
					<ItemCard v-for="item in items" :key="item.id" :item="item" />
				</div>
				<div class="loader" v-else />
			</div>
		</div>
	</section>
</template>

<script>
import { defineComponent, ref, onBeforeMount } from "vue";
import ItemCard from "@/components/ItemCard.vue";
export default defineComponent({
	name: "ContentLayout",
	components: {
		ItemCard,
	},
	setup() {
		const items = ref();

		const fetchItems = async () => {
			const url = "https://dummyjson.com/products?limit=10";
			let res = await fetch(url);
			if (res.ok) {
				let json = await res.json();
				items.value = json.products;
				console.log("json", json);
			} else {
				throw Error(res.status);
			}
		};

		onBeforeMount(() => {
			const delay = Math.random() * 1000;
			setTimeout(() => {
				fetchItems();
			}, delay);
		});

		return { items };
	},
});
</script>

<style lang="scss" scoped>
@import "@/utils/colorVars.scss";
@import "@/utils/loader.scss";

.content {
	&_title {
		color: #051d36;
		font-size: 40px;
		font-weight: 500;
		text-align: left;
		padding: 31px 0px;
	}

	&_items {
		display: flex;
		flex-wrap: wrap;

		// display: grid;
		// grid-template-columns: repeat(auto-fit, minmax(209px, 209px));
		// justify-content: center;

		// background-color: $COLOR_white;
		// width: 100%;
		// height: 400px;
	}
}
</style>
