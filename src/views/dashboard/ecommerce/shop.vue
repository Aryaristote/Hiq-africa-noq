<script>
// import Layout from "@/layouts/main.vue";

export default {
    data() {
        return {
            title: "index",
            items: [
                {
                    text: "newpage",
                    href: "/",
                },
                {
                    text: "index",
                    active: true,
                },
            ],
        };
    }
};
</script>
    
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
                                        <h4 class="card-title mb-0">Avalon Industries</h4>
                                        <a href="index.html" class="logo-dark">
                                            <span class="logo-lg">
                                                <img src="assets/images/noq120.png" alt="" height="17">
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
                                                                <button type="button"
                                                                    class="btn btn-outline-primary btn-sm"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target=".bs-example-modal-cart">Cart <span
                                                                        class="badge bg-success ms-1">4</span></button>
                                                            </ol>
                                                        </div>
                                                        <div class="page-title-right">
                                                            <ol class="breadcrumb m-0">
                                                                <div class="btn-group dropstart">
                                                                    <button type="button" class="btn btn-sm btn-primary" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                                        <div class="card-header">
                                                            <div class="d-flex mb-3">
                                                                <div class="flex-grow-1">
                                                                    <h5 class="fs-16">Filters</h5>
                                                                </div>
                                                                <div class="flex-shrink-0">
                                                                    <a href="#"
                                                                        class="link-secondary text-decoration-underline"
                                                                        id="clearall">Clear All</a>
                                                                </div>
                                                            </div>

                                                            <div class="filter-choices-input">
                                                                <div class="choices" data-type="text"
                                                                    aria-haspopup="true" aria-expanded="false">
                                                                    <div class="choices__inner"><input
                                                                            class="form-control choices__input"
                                                                            data-choices="" data-choices-removeitem=""
                                                                            type="text" id="filter-choices-input"
                                                                            value="T-Shirts" hidden="" tabindex="-1"
                                                                            data-choice="active">
                                                                        <div
                                                                            class="choices__list choices__list--multiple">
                                                                            <div class="choices__item choices__item--selectable"
                                                                                data-item="" data-id="1"
                                                                                data-value="T-Shirts"
                                                                                data-custom-properties="[object Object]"
                                                                                aria-selected="true" data-deletable="">
                                                                                Milk<button type="button"
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

                                                        <div class="accordion accordion-flush filter-accordion">

                                                            <div class="card-body border-bottom">
                                                                <p
                                                                    class="text-muted text-uppercase fs-12 fw-medium mb-4">
                                                                    Price</p>

                                                                <div id="product-price-range"
                                                                    data-slider-color="primary"></div>
                                                                <div
                                                                    class="formCost d-flex gap-2 align-items-center mt-3">
                                                                    <input class="form-control form-control-sm"
                                                                        type="text" id="minCost" value="0" /> <span
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
                                                                        data-bs-target="#flush-collapseDiscount"
                                                                        aria-expanded="true"
                                                                        aria-controls="flush-collapseDiscount">
                                                                        <span
                                                                            class="text-muted text-uppercase fs-12 fw-medium">Categories</span>
                                                                        <span
                                                                            class="badge bg-success rounded-pill align-middle ms-1 filter-badge"></span>
                                                                    </button>
                                                                </h2>
                                                                <div id="flush-collapseDiscount"
                                                                    class="accordion-collapse collapse"
                                                                    aria-labelledby="flush-headingDiscount">
                                                                    <div class="accordion-body text-body pt-1">
                                                                        <div
                                                                            class="d-flex flex-column gap-2 filter-check">
                                                                            <div class="form-check">
                                                                                <input class="form-check-input"
                                                                                    type="checkbox" value="50% or more"
                                                                                    id="productdiscountRadio6">
                                                                                <label class="form-check-label"
                                                                                    for="productdiscountRadio6">50% or
                                                                                    more</label>
                                                                            </div>
                                                                            <div class="form-check">
                                                                                <input class="form-check-input"
                                                                                    type="checkbox" value="40% or more"
                                                                                    id="productdiscountRadio5">
                                                                                <label class="form-check-label"
                                                                                    for="productdiscountRadio5">40% or
                                                                                    more</label>
                                                                            </div>
                                                                            <div class="form-check">
                                                                                <input class="form-check-input"
                                                                                    type="checkbox" value="30% or more"
                                                                                    id="productdiscountRadio4">
                                                                                <label class="form-check-label"
                                                                                    for="productdiscountRadio4">
                                                                                    30% or more
                                                                                </label>
                                                                            </div>
                                                                            <div class="form-check">
                                                                                <input class="form-check-input"
                                                                                    type="checkbox" value="20% or more"
                                                                                    id="productdiscountRadio3" checked>
                                                                                <label class="form-check-label"
                                                                                    for="productdiscountRadio3">
                                                                                    20% or more
                                                                                </label>
                                                                            </div>
                                                                            <div class="form-check">
                                                                                <input class="form-check-input"
                                                                                    type="checkbox" value="10% or more"
                                                                                    id="productdiscountRadio2">
                                                                                <label class="form-check-label"
                                                                                    for="productdiscountRadio2">
                                                                                    10% or more
                                                                                </label>
                                                                            </div>
                                                                            <div class="form-check">
                                                                                <input class="form-check-input"
                                                                                    type="checkbox"
                                                                                    value="Less than 10%"
                                                                                    id="productdiscountRadio1">
                                                                                <label class="form-check-label"
                                                                                    for="productdiscountRadio1">
                                                                                    Less than 10%
                                                                                </label>
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
                                                                        data-bs-target="#flush-collapseDiscount"
                                                                        aria-expanded="true"
                                                                        aria-controls="flush-collapseDiscount">
                                                                        <span
                                                                            class="text-muted text-uppercase fs-12 fw-medium">Brands</span>
                                                                        <span
                                                                            class="badge bg-success rounded-pill align-middle ms-1 filter-badge"></span>
                                                                    </button>
                                                                </h2>
                                                                <div id="flush-collapseDiscount"
                                                                    class="accordion-collapse collapse"
                                                                    aria-labelledby="flush-headingDiscount">
                                                                    <div class="accordion-body text-body pt-1">
                                                                        <div
                                                                            class="d-flex flex-column gap-2 filter-check">
                                                                            <div class="form-check">
                                                                                <input class="form-check-input"
                                                                                    type="checkbox" value="50% or more"
                                                                                    id="productdiscountRadio6">
                                                                                <label class="form-check-label"
                                                                                    for="productdiscountRadio6">50% or
                                                                                    more</label>
                                                                            </div>
                                                                            <div class="form-check">
                                                                                <input class="form-check-input"
                                                                                    type="checkbox" value="40% or more"
                                                                                    id="productdiscountRadio5">
                                                                                <label class="form-check-label"
                                                                                    for="productdiscountRadio5">40% or
                                                                                    more</label>
                                                                            </div>
                                                                            <div class="form-check">
                                                                                <input class="form-check-input"
                                                                                    type="checkbox" value="30% or more"
                                                                                    id="productdiscountRadio4">
                                                                                <label class="form-check-label"
                                                                                    for="productdiscountRadio4">
                                                                                    30% or more
                                                                                </label>
                                                                            </div>
                                                                            <div class="form-check">
                                                                                <input class="form-check-input"
                                                                                    type="checkbox" value="20% or more"
                                                                                    id="productdiscountRadio3" checked>
                                                                                <label class="form-check-label"
                                                                                    for="productdiscountRadio3">
                                                                                    20% or more
                                                                                </label>
                                                                            </div>
                                                                            <div class="form-check">
                                                                                <input class="form-check-input"
                                                                                    type="checkbox" value="10% or more"
                                                                                    id="productdiscountRadio2">
                                                                                <label class="form-check-label"
                                                                                    for="productdiscountRadio2">
                                                                                    10% or more
                                                                                </label>
                                                                            </div>
                                                                            <div class="form-check">
                                                                                <input class="form-check-input"
                                                                                    type="checkbox"
                                                                                    value="Less than 10%"
                                                                                    id="productdiscountRadio1">
                                                                                <label class="form-check-label"
                                                                                    for="productdiscountRadio1">
                                                                                    Less than 10%
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <!-- end accordion-item -->

                                                            <div class="accordion-item">
                                                                <h2 class="accordion-header" id="flush-headingRating">
                                                                    <button
                                                                        class="accordion-button bg-transparent shadow-none collapsed"
                                                                        type="button" data-bs-toggle="collapse"
                                                                        data-bs-target="#flush-collapseRating"
                                                                        aria-expanded="false"
                                                                        aria-controls="flush-collapseRating">
                                                                        <span
                                                                            class="text-muted text-uppercase fs-12 fw-medium">Rating</span>
                                                                        <span
                                                                            class="badge bg-success rounded-pill align-middle ms-1 filter-badge"></span>
                                                                    </button>
                                                                </h2>

                                                                <div id="flush-collapseRating"
                                                                    class="accordion-collapse collapse"
                                                                    aria-labelledby="flush-headingRating">
                                                                    <div class="accordion-body text-body">
                                                                        <div
                                                                            class="d-flex flex-column gap-2 filter-check">
                                                                            <div class="form-check">
                                                                                <input class="form-check-input"
                                                                                    type="checkbox"
                                                                                    value="4 & Above Star"
                                                                                    id="productratingRadio4" checked>
                                                                                <label class="form-check-label"
                                                                                    for="productratingRadio4">
                                                                                    <span class="text-muted">
                                                                                        <i
                                                                                            class="mdi mdi-star text-warning"></i>
                                                                                        <i
                                                                                            class="mdi mdi-star text-warning"></i>
                                                                                        <i
                                                                                            class="mdi mdi-star text-warning"></i>
                                                                                        <i
                                                                                            class="mdi mdi-star text-warning"></i>
                                                                                        <i class="mdi mdi-star"></i>
                                                                                    </span> 4 & Above
                                                                                </label>
                                                                            </div>
                                                                            <div class="form-check">
                                                                                <input class="form-check-input"
                                                                                    type="checkbox"
                                                                                    value="3 & Above Star"
                                                                                    id="productratingRadio3">
                                                                                <label class="form-check-label"
                                                                                    for="productratingRadio3">
                                                                                    <span class="text-muted">
                                                                                        <i
                                                                                            class="mdi mdi-star text-warning"></i>
                                                                                        <i
                                                                                            class="mdi mdi-star text-warning"></i>
                                                                                        <i
                                                                                            class="mdi mdi-star text-warning"></i>
                                                                                        <i class="mdi mdi-star"></i>
                                                                                        <i class="mdi mdi-star"></i>
                                                                                    </span> 3 & Above
                                                                                </label>
                                                                            </div>
                                                                            <div class="form-check">
                                                                                <input class="form-check-input"
                                                                                    type="checkbox"
                                                                                    value="2 & Above Star"
                                                                                    id="productratingRadio2">
                                                                                <label class="form-check-label"
                                                                                    for="productratingRadio2">
                                                                                    <span class="text-muted">
                                                                                        <i
                                                                                            class="mdi mdi-star text-warning"></i>
                                                                                        <i
                                                                                            class="mdi mdi-star text-warning"></i>
                                                                                        <i class="mdi mdi-star"></i>
                                                                                        <i class="mdi mdi-star"></i>
                                                                                        <i class="mdi mdi-star"></i>
                                                                                    </span> 2 & Above
                                                                                </label>
                                                                            </div>
                                                                            <div class="form-check">
                                                                                <input class="form-check-input"
                                                                                    type="checkbox" value="1 Star"
                                                                                    id="productratingRadio1">
                                                                                <label class="form-check-label"
                                                                                    for="productratingRadio1">
                                                                                    <span class="text-muted">
                                                                                        <i
                                                                                            class="mdi mdi-star text-warning"></i>
                                                                                        <i class="mdi mdi-star"></i>
                                                                                        <i class="mdi mdi-star"></i>
                                                                                        <i class="mdi mdi-star"></i>
                                                                                        <i class="mdi mdi-star"></i>
                                                                                    </span> 1
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <!-- end accordion-item -->
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
                                                                                    placeholder="Search Products...">
                                                                                <i
                                                                                    class="ri-search-line search-icon"></i>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-sm">
                                                                        <div class="d-flex justify-content-sm-end">

                                                                            <a href="apps-ecommerce-add-product.html"
                                                                                class="btn btn-success"
                                                                                id="addproduct-btn">
                                                                                Checkout
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
                                                                                    data-bs-toggle="tab"
                                                                                    href="#productnav-all" role="tab">
                                                                                    Featured Stock<span
                                                                                        class="badge bg-danger align-middle rounded-pill ms-1">12</span>
                                                                                </a>
                                                                            </li>
                                                                            <li class="nav-item">
                                                                                <a class="nav-link fw-semibold"
                                                                                    data-bs-toggle="tab"
                                                                                    href="#productnav-published"
                                                                                    role="tab">
                                                                                    Available Stock <span
                                                                                        class="badge bg-secondary align-middle rounded-pill ms-1">5</span>
                                                                                </a>
                                                                            </li>
                                                                            <li class="nav-item">
                                                                                <a class="nav-link fw-semibold"
                                                                                    data-bs-toggle="tab"
                                                                                    href="#productnav-draft" role="tab">
                                                                                    Stock on Sale
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
                                                                    <div class="tab-pane active" id="productnav-all"
                                                                        role="tabpanel">
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

                                                                                <div
                                                                                    class="col-md-6 col-sm-12  card product">
                                                                                    <div class="card-body">
                                                                                        <div class="row gy-3">
                                                                                            <div class="col-sm-auto">
                                                                                                <div
                                                                                                    class="avatar-lg bg-light rounded p-1">
                                                                                                    <img src="assets/images/products/img-7.png"
                                                                                                        alt=""
                                                                                                        class="img-fluid d-block">
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm">
                                                                                                <h5
                                                                                                    class="fs-14 text-truncate">
                                                                                                    <a href="ecommerce-product-detail.html"
                                                                                                        class="text-dark">Noise
                                                                                                        NoiseFit
                                                                                                        Endure
                                                                                                        Smart
                                                                                                        Watch</a>
                                                                                                </h5>

                                                                                                <ul
                                                                                                    class="list-inline text-muted">
                                                                                                    <li
                                                                                                        class="list-inline-item">
                                                                                                        Color :
                                                                                                        <span
                                                                                                            class="fw-medium">Black</span>
                                                                                                    </li>
                                                                                                    <li
                                                                                                        class="list-inline-item">
                                                                                                        Size : <span
                                                                                                            class="fw-medium">32.5mm</span>
                                                                                                    </li>
                                                                                                </ul>

                                                                                                <div class="input-step">
                                                                                                    <button
                                                                                                        type="button"
                                                                                                        class="minus">–</button>
                                                                                                    <input type="number"
                                                                                                        class="product-quantity"
                                                                                                        value="1"
                                                                                                        min="0"
                                                                                                        max="100">
                                                                                                    <button
                                                                                                        type="button"
                                                                                                        class="plus">+</button>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm-auto">
                                                                                                <div
                                                                                                    class="text-lg-end">
                                                                                                    <p
                                                                                                        class="text-muted mb-1">
                                                                                                        Unit Price:
                                                                                                    </p>
                                                                                                    <h5 class="fs-14">
                                                                                                        $<span
                                                                                                            class="product-price">94.99</span>
                                                                                                    </h5>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <!-- card body -->
                                                                                    <div class="card-footer">
                                                                                        <div
                                                                                            class="row align-items-center gy-3">
                                                                                            <div class="col-sm">
                                                                                                <div
                                                                                                    class="d-flex flex-wrap my-n1">
                                                                                                    <div>
                                                                                                        <a href="#"
                                                                                                            class="d-block text-body p-1 px-2"
                                                                                                            data-bs-toggle="modal"
                                                                                                            data-bs-target=".bs-example-modal-lg"><i
                                                                                                                class="ri-eye-fill text-muted align-bottom me-1"></i>
                                                                                                            View
                                                                                                            Product</a>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm-auto">
                                                                                                <div
                                                                                                    class="d-flex align-items-center gap-2 text-muted">
                                                                                                    <div>Total :
                                                                                                    </div>
                                                                                                    <h5
                                                                                                        class="fs-14 mb-0">
                                                                                                        $<span
                                                                                                            class="product-line-price">94.99</span>
                                                                                                    </h5>
                                                                                                    <button
                                                                                                        type="button"
                                                                                                        class="btn btn-primary btn-sm">
                                                                                                        Order</button>

                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <!-- end card footer -->


                                                                                </div>
                                                                                <div
                                                                                    class="col-md-6 col-sm-12 card product">
                                                                                    <div class="card-body">
                                                                                        <div class="row gy-3">
                                                                                            <div class="col-sm-auto">
                                                                                                <div
                                                                                                    class="avatar-lg bg-light rounded p-1">
                                                                                                    <img src="assets/images/products/img-7.png"
                                                                                                        alt=""
                                                                                                        class="img-fluid d-block">
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm">
                                                                                                <h5
                                                                                                    class="fs-14 text-truncate">
                                                                                                    <a href="ecommerce-product-detail.html"
                                                                                                        class="text-dark">Noise
                                                                                                        NoiseFit
                                                                                                        Endure
                                                                                                        Smart
                                                                                                        Watch</a>
                                                                                                </h5>

                                                                                                <ul
                                                                                                    class="list-inline text-muted">
                                                                                                    <li
                                                                                                        class="list-inline-item">
                                                                                                        Color :
                                                                                                        <span
                                                                                                            class="fw-medium">Black</span>
                                                                                                    </li>
                                                                                                    <li
                                                                                                        class="list-inline-item">
                                                                                                        Size : <span
                                                                                                            class="fw-medium">32.5mm</span>
                                                                                                    </li>
                                                                                                </ul>

                                                                                                <div class="input-step">
                                                                                                    <button
                                                                                                        type="button"
                                                                                                        class="minus">–</button>
                                                                                                    <input type="number"
                                                                                                        class="product-quantity"
                                                                                                        value="1"
                                                                                                        min="0"
                                                                                                        max="100">
                                                                                                    <button
                                                                                                        type="button"
                                                                                                        class="plus">+</button>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm-auto">
                                                                                                <div
                                                                                                    class="text-lg-end">
                                                                                                    <p
                                                                                                        class="text-muted mb-1">
                                                                                                        Unit Price:
                                                                                                    </p>
                                                                                                    <h5 class="fs-14">
                                                                                                        $<span
                                                                                                            class="product-price">94.99</span>
                                                                                                    </h5>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <!-- card body -->
                                                                                    <div class="card-footer">
                                                                                        <div
                                                                                            class="row align-items-center gy-3">
                                                                                            <div class="col-sm">
                                                                                                <div
                                                                                                    class="d-flex flex-wrap my-n1">
                                                                                                    <div>
                                                                                                        <a href="#"
                                                                                                            class="d-block text-body p-1 px-2"><i
                                                                                                                class="ri-eye-fill text-muted align-bottom me-1"></i>
                                                                                                            View
                                                                                                            Product</a>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm-auto">
                                                                                                <div
                                                                                                    class="d-flex align-items-center gap-2 text-muted">
                                                                                                    <div>Total :
                                                                                                    </div>
                                                                                                    <h5
                                                                                                        class="fs-14 mb-0">
                                                                                                        $<span
                                                                                                            class="product-line-price">94.99</span>
                                                                                                    </h5>
                                                                                                    <button
                                                                                                        type="button"
                                                                                                        class="btn btn-primary btn-sm">Order</button>

                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <!-- end card footer -->


                                                                                </div>
                                                                                <div
                                                                                    class="col-md-6 col-sm-12 card product">
                                                                                    <div class="card-body">
                                                                                        <div class="row gy-3">
                                                                                            <div class="col-sm-auto">
                                                                                                <div
                                                                                                    class="avatar-lg bg-light rounded p-1">
                                                                                                    <img src="assets/images/products/img-7.png"
                                                                                                        alt=""
                                                                                                        class="img-fluid d-block">
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm">
                                                                                                <h5
                                                                                                    class="fs-14 text-truncate">
                                                                                                    <a href="ecommerce-product-detail.html"
                                                                                                        class="text-dark">Noise
                                                                                                        NoiseFit
                                                                                                        Endure
                                                                                                        Smart
                                                                                                        Watch</a>
                                                                                                </h5>

                                                                                                <ul
                                                                                                    class="list-inline text-muted">
                                                                                                    <li
                                                                                                        class="list-inline-item">
                                                                                                        Color :
                                                                                                        <span
                                                                                                            class="fw-medium">Black</span>
                                                                                                    </li>
                                                                                                    <li
                                                                                                        class="list-inline-item">
                                                                                                        Size : <span
                                                                                                            class="fw-medium">32.5mm</span>
                                                                                                    </li>
                                                                                                </ul>

                                                                                                <div class="input-step">
                                                                                                    <button
                                                                                                        type="button"
                                                                                                        class="minus">–</button>
                                                                                                    <input type="number"
                                                                                                        class="product-quantity"
                                                                                                        value="1"
                                                                                                        min="0"
                                                                                                        max="100">
                                                                                                    <button
                                                                                                        type="button"
                                                                                                        class="plus">+</button>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm-auto">
                                                                                                <div
                                                                                                    class="text-lg-end">
                                                                                                    <p
                                                                                                        class="text-muted mb-1">
                                                                                                        Unit Price:
                                                                                                    </p>
                                                                                                    <h5 class="fs-14">
                                                                                                        $<span
                                                                                                            class="product-price">94.99</span>
                                                                                                    </h5>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <!-- card body -->
                                                                                    <div class="card-footer">
                                                                                        <div
                                                                                            class="row align-items-center gy-3">
                                                                                            <div class="col-sm">
                                                                                                <div
                                                                                                    class="d-flex flex-wrap my-n1">
                                                                                                    <div>
                                                                                                        <a href="#"
                                                                                                            class="d-block text-body p-1 px-2"><i
                                                                                                                class="ri-eye-fill text-muted align-bottom me-1"></i>
                                                                                                            View
                                                                                                            Product</a>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm-auto">
                                                                                                <div
                                                                                                    class="d-flex align-items-center gap-2 text-muted">
                                                                                                    <div>Total :
                                                                                                    </div>
                                                                                                    <h5
                                                                                                        class="fs-14 mb-0">
                                                                                                        $<span
                                                                                                            class="product-line-price">94.99</span>
                                                                                                    </h5>
                                                                                                    <button
                                                                                                        type="button"
                                                                                                        class="btn btn-primary btn-sm">Order</button>

                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <!-- end card footer -->


                                                                                </div>
                                                                                <div
                                                                                    class="col-md-6 col-sm-12  card product">
                                                                                    <div class="card-body">
                                                                                        <div class="row gy-3">
                                                                                            <div class="col-sm-auto">
                                                                                                <div
                                                                                                    class="avatar-lg bg-light rounded p-1">
                                                                                                    <img src="assets/images/products/img-7.png"
                                                                                                        alt=""
                                                                                                        class="img-fluid d-block">
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm">
                                                                                                <h5
                                                                                                    class="fs-14 text-truncate">
                                                                                                    <a href="ecommerce-product-detail.html"
                                                                                                        class="text-dark">Noise
                                                                                                        NoiseFit
                                                                                                        Endure
                                                                                                        Smart
                                                                                                        Watch</a>
                                                                                                </h5>

                                                                                                <ul
                                                                                                    class="list-inline text-muted">
                                                                                                    <li
                                                                                                        class="list-inline-item">
                                                                                                        Color :
                                                                                                        <span
                                                                                                            class="fw-medium">Black</span>
                                                                                                    </li>
                                                                                                    <li
                                                                                                        class="list-inline-item">
                                                                                                        Size : <span
                                                                                                            class="fw-medium">32.5mm</span>
                                                                                                    </li>
                                                                                                </ul>

                                                                                                <div class="input-step">
                                                                                                    <button
                                                                                                        type="button"
                                                                                                        class="minus">–</button>
                                                                                                    <input type="number"
                                                                                                        class="product-quantity"
                                                                                                        value="1"
                                                                                                        min="0"
                                                                                                        max="100">
                                                                                                    <button
                                                                                                        type="button"
                                                                                                        class="plus">+</button>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm-auto">
                                                                                                <div
                                                                                                    class="text-lg-end">
                                                                                                    <p
                                                                                                        class="text-muted mb-1">
                                                                                                        Unit Price:
                                                                                                    </p>
                                                                                                    <h5 class="fs-14">
                                                                                                        $<span
                                                                                                            class="product-price">94.99</span>
                                                                                                    </h5>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <!-- card body -->
                                                                                    <div class="card-footer">
                                                                                        <div
                                                                                            class="row align-items-center gy-3">
                                                                                            <div class="col-sm">
                                                                                                <div
                                                                                                    class="d-flex flex-wrap my-n1">
                                                                                                    <div>
                                                                                                        <a href="#"
                                                                                                            class="d-block text-body p-1 px-2"><i
                                                                                                                class="ri-eye-fill text-muted align-bottom me-1"></i>
                                                                                                            View
                                                                                                            Product</a>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-sm-auto">
                                                                                                <div
                                                                                                    class="d-flex align-items-center gap-2 text-muted">
                                                                                                    <div>Total :
                                                                                                    </div>
                                                                                                    <h5
                                                                                                        class="fs-14 mb-0">
                                                                                                        $<span
                                                                                                            class="product-line-price">94.99</span>
                                                                                                    </h5>
                                                                                                    <button
                                                                                                        type="button"
                                                                                                        class="btn btn-primary btn-sm">Order</button>

                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <!-- end card footer -->


                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <!-- end tab pane -->

                                                                    <div class="tab-pane" id="productnav-published"
                                                                        role="tabpanel">
                                                                        <div id="table-product-list-published"
                                                                            class="table-card gridjs-border-none"></div>
                                                                    </div>
                                                                    <!-- end tab pane -->

                                                                    <div class="tab-pane" id="productnav-draft"
                                                                        role="tabpanel">
                                                                        <div class="py-4 text-center">
                                                                            <lord-icon
                                                                                src="https://cdn.lordicon.com/msoeawqm.json"
                                                                                trigger="loop"
                                                                                colors="primary:#405189,secondary:#0ab39c"
                                                                                style="width:72px;height:72px">
                                                                            </lord-icon>
                                                                            <h5 class="mt-4">Sorry! No Result Found</h5>
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