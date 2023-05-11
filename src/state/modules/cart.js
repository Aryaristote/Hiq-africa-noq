import { forEach } from "lodash-es";

const cartItems = "cart-items";

const getJSONFromLocalStorage = (key) => {
	const value = window.localStorage.getItem(key);

	if (value === 'undefined' || value === 'null' || value === undefined || value === null) {
		return null;
	}
	else {
		return JSON.parse(value);
	}
};

export const state = {
    cartItems: getJSONFromLocalStorage(cartItems) || [],
};

export const getters = {
    totalCartItems: (state) => {
        var totals = 0;

        forEach(state.cartItems, (cartItem) => {
            totals += cartItem.cart_quantity;
        });

        return totals;
    }
}

export const mutations = {
    addCartItems(state, items) {
        state.cartItems = items;
        window.localStorage.setItem(cartItems, JSON.stringify(items));
    },
    removeCartItems() {
        window.localStorage.removeItem(cartItems);
        state.cartItems = getJSONFromLocalStorage(cartItems) || [];
    },
    removeFromCart(index) {
        // remove the item at the given index from the cart items array
        state.cartItems.splice(index, 1);
        // save the updated cart items to local storage
        localStorage.setItem(cartItems, JSON.stringify(state.cartItems));
      }
};

export const actions = {
    success({ commit }, message) {
        commit('success', message);
    },
    error({ commit }, message) {
        commit('error', message);
    },
    clear({ commit }) {
        commit('clear');
    }
};
