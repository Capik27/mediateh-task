import { createStore } from "vuex";

export default createStore({
	state: {
		cart: {
			items: [],
		},
	},
	getters: {},
	mutations: {
		addItem(state, payload) {
			state.cart.items.push(payload);
		},
		reset(state) {
			state.cart.items.length = 0;
		},
	},
	actions: {},
});
