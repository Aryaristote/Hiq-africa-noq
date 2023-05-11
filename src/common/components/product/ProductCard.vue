<template>
	<div class="card product ribbon-box border shadow-none mb-lg-0 right">
		<div class="card-body">
			<div class="ribbon-two ribbon-two-success" v-if="product && product.discount_rate"><span>On offer</span></div>
			<div class="row gy-3">
				<div class="col-sm-auto" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft"
					aria-controls="offcanvasLeft">
					<div class="avatar-lg bg-light rounded p-1">
						<img :src="product && product.image_url || `'https://ui-avatars.com/api/?name='${product && product.name}`"
							class="img-fluid d-block">
					</div>
				</div>
				<div class="col-sm">
					<h5 class="fs-14 text-truncate">
						<a href="ecommerce-product-detail.html" class="text-dark" data-bs-toggle="offcanvas"
							data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft">
							{{ product && product.name }}
						</a>
					</h5>

					<ul class="list-inline text-muted">
						<li class="list-inline-item">
							<span class="fw-small">
								500 ML
							</span>
						</li>
					</ul>

					<ul class="list-inline">
						<i class="ri-folder-line text-muted align-bottom me-1"></i>
						<li class="list-inline-item text-primary">
							<span class="fw-medium">
								{{ product && product.category && product.category.name }}
							</span>
						</li>
						<i class="ri-medal-line text-muted align-bottom me-1"></i>
						<li class="list-inline-item text-primary">
							<span class="fw-medium">
								{{ product && product.brand && product.brand.name }}
							</span>
						</li>
					</ul>

					<div class="input-step">
						<button type="button" class="minus" @click="currentProduct.cart_quantity -= 1;
						addItem(currentProduct);
																															">–</button>
						<input type="number" class="product-quantity" :value= currentProduct.cart_quantity  min='1' max="100">
						<button type="button" class="plus" @click="
							currentProduct.cart_quantity += 1;
							addItem(currentProduct);
						">+</button>
					</div>
				</div>
				<div class="col-sm-auto">
					<div class="text-lg-end">
						<p class="text-muted mb-1">
							Unit Price
						</p>
						<h5 class="fs-14">
							<span class="product-price">
								{{ product && product.details && product.details.sales_price }}
							</span>
						</h5>
					</div>
				</div>
			</div>
		</div>
		<!-- card body -->
		<div class="card-footer">
			<div class="row align-items-center gy-3">
				<div class="col-sm">
					<div class="d-flex flex-wrap my-n1">
						<div>
							<span class="d-block text-body p-1 px-2" @click=" addItem(currentProduct); "
								style="cursor: pointer;" v-if=" !inCart "><i
									class="ri-shopping-cart-line text-muted align-bottom me-1"></i>
								Add To Order </span>
							<span class="d-block text-body p-1 px-2" v-if=" inCart "><i
									class="ri-checkbox-circle-line text-success align-bottom me-1"></i>
								Added </span>
						</div>
					</div>
				</div>
				<div class="col-sm-auto">
					<div class="d-flex align-items-center gap-2 text-muted">
						<i class="ri-price-tag-3-line text-muted align-bottom me-1"></i>
						<h5 class="fs-14 mb-0">
							Rwf <span class="product-line-price">{{ currentProduct.cart_quantity*product.details.sales_price
								|| product.details.sales_price }}</span>
						</h5>
						<button type="button" class="btn btn-primary btn-sm" v-if=" !inCart "
							@click=" addItem(currentProduct) ">
							Order</button>
						<button type="button" class="btn btn-outline-success btn-sm" v-if=" inCart ">
							Checkout </button>

					</div>
				</div>
			</div>
		</div>
		<!-- end card footer -->
		<rightOffcanvas :currentProduct=" currentProduct " :key=" currentProduct.xid " />


	</div>
</template>
<script>
import { ref, onMounted, watch } from "vue";
import { useStore, mapState } from "vuex";
import { filter, forEach } from "lodash-es";
// import store from "../../../store/front";
import rightOffcanvas from '@/components/right-offcanvas'
// import common from "@/common/composable/common";
// import { getSalesPriceWithTax } from "@/common/scripts/functions";

export default {
	props: ["product"],
	components: {
		rightOffcanvas
	},
	computed: mapState({
		loadingProducts: state => state.product.loading
	}),
	setup(props) {
		// const { formatAmountCurrency } = common();
		const store = useStore();
		const visible = ref(false);
		const productQuantity = ref(1);
		const currentProduct = ref({});
		const inCart = ref(false);

		onMounted(() => {
			const cartItems = store.state.cart.cartItems;
			let productQuantity = 1;

			forEach(cartItems, (iee) => {
				if (iee.xid == props.product.xid) {
					props.product.xid
				}
			});

			currentProduct.value = { ...props.product, cart_quantity: productQuantity };

			// check if each product ID appears in the cart items

			inCart.value = cartItems.some(cartItem => cartItem.xid === props.product.xid);
		});

		const addItem = (product) => {
			const cartItems = store.state.cart.cartItems;

			const updatedCartItems = filter(
				cartItems,
				(cartItem) => cartItem.xid != product.xid
			);

			updatedCartItems.push({
				...product,
				cart_quantity: product.cart_quantity,
			});

			store.commit("cart/addCartItems", updatedCartItems);

			inCart.value = true;

		};

		watch(store.state.cart.cartItems, (newVal, oldVal) => {
			let productQuantity = 0;
			console.log(oldVal);
			forEach(newVal.cartItems, (iee) => {
				if (iee.xid == currentProduct.value.xid) {
					productQuantity = iee.cart_quantity;
				}
			});

			currentProduct.value = {
				...currentProduct.value,
				cart_quantity: productQuantity,
			};
			console.log(currentProduct);
		});

		return {
			currentProduct,
			// formatAmountCurrency,

			visible,
			productQuantity,
			addItem,
			inCart
			// getSalesPriceWithTax,
		};
	}
};
</script>
