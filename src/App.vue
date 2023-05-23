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
	height: 100vh;
}

.container {
	max-width: 1920px;
	margin: auto;
	// padding: 0px 17%;

	border: 1px dotted black;
}
</style>
