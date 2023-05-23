<template>
	<NavBar />
	<Content />
</template>

<script>
import NavBar from "@/modules/NavBar.vue";
import Content from "@/modules/Content.vue";

export default {
	name: "App",
	components: {
		NavBar,
		Content,
	},
};
</script>

<style>
#app {
	font-family: "Inter", sans-serif;
	font-style: normal;
	text-align: center;
}
</style>
