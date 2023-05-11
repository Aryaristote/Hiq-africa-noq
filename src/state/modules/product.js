import { forEach } from "lodash-es";
import axiosFront from '@/common/plugins/axiosFront';

const settings = "front-settings";
const productCards = "front-cards";
const featured = "featured-products";
const cardData = "card-data";

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
    frontSettings: getJSONFromLocalStorage(settings) || [],
    frontProductCards: getJSONFromLocalStorage(productCards) || [],
    productCardData: getJSONFromLocalStorage(cardData) || [],
    featuredProducts: getJSONFromLocalStorage(featured) || [],
    loading: false
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

    setFrontProducts(state, data) {
        state.featuredProducts = data.front_settings.featured_products_details;
        window.localStorage.setItem(featured, JSON.stringify(state.featuredProducts));

        state.frontSettings = data.front_settings;
        window.localStorage.setItem(settings, JSON.stringify(state.frontSettings));

        state.frontProductCards = data.front_product_cards;
        window.localStorage.setItem(productCards, JSON.stringify(state.frontProductCards));

        console.log(state.frontProductCards)
    },

    toggleLoading(state) {
        state.loading = !state.loading;
    },

    setProductCardData(state, product){
        state.productCardData = product;
    }
};

export const actions = {
    getFrontProducts: async ({ commit }) => {
        try {
            commit('toggleLoading');
            const response = await axiosFront.get('front/homepage/supermarket');
            commit('setFrontProducts', response.data);
            commit('toggleLoading');
        } catch (error) {
            console.error(error);
        }
    },
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
