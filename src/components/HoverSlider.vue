<template>
	<div class="hover-slider">
		<span ref="sensor" :class="`hover-slider__sensor`">
			<div
				v-for="(_, index) in images"
				:key="index"
				:class="[
					`hover-slider__sensor_item`,
					{
						'hover-slider__sensor_item_active':
							current === index && images.length > 1,
					},
				]"
				@mouseenter="() => onEnter(index)"
			/>
		</span>
		<div ref="parent" :class="`hover-slider__layout`">
			<div
				v-for="(item, index) in images"
				:key="index"
				:class="[
					`hover-slider__item`,
					{ 'hover-slider__active': current === index },
				]"
			>
				<img :src="item" :alt="index" />
			</div>
		</div>
	</div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
	name: "HoverSlider",
	props: {
		images: {
			type: Array,
			requared: true,
		},
	},
	setup(props) {
		const current = ref(0);
		const parent = ref();
		const sensor = ref();
		const cnImgActive = "hover-slider__active";
		const cnSensActive = "hover-slider__sensor_item_active";

		const onEnter = (index) => {
			if (props.images.length <= 1) return;
			parent.value.children[current.value].classList.remove(cnImgActive);
			sensor.value.children[current.value].classList.remove(cnSensActive);

			current.value = index;

			parent.value.children[index].classList.add(cnImgActive);
			sensor.value.children[index].classList.add(cnSensActive);
		};

		return { parent, sensor, current, onEnter };
	},
});
</script>

<style lang="scss" scoped>
@import "@/utils/colorVars.scss";
@import "@/utils/fontInter.scss";

.hover-slider {
	position: relative;
	transition: all 0.33s;
	height: 100%;
	width: 100%;
	overflow: hidden;
	display: flex;

	&__layout {
		display: block;
	}

	&__active {
		z-index: 1;
	}

	&__item {
		display: flex;
		justify-content: center;
		height: 145px;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;

		img {
			object-fit: cover;
			height: 100%;
			width: 100%;
		}
	}

	&__sensor {
		display: flex;
		height: 100%;
		width: 100%;

		&_item {
			height: 100%;
			flex-basis: 100%;
			z-index: 2;

			// &:hover {
			// 	border: 1px solid rgb(200, 255, 0);
			// }

			&_active {
				width: 100%;
				position: relative;
				display: flex;
				justify-content: center;
				align-items: flex-end;

				&:after {
					content: "";
					width: 95%;
					height: 3px;
					background: $COLOR_red;
					border-radius: 1.5px;
					transform: translateY(-1px);
				}
			}
		}
	}
}
</style>
