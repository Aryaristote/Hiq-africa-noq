<template>
	<div class="auth-page-wrapper pt-5">
		<div class="auth-one-bg-position auth-one-bg" id="auth-particles">
			<div class="bg-overlay"></div>

			<div class="shape">

				<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 1440 120">
					<path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
				</svg>
			</div>
			<Particles id="tsparticles" :options="{
				particles: {
					number: {
						value: 90,
						density: {
							enable: true,
							value_area: 800,
						},
					},
					color: {
						value: '#ffffff',
					},
					shape: {
						type: 'circle',
						stroke: {
							width: 0,
							color: '#000000',
						},
						polygon: {
							nb_sides: 5,
						},
						image: {
							src: 'img/github.svg',
							width: 100,
							height: 100,
						},
					},
					opacity: {
						value: 0.8,
						random: true,
						anim: {
							enable: true,
							speed: 1,
							opacity_min: 0,
							sync: false,
						},
					},
					size: {
						value: 4,
						random: true,
						anim: {
							enable: false,
							speed: 4,
							size_min: 0.2,
							sync: false,
						},
					},
					line_linked: {
						enable: false,
						distance: 150,
						color: '#ffffff',
						opacity: 0.4,
						width: 1,
					},
					move: {
						enable: true,
						speed: 2,
						direction: 'none',
						random: false,
						straight: false,
						out_mode: 'out',
						attract: {
							enable: false,
							rotateX: 600,
							rotateY: 1200,
						},
					},
				},
				interactivity: {
					detect_on: 'canvas',
					events: {
						onhover: {
							enable: true,
							mode: 'bubble',
						},
						onclick: {
							enable: true,
							mode: 'repulse',
						},
						resize: true,
					},
					modes: {
						grab: {
							distance: 400,
							line_linked: {
								opacity: 1,
							},
						},
						bubble: {
							distance: 400,
							size: 4,
							duration: 2,
							opacity: 0.8,
							speed: 3,
						},
						repulse: {
							distance: 200,
						},
						push: {
							particles_nb: 4,
						},
						remove: {
							particles_nb: 2,
						},
					},
				},
				retina_detect: true,
				config_demo: {
					hide_card: false,
					background_color: '#b61924',
					background_image: '',
					background_position: '50% 50%',
					background_repeat: 'no-repeat',
					background_size: 'cover',
				},
			}" />
		</div>

		<!-- auth page content -->
		<div class="auth-page-content">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class=" mb-4">
							<div class="col-xl-12">
								<div class="card">
									<div class="card-header text-center">
										<!-- <h4 class="card-title mb-0">Inyange Industries</h4> -->
										<a href="index.html" class="logo-dark">
											<span class="logo-lg">
												<img src="../../assets/images/logo.webp" alt="" height="17">
											</span>
										</a>
									</div><!-- end card header -->
									<div class="card-body">
										<div class="container-fluid">

											<!-- start page title -->
											<div class="row">
												<div class="col-12">
													<div
														class="page-title-box d-sm-flex align-items-center justify-content-between">
														<h4 class="mb-sm-0">Order Stock</h4>

														<div class="page-title-center">
															<ol class="breadcrumb m-0">
																<FlipModal />
															</ol>
														</div>
														<div class="page-title-right">
															<ol class="breadcrumb m-0">
																<div class="btn-group dropstart">
																	<button type="button" class="btn btn-sm btn-primary"
																		data-bs-toggle="dropdown" aria-haspopup="true"
																		aria-expanded="false">
																		<i class="ri-menu-2-line"></i> Menu
																	</button>
																	<div class="dropdown-menu">
																		<!-- item-->
																		<a class="dropdown-item" href="#">Sign In</a>
																		<div class="dropdown-divider"></div>
																		<a class="dropdown-item" href="#">Sign Up</a>
																	</div>
																</div>
															</ol>
														</div>

													</div>
												</div>
											</div>
											<!-- end page title -->

											<div class="row">
												<div class="col-xl-3 col-lg-4">
													<div class="card">

														<div class="accordion accordion-flush filter-accordion">

															<div class="card-body border-bottom">
																<p class="text-muted text-uppercase fs-12 fw-medium mb-4">
																	Price</p>

																<div id="product-price-range" data-slider-color="primary">
																</div>
																<div class="formCost d-flex gap-2 align-items-center mt-3">
																	<input class="form-control form-control-sm" type="text"
																		id="minCost" value="0" /> <span
																		class="fw-semibold text-muted">to</span> <input
																		class="form-control form-control-sm" type="text"
																		id="maxCost" value="1000" />
																</div>
															</div>


															<div class="accordion-item">
																<h2 class="accordion-header" id="flush-headingDiscount">
																	<button
																		class="accordion-button bg-transparent shadow-none collapsed"
																		type="button" data-bs-toggle="collapse"
																		data-bs-target="#flush-collapseCategory"
																		aria-expanded="true"
																		aria-controls="flush-collapseCategory">
																		<span
																			class="text-muted text-uppercase fs-12 fw-medium">Categories</span>
																		<span
																			class="badge bg-success rounded-pill align-middle ms-1 filter-badge"></span>
																	</button>
																</h2>
																<div id="flush-collapseCategory"
																	class="accordion-collapse collapse"
																	aria-labelledby="flush-headingDiscount">
																	<div class="accordion-body text-body pt-1">
																		<div class="d-flex flex-column gap-2 filter-check">
																			<div class="form-check">
																				<input class="form-check-input"
																					type="checkbox" value="50% or more"
																					id="productdiscountRadio6">
																				<label class="form-check-label"
																					for="productdiscountRadio6">Milk</label>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<!-- end accordion-item -->

															<div class="accordion-item">
																<h2 class="accordion-header" id="flush-headingDiscount">
																	<button
																		class="accordion-button bg-transparent shadow-none collapsed"
																		type="button" data-bs-toggle="collapse"
																		data-bs-target="#flush-collapseBrand"
																		aria-expanded="true"
																		aria-controls="flush-collapseBrand">
																		<span
																			class="text-muted text-uppercase fs-12 fw-medium">Brands</span>
																		<span
																			class="badge bg-success rounded-pill align-middle ms-1 filter-badge"></span>
																	</button>
																</h2>
																<div id="flush-collapseBrand"
																	class="accordion-collapse collapse"
																	aria-labelledby="flush-headingDiscount">
																	<div class="accordion-body text-body pt-1">
																		<div class="d-flex flex-column gap-2 filter-check">
																			<div class="form-check">
																				<input class="form-check-input"
																					type="checkbox" value="50% or more"
																					id="productdiscountRadio6">
																				<label class="form-check-label"
																					for="productdiscountRadio6">Inyange</label>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<!-- end accordion-item -->
														</div>

														<div class="card-header">
															<div class="d-flex mb-3">
																<div class="flex-grow-1">
																	<p
																		class="text-muted text-uppercase fs-12 fw-medium mb-1">
																		Tags</p>
																</div>
															</div>

															<div class="filter-choices-input">
																<div class="choices" data-type="text" aria-haspopup="true"
																	aria-expanded="false">
																	<div class="choices__inner"><input
																			class="form-control choices__input"
																			data-choices="" data-choices-removeitem=""
																			type="text" id="filter-choices-input"
																			value="T-Shirts" hidden="" tabindex="-1"
																			data-choice="active">
																		<div class="choices__list choices__list--multiple">
																			<div class="choices__item choices__item--selectable"
																				data-item="" data-id="1"
																				data-value="T-Shirts"
																				data-custom-properties="[object Object]"
																				aria-selected="true" data-deletable="">
																				Available Stock<button type="button"
																					class="choices__button"
																					aria-label="Remove item: 'T-Shirts'"
																					data-button="">Remove item</button>
																			</div>
																		</div>
																	</div>
																	<div class="choices__list choices__list--dropdown"
																		aria-expanded="false"></div>
																</div>
															</div>
														</div>
													</div>
													<!-- end card -->
												</div>
												<!-- end col -->

												<div class="col-xl-9 col-lg-8">
													<div>
														<div class="card">
															<div class="card-header border-0">
																<div class="row g-4">
																	<div class="col-sm-auto">
																		<div>
																			<div class="search-box ms-2">
																				<input type="text" class="form-control"
																					id="searchProductList"
																					placeholder="Search Stock">
																				<i class="ri-search-line search-icon"></i>

																			</div>
																		</div>
																	</div>
																	<div class="col-sm">
																		<div class="d-flex justify-content-sm-end">

																			<a href="apps-ecommerce-add-product.html"
																				class="btn btn-success" id="addproduct-btn">
																				Express Checkout
																				<i
																					class="ri-arrow-right-line align-bottom me-1"></i></a>
																		</div>
																	</div>
																</div>
															</div>

															<div class="card-header">
																<div class="row align-items-center">
																	<div class="col">
																		<ul class="nav nav-tabs-custom card-header-tabs border-bottom-0"
																			role="tablist">
																			<li class="nav-item">
																				<a class="nav-link active fw-semibold"
																					data-bs-toggle="tab" href="#all"
																					role="tab">
																					Available <span
																						class="badge bg-secondary align-middle rounded-pill ms-1">
																						{{ featuredProducts &&
																							featuredProducts.length }}</span>
																				</a>
																			</li>
																			<li class="nav-item"
																				v-for="card in frontProductCards"
																				:key="card.xid" :title="card.substitle"
																				@click="setProductCard(card)">
																				<a class="nav-link fw-semibold"
																					data-bs-toggle="tab" href="#cards"
																					role="tab">
																					{{ card && card.title }}<span
																						class="badge bg-secondary align-middle rounded-pill ms-1">
																						{{ card && card.x_products &&
																							card.x_products.length }}
																					</span>
																				</a>
																			</li>
																		</ul>
																	</div>
																	<div class="col-auto">
																		<div id="selection-element">
																			<div
																				class="my-n1 d-flex align-items-center text-muted">
																				Select <div id="select-content"
																					class="text-body fw-semibold px-1">
																				</div> Result <button type="button"
																					class="btn btn-link link-danger p-0 ms-3"
																					data-bs-toggle="modal"
																					data-bs-target="#removeItemModal">Remove</button>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<!-- end card header -->
															<div class="card-body">

																<div class="tab-content text-muted">
																	<div class="tab-pane active" id="all" role="tabpanel">
																		<div class="table-card gridjs-border-none">
																			<div class="row">
																				<div class="form-check form-switch form-switch-md d-flex justify-content-sm-center py-2"
																					dir="ltr">

																					<input type="checkbox"
																						class="form-check-input"
																						id="customSwitchsizemd">
																					<label class="form-check-label"
																						for="customSwitchsizemd">List
																						View</label>
																				</div>
																				<ProductLoading v-if="loadingProducts"/>
																				<div v-for="product in featuredProducts"
																					:key="product.id"
																					class="col-md-6 col-sm-12">
																					<ProductCard :product="product"
																						:key="product.id" />
																				</div>
																			</div>
																		</div>
																	</div>
																	<!-- end tab pane -->

																	<div class="tab-pane" id="cards" role="tabpanel">
																		<div class="table-card gridjs-border-none">
																			<div class="row">
																				<div class="form-check form-switch form-switch-md d-flex justify-content-sm-center py-2"
																					dir="ltr">

																					<input type="checkbox"
																						class="form-check-input"
																						id="customSwitchsizemd">
																					<label class="form-check-label"
																						for="customSwitchsizemd">List
																						View</label>
																				</div>
																				<ProductLoading v-if="loadingProducts"/>
																				<div v-for="product in productCardData"
																					:key="product.id"
																					class="col-md-6 col-sm-12">
																					<ProductCard :product="product"
																						:key="product.id" />
																				</div>
																			</div>
																		</div>
																	</div>
																	<!-- end tab pane -->
																</div>
																<!-- end tab content -->

															</div>
															<!-- end card body -->
														</div>
														<!-- end card -->
													</div>
												</div>
												<!-- end col -->
											</div>
											<!-- end row -->

										</div>
										<!-- container-fluid -->
									</div>
									<!-- end card body -->
								</div>
								<!-- end card -->
							</div>
						</div>
					</div>
				</div>
				<!-- end row -->

			</div>
			<!-- end container -->
		</div>
		<rightBar />


		<!-- end auth page content -->
		<footer class="footer">
			<b-container>
				<b-row>
					<b-col lg="12">
						<div class="text-center">
							<p class="mb-0 text-muted">&copy; {{ new Date().getFullYear() }} HiQ Africa</p>
						</div>
					</b-col>
				</b-row>
			</b-container>
		</footer>
	</div>
</template>
<script>
import { defineComponent, onMounted } from "vue";
import { mapState, useStore } from "vuex";

// import { useRoute } from "vue-router";
import ProductCard from "@/common/components/product/ProductCard.vue";
import ProductLoading from '@/common/components/product/ProductLoading';
import rightBar from '@/components/right-bar'
import FlipModal from '@/common/layouts/FlipModal'
// import ProductInfo from '@/common/components/product/ProductInfo';
// import RightOffcanvas from "../../components/right-offcanvas.vue";
// import CategoryHeader from "./includes/CategoryHeader.vue";
// import common from "@/common/composable/common";
// import axiosFront from '@/common/plugins/axiosFront';

import 'prismjs';
import 'prismjs/themes/prism.css';

export default defineComponent({
	components: {
		ProductCard,
		ProductLoading,
		FlipModal,
		rightBar
	},
	setup() {
		// const { frontWarehouse } = common();
		// const route = useRoute();	
		const store = useStore();

		onMounted(() => {
			store.dispatch("product/getFrontProducts")
		});

		const setProductCard = (card) => {
			store.commit("product/setProductCardData", card.products_details);


		};
		return {
			setProductCard
		};
	},
	computed: mapState({
		featuredProducts: state => state.product.featuredProducts,
		frontProductCards: state => state.product.frontProductCards,
		loadingProducts: state => state.product.loading,
		productCardData: state => state.product.productCardData
	}),	
});
</script>
