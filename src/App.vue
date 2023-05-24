<template>
	<NavBar />
	<ContentLayout />
</template>

<script>
import NavBar from "@/modules/NavBar.vue";
import ContentLayout from "@/modules/ContentLayout.vue";

export default {
	name: "App",
	components: {
		NavBar,
		ContentLayout,
	},
};
</script>

<style lang="scss">
@import "@/utils/colorVars.scss";
* {
	font-family: "Inter", sans-serif;
	font-style: normal;
	text-align: center;

	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

#app {
	background-color: $COLOR_BG;
	min-height: 100vh;
	height: 100%;
}

.container {
	max-width: 1920px;
	margin: auto;
	display: flex;
	justify-content: center;
}
</style>
