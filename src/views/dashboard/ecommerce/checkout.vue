<script>
// import Layout from "@/layouts/main.vue";
import { mapState } from "vuex";

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
    },
    computed: mapState({
		cartItems: state => state.cart.cartItems
	}),	
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
                                        <a href="index.html" class="logo-dark page-title-right">
                                            <span class="logo-lg">
                                                <img src="/assets/images/noq120.png" alt="" height="17">
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
                                                        <h4 class="mb-sm-0">Checkout</h4>

                                                        <div class="page-title-right">
                                                            <ol class="breadcrumb m-0">
                                                                <div class="btn-group dropstart">
                                                                    <button type="button" class="btn btn-sm btn-primary"
                                                                        data-bs-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">
                                                                        <i class="ri-menu-2-line"></i> Menu
                                                                    </button>
                                                                    <div class="dropdown-menu">
                                                                        <div class="dropdown-header noti-title">
                                                                            <h5
                                                                                class="font-size-13 text-muted text-truncate mn-0">
                                                                                Hey Jessie!</h5>
                                                                        </div>
                                                                        <!-- item-->
                                                                        <a class="dropdown-item" href="#">Home</a>
                                                                        <a class="dropdown-item" href="#">Dashboard</a>
                                                                        <a class="dropdown-item" href="#">Orders</a>
                                                                        <a class="dropdown-item" href="#">Profile</a>
                                                                        <div class="dropdown-divider"></div>
                                                                        <a class="dropdown-item" href="#">Sign Out</a>
                                                                    </div>
                                                                </div>
                                                            </ol>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <!-- end page title -->

                                            <div class="row">
                                                <div class="col-xl-8">
                                                    <div class="card">
                                                        <div class="card-body checkout-tab">

                                                            <form action="#">
                                                                <div class="step-arrow-nav mt-n3 mx-n3 mb-3">

                                                                    <ul class="nav nav-pills nav-justified custom-nav"
                                                                        role="tablist">
                                                                        <li class="nav-item" role="presentation">
                                                                            <button class="nav-link fs-15 p-3 active"
                                                                                id="pills-bill-address-tab"
                                                                                data-bs-toggle="pill"
                                                                                data-bs-target="#pills-bill-address"
                                                                                type="button" role="tab"
                                                                                aria-controls="pills-bill-address"
                                                                                aria-selected="true" data-position="1"><i
                                                                                    class="ri-truck-line fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2"></i>
                                                                                Transportation</button>
                                                                        </li>
                                                                        <li class="nav-item" role="presentation">
                                                                            <button class="nav-link fs-15 p-3"
                                                                                id="pills-payment-tab" data-bs-toggle="pill"
                                                                                data-bs-target="#pills-payment"
                                                                                type="button" role="tab"
                                                                                aria-controls="pills-payment"
                                                                                aria-selected="false" data-position="2"
                                                                                tabindex="-1"><i
                                                                                    class="ri-bank-card-line fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2"></i>
                                                                                Payments</button>
                                                                        </li>
                                                                        <li class="nav-item" role="presentation">
                                                                            <button class="nav-link fs-15 p-3"
                                                                                id="pills-finish-tab" data-bs-toggle="pill"
                                                                                data-bs-target="#pills-finish" type="button"
                                                                                role="tab" aria-controls="pills-finish"
                                                                                aria-selected="false" data-position="3"
                                                                                tabindex="-1"><i
                                                                                    class="ri-checkbox-circle-line fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2"></i>Finish</button>
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                                <div class="tab-content">

                                                                    <div class="tab-pane fade active show"
                                                                        id="pills-bill-address" role="tabpanel"
                                                                        aria-labelledby="pills-bill-address-tab">
                                                                        <div>
                                                                            <h5 class="mb-1">Transport Information</h5>
                                                                        </div>

                                                                        <div class="mt-4">

                                                                            <div class="row g-4">
                                                                                <div class="col-lg-6">
                                                                                    <div class="form-check card-radio"
                                                                                        data-bs-toggle="collapse"
                                                                                        data-bs-target="#shipmentmethodCollapse.hide"
                                                                                        aria-expanded="false"
                                                                                        aria-controls="shipmentmethodCollapse">
                                                                                        <input id="shippingMethod01"
                                                                                            name="shippingMethod"
                                                                                            type="radio"
                                                                                            class="form-check-input"
                                                                                            checked>
                                                                                        <label class="form-check-label"
                                                                                            for="shippingMethod01">
                                                                                            <span
                                                                                                class="fs-20 float-end mt-2 text-wrap d-block fw-semibold">Free</span>
                                                                                            <span
                                                                                                class="fs-14 mb-1 text-wrap d-block">Self
                                                                                                Pickup</span>
                                                                                            <span
                                                                                                class="text-muted fw-normal text-wrap d-block">Open
                                                                                                Mon - Sat 08:00 - 17:00
                                                                                            </span>
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-lg-6">
                                                                                    <div class="form-check card-radio">
                                                                                        <input id="shippingMethod02"
                                                                                            name="shippingMethod"
                                                                                            type="radio"
                                                                                            class="form-check-input"
                                                                                            disabled>
                                                                                        <label class="form-check-label"
                                                                                            for="shippingMethod02">
                                                                                            <span
                                                                                                class="fs-20 float-end mt-2 text-wrap d-block fw-semibold">Rwf24.99</span>
                                                                                            <span
                                                                                                class="fs-14 mb-1 text-wrap d-block">Request
                                                                                                Delivery</span>
                                                                                            <span
                                                                                                class="text-muted fw-normal text-wrap d-block">Delivery
                                                                                                within 24hrs.</span>
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div class="d-flex align-items-start gap-3 mt-4">
                                                                            <button type="button"
                                                                                class="btn btn-success btn-label right ms-auto nexttab"
                                                                                data-nexttab="pills-payment-tab"><i
                                                                                    class="ri-bank-card-line label-icon align-middle fs-16 ms-2"></i>Continue
                                                                                to Payment</button>
                                                                        </div>
                                                                    </div>
                                                                    <!-- end tab pane -->

                                                                    <div class="tab-pane fade" id="pills-payment"
                                                                        role="tabpanel" aria-labelledby="pills-payment-tab">
                                                                        <div>
                                                                            <h5 class="mb-1">Payment Options</h5>
                                                                        </div>

                                                                        <div class="row g-4 mt-1">
                                                                            <div class="col-lg-6 col-sm-6">
                                                                                <div data-bs-toggle="collapse"
                                                                                    data-bs-target="#paymentmethodCollapse"
                                                                                    aria-expanded="true"
                                                                                    aria-controls="paymentmethodCollapse">
                                                                                    <div class="form-check card-radio">
                                                                                        <input id="paymentMethod02"
                                                                                            name="paymentMethod"
                                                                                            type="radio"
                                                                                            class="form-check-input"
                                                                                            checked="">
                                                                                        <label class="form-check-label"
                                                                                            for="paymentMethod02">
                                                                                            <span
                                                                                                class="fs-16 text-muted me-2"><i
                                                                                                    class="ri-bank-card-fill align-bottom"></i></span>
                                                                                            <span
                                                                                                class="fs-14 text-wrap">MTN
                                                                                                Momo Pay</span>
                                                                                            <span
                                                                                                class="text-muted fw-normal text-wrap d-block">Mobile
                                                                                                Push Payment</span>
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div class="col-lg-6 col-sm-6">
                                                                                <div data-bs-toggle="collapse"
                                                                                    data-bs-target="#paymentmethodCollapse.show"
                                                                                    aria-expanded="false"
                                                                                    aria-controls="paymentmethodCollapse">
                                                                                    <div class="form-check card-radio">
                                                                                        <input id="paymentMethod03"
                                                                                            name="paymentMethod"
                                                                                            type="radio"
                                                                                            class="form-check-input">
                                                                                        <label class="form-check-label"
                                                                                            for="paymentMethod03">
                                                                                            <span
                                                                                                class="text-primary fs-20 float-end mt-2 text-wrap d-block fw-semibold">Rwf
                                                                                                250,000</span>
                                                                                            <span
                                                                                                class="fs-16 text-muted me-2"><i
                                                                                                    class="ri-money-dollar-box-fill align-bottom"></i></span>
                                                                                            <span class="fs-14 text-wrap">MC
                                                                                                JazaDuka</span>
                                                                                            <span
                                                                                                class="text-muted fw-normal text-wrap d-block">
                                                                                                Available Credit:
                                                                                            </span>
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div class="collapse show"
                                                                            id="paymentmethodCollapse">
                                                                            <div
                                                                                class="card p-4 border shadow-none mb-0 mt-4">
                                                                                <div class="row gy-3">
                                                                                    <div class="col-md-12">
                                                                                        <label for="cc-name"
                                                                                            class="form-label">MTN Momo
                                                                                            Number</label>
                                                                                        <div class="input-group mb-3">
                                                                                            <span
                                                                                                class="input-group-text">+250</span>
                                                                                            <input type="number"
                                                                                                class="form-control"
                                                                                                placeholder="7********">
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                            <div class="text-muted mt-2 fst-italic">
                                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                                    width="24" height="24"
                                                                                    viewBox="0 0 24 24" fill="none"
                                                                                    stroke="currentColor" stroke-width="2"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    class="feather feather-lock text-muted icon-xs">
                                                                                    <rect x="3" y="11" width="18"
                                                                                        height="11" rx="2" ry="2"></rect>
                                                                                    <path d="M7 11V7a5 5 0 0 1 10 0v4">
                                                                                    </path>
                                                                                </svg> Your
                                                                                transaction is secured with SSL encryption
                                                                            </div>
                                                                        </div>

                                                                        <div class="d-flex align-items-start gap-3 mt-4">
                                                                            <button type="button"
                                                                                class="btn btn-light btn-label previestab"
                                                                                data-previous="pills-bill-address-tab"><i
                                                                                    class="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i>Back</button>
                                                                            <button type="button"
                                                                                class="btn btn-success btn-label right ms-auto nexttab"
                                                                                data-nexttab="pills-finish-tab"><i
                                                                                    class="ri-shopping-basket-line label-icon align-middle fs-16 ms-2"></i>Complete
                                                                                Order</button>
                                                                        </div>
                                                                    </div>
                                                                    <!-- end tab pane -->

                                                                    <div class="tab-pane fade" id="pills-finish"
                                                                        role="tabpanel" aria-labelledby="pills-finish-tab">
                                                                        <div class="text-center py-5">

                                                                            <div class="mb-4">
                                                                                <lord-icon
                                                                                    src="https://cdn.lordicon.com/lupuorrc.json"
                                                                                    trigger="loop"
                                                                                    colors="primary:#00559e,secondary:#00bd9d"
                                                                                    style="width:120px;height:120px"></lord-icon>
                                                                            </div>
                                                                            <h5>Thank you ! Your Order is Completed !</h5>
                                                                            <p class="text-muted">You will receive an order
                                                                                confirmation email
                                                                                with
                                                                                details of your order.</p>

                                                                            <h3 class="fw-semibold">Order ID: <a
                                                                                    href="apps-ecommerce-order-details.html"
                                                                                    class="text-decoration-underline">VZ2451</a>
                                                                            </h3>
                                                                        </div>
                                                                    </div>
                                                                    <!-- end tab pane -->
                                                                </div>
                                                                <!-- end tab content -->
                                                            </form>
                                                        </div>
                                                        <!-- end card body -->
                                                    </div>

                                                    <!-- end card -->
                                                    <div class="card">
                                                        <div class="card-header align-items-center d-flex">
                                                            <h4 class="card-title mb-0 flex-grow-1">Products </h4>
                                                        </div><!-- end card header -->

                                                        <div class="card-body">
                                                            <div class="table-responsive table-card">
                                                                <table
                                                                    class="table table-hover table-centered align-middle table-nowrap mb-0">
                                                                    <tbody>
                                                                        <tr v-for="item in cartItems"
                                                                        :key="item.xid">
                                                                            <td>
                                                                                <div class="d-flex align-items-center">
                                                                                    <div
                                                                                        class="avatar-sm bg-light rounded p-1 me-2">
                                                                                        <img :src=item.image_url
                                                                                            alt=""
                                                                                            class="img-fluid d-block">
                                                                                    </div>
                                                                                    <div>
                                                                                        <h5 class="fs-14 my-1"><a
                                                                                                class="text-reset">{{ item && item.name }}</a></h5>
                                                                                        <span class="text-muted">
                                                                                          Rwf  {{ item && item.details && item.details.sales_price }}
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <h5 class="fs-14 my-1 fw-normal">x {{ item && item.cart_quantity }}</h5>
                                                                            </td>
                                                                            <td>
                                                                                <h5 class="fs-14 my-1 fw-normal">
                                                                                    Rwf {{ item.details.sales_price * item.cart_quantity }}
                                                                                </h5>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- end col -->

                                                <div class="col-xl-4">                                                  

                                                    <div class="card">
                                                        <div class="card-header">
                                                            <div class="d-flex">
                                                                <div class="flex-grow-1">
                                                                    <h5 class="card-title mb-0">Order Summary</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card-body">
                                                            <div class="table-responsive table-card">
                                                                <table class="table table-borderless align-middle mb-0">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="fw-semibold" colspan="2">Sub Total :
                                                                            </td>
                                                                            <td class="fw-semibold text-end">Rwf 359.96</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="2">Shipping Charge :</td>
                                                                            <td class="text-end">Rwf 24.99</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="2">VAT (18%): </td>
                                                                            <td class="text-end">Rwf 18.20</td>
                                                                        </tr>
                                                                        <tr class="table-active">
                                                                            <th colspan="2">Grand Total :</th>
                                                                            <td class="text-end">
                                                                                <span class="fw-semibold">
                                                                                    Rwf 353.15
                                                                                </span>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>

                                                            </div>
                                                        </div>
                                                        <!-- end card body -->
                                                    </div>

                                                    <!-- end card -->
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