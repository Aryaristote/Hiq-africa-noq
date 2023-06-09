import moment from 'moment';
import { forEach } from "lodash-es";
import router from '../../router/';
import axiosFront from '@/common/plugins/axiosFront'

const CART_ITEMS = 'cart_items';
const AUTH_USER = 'front_auth_user';
const AUTH_TOKEN = 'front_auth_token';
const EXIPRES_KEY = 'front_expire_key';
const APP_SETTINGS_KEY = 'front_app_settings_key';

const getJSONFromLocalStorage = (key) => {
	const value = window.localStorage.getItem(key);

	if (value === 'undefined' || value === 'null' || value === undefined || value === null) {
		return null;
	}
	else {
		return JSON.parse(value);
	}
};

export default {
	namespaced: true,
	state() {
		return {
			appSetting: getJSONFromLocalStorage(APP_SETTINGS_KEY),
			user: getJSONFromLocalStorage(AUTH_USER),
			token: window.localStorage.getItem(AUTH_TOKEN) || null,
			expires: window.localStorage.getItem(EXIPRES_KEY) || null,
			cartItems: getJSONFromLocalStorage(CART_ITEMS) || [],
		}
	},

	mutations: {
		updateApp(state, appSetting) {
			state.appSetting = appSetting;
			window.localStorage.setItem(APP_SETTINGS_KEY, JSON.stringify(appSetting));
		},
		updateUser(state, user) {
			state.user = user;
			window.localStorage.setItem(AUTH_USER, JSON.stringify(user));
		},
		updateToken(state, token) {
			state.token = token;
			window.localStorage.setItem(AUTH_TOKEN, token);

			// Setting up auth bearer token to axios
			axiosFront.defaults.headers.common["Authorization"] = `Bearer ${token}`
		},
		updateExpires(state, expires) {
			state.expires = new Date(expires);
			window.localStorage.setItem(EXIPRES_KEY, expires);
		},
		addCartItems(state, items) {
			state.cartItems = items;
			window.localStorage.setItem(CART_ITEMS, JSON.stringify(items));
		},
	},

	actions: {
		updateApp(context, warehouseSlug) {
			axiosFront.get(`/front/app/${warehouseSlug}`)
				.then(function (response) {
					context.commit('updateApp', response.data.app);
				})
				.catch(function (error) {
					console.log(error)
				});
		},
		updateUser(context) {
			axiosFront.post(`/front/user`)
				.then(function (response) {
					context.commit('updateUser', response.data.user);
				})
				.catch(function (error) {
					console.log(error)
				});
		},
		refreshToken(context) {
			const token = context.state.token;

			if (token !== "" && token !== "undefined") {
				axiosFront
					.post(`/front/refresh-token?token=${token}`)
					.then(function (response) {
						context.commit("updateUser", response.data.user);
						context.commit("updateToken", response.data.token);
						context.commit("updateExpires", response.data.expires_in);
					})
					.catch(function (error) {
						console.log(error)});
					
			}
		},
		logout(context) {
			axiosFront.post('/front/logout')
				.then(function (response) {
					console.log(response)
					// TODO - Remove only specific keys related to front
					window.sessionStorage.clear();

					const token = context.state.token;
					console.log(token)

					context.commit('updateToken', null);
					context.commit('updateExpires', null);

					router.push({ name: "front.homepage" });
				})
				.catch(function (error) {
					console.log(error)
				});
		}
	},

	getters: {
		isLoggedIn: (state) => {
			if (state.token === null || state.token === '') {
				return false;
			}
			else {
				return moment(state.expires).isAfter(moment());
			}
		},
		totalCartItems: (state) => {
			var totals = 0;

			forEach(state.cartItems, (cartItem) => {
				totals += cartItem.cart_quantity;
			});

			return totals;
		}
	}
}