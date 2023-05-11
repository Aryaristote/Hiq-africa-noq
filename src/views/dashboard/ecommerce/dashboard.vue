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
                        <div class="mb-4">
                            <div class="col-xl-12">
                                <div class="profile-foreground position-relative mx-n4 mt-n4">
                                    <div class="profile-wid-bg">
                                    </div>
                                </div>
                                <div class="pt-4 mb-4 mb-lg-3 pb-lg-4">
                                    <div class="row g-4">
                            <div class="col-auto">
                                <div class="avatar-lg">
                                    <img src="assets/images/users/avatar-1.jpg" alt="user-img" class="img-thumbnail rounded-circle">
                                </div>
                            </div>
                            <!--end col-->
                            <div class="col">
                                <div class="p-2">
                                    <h3 class="text-white mb-1">Kagarama Convinience Store</h3>
                                    <p class="text-white-75">Donato Supplies Limited</p>
                                    <div class="hstack text-white-50 gap-1">
                                        <div class="me-2"><i class="ri-map-pin-user-line me-1 text-white-75 fs-16 align-middle"></i>
                                            Gorilla Shopping Mall</div>
                                        <div><i class="ri-building-line me-1 text-white-75 fs-16 align-middle"></i>Kagarama
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--end col-->
                            <div class="col-12 col-lg-auto order-last order-lg-0">
                                <div class="row text text-white-50 text-center">
                                    <div class="col-lg-6 col-4">
                                        <div class="p-2">
                                            <h4 class="text-white mb-1">24.3K</h4>
                                            <p class="fs-14 mb-0">Orders</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-4">
                                        <div class="p-2">
                                            <h4 class="text-white mb-1">1.3K</h4>
                                            <p class="fs-14 mb-0">Products</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--end col-->

                        </div>

                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div>
                                                <div class="d-flex">
                                                    <!-- Nav tabs -->
                                                    <ul class="nav nav-pills animation-nav profile-nav gap-2 gap-lg-3 flex-grow-1"
                                                        role="tablist">
                                                        <li class="nav-item">
                                                            <a class="nav-link fs-14 active" data-bs-toggle="tab"
                                                                href="#overview-tab" role="tab">
                                                                <i class="ri-airplay-fill d-inline-block d-md-none"></i>
                                                                <span class="d-none d-md-inline-block">Dashboard</span>
                                                            </a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link fs-14" data-bs-toggle="tab"
                                                                href="#activities" role="tab">
                                                                <i class="ri-list-unordered d-inline-block d-md-none"></i>
                                                                <span class="d-none d-md-inline-block">Orders</span>
                                                            </a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link fs-14" data-bs-toggle="tab" href="#projects"
                                                                role="tab">
                                                                <i class="ri-price-tag-line d-inline-block d-md-none"></i>
                                                                <span class="d-none d-md-inline-block">Profile</span>
                                                            </a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link fs-14" data-bs-toggle="tab" href="#documents"
                                                                role="tab">
                                                                <i class="ri-folder-4-line d-inline-block d-md-none"></i>
                                                                <span class="d-none d-md-inline-block">Sign Out</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <div class="flex-shrink-0">
                                                        <a href="pages-profile-settings.html" class="btn btn-success"><i
                                                                class="ri-add-line align-bottom"></i> Order Stock</a>
                                                    </div>
                                                </div>
                                                <!-- Tab panes -->
                                                <div class="tab-content pt-4 text-muted">
                                                    <div class="tab-pane active" id="overview-tab" role="tabpanel">
                                                        <div class="row">
                                                            <div class="col-xxl-3">
                                                                <div class="card">
                                                                    <div class="card-body">
                                                                        <h5 class="card-title mb-5">Order Status</h5>
                                                                        <div
                                                                            class="progress animated-progress custom-progress progress-label">
                                                                            <div class="progress-bar bg-primary"
                                                                                role="progressbar" style="width: 30%"
                                                                                aria-valuenow="30" aria-valuemin="0"
                                                                                aria-valuemax="100">
                                                                                <div class="label">30%</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>



                                                                <div class="card">
                                                                    <div class="card-body">
                                                                        <h5 class="card-title mb-4">Interests</h5>
                                                                        <div class="d-flex flex-wrap gap-2 fs-15">
                                                                            <a href="javascript:void(0);"
                                                                                class="badge badge-soft-secondary">Milk</a>
                                                                            <a href="javascript:void(0);"
                                                                                class="badge badge-soft-secondary">Mitzing</a>
                                                                            <a href="javascript:void(0);"
                                                                                class="badge badge-soft-secondary">Bread</a>
                                                                            <a href="javascript:void(0);"
                                                                                class="badge badge-soft-secondary">Tissue</a>
                                                                            <a href="javascript:void(0);"
                                                                                class="badge badge-soft-secondary">Water</a>
                                                                            <a href="javascript:void(0);"
                                                                                class="badge badge-soft-secondary">Maize</a>
                                                                            <a href="javascript:void(0);"
                                                                                class="badge badge-soft-secondary">Wheat</a>
                                                                        </div>
                                                                    </div><!-- end card body -->
                                                                </div><!-- end card -->



                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-xxl-9">
                                                                <div class="card">
                                                                    <div class="card-body">
                                                                        <h5 class="card-title mb-3">Dashboard</h5>
                                                                        <div class="row h-100">
                                                                            <div class="col-lg-6 col-md-6">
                                                                                <div class="card">
                                                                                    <div class="card-body">
                                                                                        <div
                                                                                            class="d-flex align-items-center">
                                                                                            <div
                                                                                                class="avatar-sm flex-shrink-0">
                                                                                                <span
                                                                                                    class="avatar-title bg-light text-primary rounded-circle fs-3">
                                                                                                    <i
                                                                                                        class="ri-money-dollar-circle-fill align-middle"></i>
                                                                                                </span>
                                                                                            </div>
                                                                                            <div class="flex-grow-1 ms-3">
                                                                                                <p
                                                                                                    class="text-uppercase fw-semibold fs-12 text-muted mb-1">
                                                                                                    Total Invested</p>
                                                                                                <h4 class=" mb-0">$<span
                                                                                                        class="counter-value"
                                                                                                        data-target="2390.68">2,390.68</span>
                                                                                                </h4>
                                                                                            </div>
                                                                                            <div
                                                                                                class="flex-shrink-0 align-self-end">
                                                                                                <span
                                                                                                    class="badge badge-soft-success"><i
                                                                                                        class="ri-arrow-up-s-fill align-middle me-1"></i>6.24
                                                                                                    %<span>
                                                                                                    </span></span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div><!-- end card body -->
                                                                                </div><!-- end card -->
                                                                            </div><!-- end col -->
                                                                            <div class="col-lg-6 col-md-6">
                                                                                <div class="card">
                                                                                    <div class="card-body">
                                                                                        <div
                                                                                            class="d-flex align-items-center">
                                                                                            <div
                                                                                                class="avatar-sm flex-shrink-0">
                                                                                                <span
                                                                                                    class="avatar-title bg-light text-primary rounded-circle fs-3">
                                                                                                    <i
                                                                                                        class="ri-arrow-up-circle-fill align-middle"></i>
                                                                                                </span>
                                                                                            </div>
                                                                                            <div class="flex-grow-1 ms-3">
                                                                                                <p
                                                                                                    class="text-uppercase fw-semibold fs-12 text-muted mb-1">
                                                                                                    Total Change</p>
                                                                                                <h4 class=" mb-0">$<span
                                                                                                        class="counter-value"
                                                                                                        data-target="19523.25">19,523.25</span>
                                                                                                </h4>
                                                                                            </div>
                                                                                            <div
                                                                                                class="flex-shrink-0 align-self-end">
                                                                                                <span
                                                                                                    class="badge badge-soft-success"><i
                                                                                                        class="ri-arrow-up-s-fill align-middle me-1"></i>3.67
                                                                                                    %<span>
                                                                                                    </span></span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div><!-- end card body -->
                                                                                </div><!-- end card -->
                                                                            </div><!-- end col -->
                                                                            <div class="col-lg-6 col-md-6">
                                                                                <div class="card">
                                                                                    <div class="card-body">
                                                                                        <div
                                                                                            class="d-flex align-items-center">
                                                                                            <div
                                                                                                class="avatar-sm flex-shrink-0">
                                                                                                <span
                                                                                                    class="avatar-title bg-light text-primary rounded-circle fs-3">
                                                                                                    <i
                                                                                                        class="ri-arrow-down-circle-fill align-middle"></i>
                                                                                                </span>
                                                                                            </div>
                                                                                            <div class="flex-grow-1 ms-3">
                                                                                                <p
                                                                                                    class="text-uppercase fw-semibold fs-12 text-muted mb-1">
                                                                                                    Day
                                                                                                    Change</p>
                                                                                                <h4 class=" mb-0">$<span
                                                                                                        class="counter-value"
                                                                                                        data-target="14799.44">14,799.44</span>
                                                                                                </h4>
                                                                                            </div>
                                                                                            <div
                                                                                                class="flex-shrink-0 align-self-end">
                                                                                                <span
                                                                                                    class="badge badge-soft-danger"><i
                                                                                                        class="ri-arrow-down-s-fill align-middle me-1"></i>4.80
                                                                                                    %<span>
                                                                                                    </span></span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div><!-- end card body -->
                                                                                </div><!-- end card -->
                                                                            </div><!-- end col -->
                                                                            <div class="col-lg-6 col-md-6">
                                                                                <div class="card">
                                                                                    <div class="card-body">
                                                                                        <div
                                                                                            class="d-flex align-items-center">
                                                                                            <div
                                                                                                class="avatar-sm flex-shrink-0">
                                                                                                <span
                                                                                                    class="avatar-title bg-light text-primary rounded-circle fs-3">
                                                                                                    <i
                                                                                                        class="ri-arrow-down-circle-fill align-middle"></i>
                                                                                                </span>
                                                                                            </div>
                                                                                            <div class="flex-grow-1 ms-3">
                                                                                                <p
                                                                                                    class="text-uppercase fw-semibold fs-12 text-muted mb-1">
                                                                                                    Day
                                                                                                    Change</p>
                                                                                                <h4 class=" mb-0">$<span
                                                                                                        class="counter-value"
                                                                                                        data-target="14799.44">14,799.44</span>
                                                                                                </h4>
                                                                                            </div>
                                                                                            <div
                                                                                                class="flex-shrink-0 align-self-end">
                                                                                                <span
                                                                                                    class="badge badge-soft-danger"><i
                                                                                                        class="ri-arrow-down-s-fill align-middle me-1"></i>4.80
                                                                                                    %<span>
                                                                                                    </span></span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div><!-- end card body -->
                                                                                </div><!-- end card -->
                                                                            </div><!-- end col -->
                                                                        </div>
                                                                    </div>
                                                                    <!--end card-body-->
                                                                </div><!-- end card -->

                                                                <div class="row">
                                                                    <div class="col-lg-12">
                                                                        <div class="card">
                                                                            <div
                                                                                class="card-header align-items-center d-flex">
                                                                                <h4 class="card-title mb-0  me-2">Recent
                                                                                    Activity</h4>
                                                                                <div class="flex-shrink-0 ms-auto">
                                                                                    <ul class="nav justify-content-end nav-tabs-custom rounded card-header-tabs border-bottom-0"
                                                                                        role="tablist">
                                                                                        <li class="nav-item">
                                                                                            <a class="nav-link active"
                                                                                                data-bs-toggle="tab"
                                                                                                href="#today" role="tab">
                                                                                                Today
                                                                                            </a>
                                                                                        </li>
                                                                                        <li class="nav-item">
                                                                                            <a class="nav-link"
                                                                                                data-bs-toggle="tab"
                                                                                                href="#weekly" role="tab">
                                                                                                Weekly
                                                                                            </a>
                                                                                        </li>
                                                                                        <li class="nav-item">
                                                                                            <a class="nav-link"
                                                                                                data-bs-toggle="tab"
                                                                                                href="#monthly" role="tab">
                                                                                                Monthly
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <div class="card-body">
                                                                                <div class="tab-content text-muted">
                                                                                    <div class="tab-pane active" id="today"
                                                                                        role="tabpanel">
                                                                                        <div class="profile-timeline">
                                                                                            <div class="accordion accordion-flush"
                                                                                                id="todayExample">
                                                                                                <div
                                                                                                    class="accordion-item border-0">
                                                                                                    <div class="accordion-header"
                                                                                                        id="headingOne">
                                                                                                        <a class="accordion-button p-2 shadow-none"
                                                                                                            data-bs-toggle="collapse"
                                                                                                            href="#collapseOne"
                                                                                                            aria-expanded="true">
                                                                                                            <div
                                                                                                                class="d-flex">
                                                                                                                <div
                                                                                                                    class="flex-shrink-0">
                                                                                                                    <img src="assets/images/users/avatar-2.jpg"
                                                                                                                        alt=""
                                                                                                                        class="avatar-xs rounded-circle" />
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    class="flex-grow-1 ms-3">
                                                                                                                    <h6
                                                                                                                        class="fs-14 mb-1">
                                                                                                                        Jacqueline
                                                                                                                        Steve
                                                                                                                    </h6>
                                                                                                                    <small
                                                                                                                        class="text-muted">We
                                                                                                                        has
                                                                                                                        changed
                                                                                                                        2
                                                                                                                        attributes
                                                                                                                        on
                                                                                                                        05:16PM</small>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </a>
                                                                                                    </div>
                                                                                                    <div id="collapseOne"
                                                                                                        class="accordion-collapse collapse show"
                                                                                                        aria-labelledby="headingOne"
                                                                                                        data-bs-parent="#accordionExample">
                                                                                                        <div
                                                                                                            class="accordion-body ms-2 ps-5">
                                                                                                            In an
                                                                                                            awareness
                                                                                                            campaign, it
                                                                                                            is vital for
                                                                                                            people to
                                                                                                            begin
                                                                                                            put 2 and 2
                                                                                                            together and
                                                                                                            begin to
                                                                                                            recognize
                                                                                                            your
                                                                                                            cause. Too
                                                                                                            much or too
                                                                                                            little
                                                                                                            spacing, as
                                                                                                            in the
                                                                                                            example
                                                                                                            below, can
                                                                                                            make
                                                                                                            things
                                                                                                            unpleasant
                                                                                                            for the
                                                                                                            reader. The
                                                                                                            goal is to
                                                                                                            make
                                                                                                            your text as
                                                                                                            comfortable
                                                                                                            to
                                                                                                            read as
                                                                                                            possible. A
                                                                                                            wonderful
                                                                                                            serenity has
                                                                                                            taken
                                                                                                            possession
                                                                                                            of my entire
                                                                                                            soul, like
                                                                                                            these sweet
                                                                                                            mornings of
                                                                                                            spring which
                                                                                                            I
                                                                                                            enjoy with
                                                                                                            my whole
                                                                                                            heart.
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    class="accordion-item border-0">
                                                                                                    <div class="accordion-header"
                                                                                                        id="headingTwo">
                                                                                                        <a class="accordion-button p-2 shadow-none"
                                                                                                            data-bs-toggle="collapse"
                                                                                                            href="#collapseTwo"
                                                                                                            aria-expanded="false">
                                                                                                            <div
                                                                                                                class="d-flex">
                                                                                                                <div
                                                                                                                    class="flex-shrink-0 avatar-xs">
                                                                                                                    <div
                                                                                                                        class="avatar-title bg-light text-success rounded-circle">
                                                                                                                        M
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    class="flex-grow-1 ms-3">
                                                                                                                    <h6
                                                                                                                        class="fs-14 mb-1">
                                                                                                                        Megan
                                                                                                                        Elmore
                                                                                                                    </h6>
                                                                                                                    <small
                                                                                                                        class="text-muted">Adding
                                                                                                                        a
                                                                                                                        new
                                                                                                                        event
                                                                                                                        with
                                                                                                                        attachments
                                                                                                                        -
                                                                                                                        04:45PM</small>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </a>
                                                                                                    </div>
                                                                                                    <div id="collapseTwo"
                                                                                                        class="accordion-collapse collapse show"
                                                                                                        aria-labelledby="headingTwo"
                                                                                                        data-bs-parent="#accordionExample">
                                                                                                        <div
                                                                                                            class="accordion-body ms-2 ps-5">
                                                                                                            <div
                                                                                                                class="row g-2">
                                                                                                                <div
                                                                                                                    class="col-auto">
                                                                                                                    <div
                                                                                                                        class="d-flex border border-dashed p-2 rounded position-relative">
                                                                                                                        <div
                                                                                                                            class="flex-shrink-0">
                                                                                                                            <i
                                                                                                                                class="ri-image-2-line fs-17 text-secondary"></i>
                                                                                                                        </div>
                                                                                                                        <div
                                                                                                                            class="flex-grow-1 ms-2">
                                                                                                                            <h6><a href="javascript:void(0);"
                                                                                                                                    class="stretched-link">Business
                                                                                                                                    Template
                                                                                                                                    -
                                                                                                                                    UI/UX
                                                                                                                                    design</a>
                                                                                                                            </h6>
                                                                                                                            <small>685
                                                                                                                                KB</small>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    class="col-auto">
                                                                                                                    <div
                                                                                                                        class="d-flex border border-dashed p-2 rounded position-relative">
                                                                                                                        <div
                                                                                                                            class="flex-shrink-0">
                                                                                                                            <i
                                                                                                                                class="ri-file-zip-line fs-17 text-secondary"></i>
                                                                                                                        </div>
                                                                                                                        <div
                                                                                                                            class="flex-grow-1 ms-2">
                                                                                                                            <h6><a href="javascript:void(0);"
                                                                                                                                    class="stretched-link">Bank
                                                                                                                                    Management
                                                                                                                                    System
                                                                                                                                    -
                                                                                                                                    PSD</a>
                                                                                                                            </h6>
                                                                                                                            <small>8.78
                                                                                                                                MB</small>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    class="accordion-item border-0">
                                                                                                    <div class="accordion-header"
                                                                                                        id="headingThree">
                                                                                                        <a class="accordion-button p-2 shadow-none"
                                                                                                            data-bs-toggle="collapse"
                                                                                                            href="#collapsethree"
                                                                                                            aria-expanded="false">
                                                                                                            <div
                                                                                                                class="d-flex">
                                                                                                                <div
                                                                                                                    class="flex-shrink-0">
                                                                                                                    <img src="assets/images/users/avatar-5.jpg"
                                                                                                                        alt=""
                                                                                                                        class="avatar-xs rounded-circle" />
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    class="flex-grow-1 ms-3">
                                                                                                                    <h6
                                                                                                                        class="fs-14 mb-1">
                                                                                                                        New
                                                                                                                        ticket
                                                                                                                        received
                                                                                                                    </h6>
                                                                                                                    <small
                                                                                                                        class="text-muted mb-2">User
                                                                                                                        <span
                                                                                                                            class="text-secondary">Erica245</span>
                                                                                                                        submitted
                                                                                                                        a
                                                                                                                        ticket
                                                                                                                        -
                                                                                                                        02:33PM</small>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </a>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    class="accordion-item border-0">
                                                                                                    <div class="accordion-header"
                                                                                                        id="headingFour">
                                                                                                        <a class="accordion-button p-2 shadow-none"
                                                                                                            data-bs-toggle="collapse"
                                                                                                            href="#collapseFour"
                                                                                                            aria-expanded="true">
                                                                                                            <div
                                                                                                                class="d-flex">
                                                                                                                <div
                                                                                                                    class="flex-shrink-0 avatar-xs">
                                                                                                                    <div
                                                                                                                        class="avatar-title bg-light text-muted rounded-circle">
                                                                                                                        <i
                                                                                                                            class="ri-user-3-fill"></i>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    class="flex-grow-1 ms-3">
                                                                                                                    <h6
                                                                                                                        class="fs-14 mb-1">
                                                                                                                        Nancy
                                                                                                                        Martino
                                                                                                                    </h6>
                                                                                                                    <small
                                                                                                                        class="text-muted">Commented
                                                                                                                        on
                                                                                                                        12:57PM</small>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </a>
                                                                                                    </div>
                                                                                                    <div id="collapseFour"
                                                                                                        class="accordion-collapse collapse show"
                                                                                                        aria-labelledby="headingFour"
                                                                                                        data-bs-parent="#accordionExample">
                                                                                                        <div
                                                                                                            class="accordion-body ms-2 ps-5 fst-italic">
                                                                                                            " A
                                                                                                            wonderful
                                                                                                            serenity has
                                                                                                            taken
                                                                                                            possession
                                                                                                            of my
                                                                                                            entire soul,
                                                                                                            like these
                                                                                                            sweet
                                                                                                            mornings of
                                                                                                            spring
                                                                                                            which I
                                                                                                            enjoy with
                                                                                                            my whole
                                                                                                            heart. Each
                                                                                                            design is a
                                                                                                            new,
                                                                                                            unique piece
                                                                                                            of art
                                                                                                            birthed
                                                                                                            into this
                                                                                                            world, and
                                                                                                            while
                                                                                                            you have the
                                                                                                            opportunity
                                                                                                            to
                                                                                                            be creative
                                                                                                            and make
                                                                                                            your
                                                                                                            own style
                                                                                                            choices. "
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    class="accordion-item border-0">
                                                                                                    <div class="accordion-header"
                                                                                                        id="headingFive">
                                                                                                        <a class="accordion-button p-2 shadow-none"
                                                                                                            data-bs-toggle="collapse"
                                                                                                            href="#collapseFive"
                                                                                                            aria-expanded="true">
                                                                                                            <div
                                                                                                                class="d-flex">
                                                                                                                <div
                                                                                                                    class="flex-shrink-0">
                                                                                                                    <img src="assets/images/users/avatar-7.jpg"
                                                                                                                        alt=""
                                                                                                                        class="avatar-xs rounded-circle" />
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    class="flex-grow-1 ms-3">
                                                                                                                    <h6
                                                                                                                        class="fs-14 mb-1">
                                                                                                                        Lewis
                                                                                                                        Arnold
                                                                                                                    </h6>
                                                                                                                    <small
                                                                                                                        class="text-muted">Create
                                                                                                                        new
                                                                                                                        project
                                                                                                                        buildng
                                                                                                                        product
                                                                                                                        -
                                                                                                                        10:05AM</small>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </a>
                                                                                                    </div>
                                                                                                    <div id="collapseFive"
                                                                                                        class="accordion-collapse collapse show"
                                                                                                        aria-labelledby="headingFive"
                                                                                                        data-bs-parent="#accordionExample">
                                                                                                        <div
                                                                                                            class="accordion-body ms-2 ps-5">
                                                                                                            <p
                                                                                                                class="text-muted mb-2">
                                                                                                                Every
                                                                                                                team
                                                                                                                project
                                                                                                                can
                                                                                                                have a
                                                                                                                HiQ
                                                                                                                Africa.
                                                                                                                Use the
                                                                                                                HiQ
                                                                                                                Africa
                                                                                                                to share
                                                                                                                information
                                                                                                                with
                                                                                                                your
                                                                                                                team to
                                                                                                                understand
                                                                                                                and
                                                                                                                contribute
                                                                                                                to your
                                                                                                                project.
                                                                                                            </p>
                                                                                                            <div
                                                                                                                class="avatar-group">
                                                                                                                <a href="javascript: void(0);"
                                                                                                                    class="avatar-group-item"
                                                                                                                    data-bs-toggle="tooltip"
                                                                                                                    data-bs-trigger="hover"
                                                                                                                    data-bs-placement="top"
                                                                                                                    title=""
                                                                                                                    data-bs-original-title="Christi">
                                                                                                                    <img src="assets/images/users/avatar-4.jpg"
                                                                                                                        alt=""
                                                                                                                        class="rounded-circle avatar-xs">
                                                                                                                </a>
                                                                                                                <a href="javascript: void(0);"
                                                                                                                    class="avatar-group-item"
                                                                                                                    data-bs-toggle="tooltip"
                                                                                                                    data-bs-trigger="hover"
                                                                                                                    data-bs-placement="top"
                                                                                                                    title=""
                                                                                                                    data-bs-original-title="Frank Hook">
                                                                                                                    <img src="assets/images/users/avatar-3.jpg"
                                                                                                                        alt=""
                                                                                                                        class="rounded-circle avatar-xs">
                                                                                                                </a>
                                                                                                                <a href="javascript: void(0);"
                                                                                                                    class="avatar-group-item"
                                                                                                                    data-bs-toggle="tooltip"
                                                                                                                    data-bs-trigger="hover"
                                                                                                                    data-bs-placement="top"
                                                                                                                    title=""
                                                                                                                    data-bs-original-title=" Ruby">
                                                                                                                    <div
                                                                                                                        class="avatar-xs">
                                                                                                                        <div
                                                                                                                            class="avatar-title rounded-circle bg-light text-primary">
                                                                                                                            R
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </a>
                                                                                                                <a href="javascript: void(0);"
                                                                                                                    class="avatar-group-item"
                                                                                                                    data-bs-toggle="tooltip"
                                                                                                                    data-bs-trigger="hover"
                                                                                                                    data-bs-placement="top"
                                                                                                                    title=""
                                                                                                                    data-bs-original-title="more">
                                                                                                                    <div
                                                                                                                        class="avatar-xs">
                                                                                                                        <div
                                                                                                                            class="avatar-title rounded-circle">
                                                                                                                            2+
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </a>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <!--end accordion-->
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="tab-pane" id="weekly"
                                                                                        role="tabpanel">
                                                                                        <div class="profile-timeline">
                                                                                            <div class="accordion accordion-flush"
                                                                                                id="weeklyExample">
                                                                                                <div
                                                                                                    class="accordion-item border-0">
                                                                                                    <div class="accordion-header"
                                                                                                        id="heading6">
                                                                                                        <a class="accordion-button p-2 shadow-none"
                                                                                                            data-bs-toggle="collapse"
                                                                                                            href="#collapse6"
                                                                                                            aria-expanded="true">
                                                                                                            <div
                                                                                                                class="d-flex">
                                                                                                                <div
                                                                                                                    class="flex-shrink-0">
                                                                                                                    <img src="assets/images/users/avatar-3.jpg"
                                                                                                                        alt=""
                                                                                                                        class="avatar-xs rounded-circle" />
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    class="flex-grow-1 ms-3">
                                                                                                                    <h6
                                                                                                                        class="fs-14 mb-1">
                                                                                                                        Joseph
                                                                                                                        Parker
                                                                                                                    </h6>
                                                                                                                    <small
                                                                                                                        class="text-muted">New
                                                                                                                        people
                                                                                                                        joined
                                                                                                                        with
                                                                                                                        our
                                                                                                                        company
                                                                                                                        -
                                                                                                                        Yesterday</small>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </a>
                                                                                                    </div>
                                                                                                    <div id="collapse6"
                                                                                                        class="accordion-collapse collapse show"
                                                                                                        aria-labelledby="heading6"
                                                                                                        data-bs-parent="#accordionExample">
                                                                                                        <div
                                                                                                            class="accordion-body ms-2 ps-5">
                                                                                                            It makes a
                                                                                                            statement,
                                                                                                            it’s
                                                                                                            impressive
                                                                                                            graphic
                                                                                                            design.
                                                                                                            Increase or
                                                                                                            decrease the
                                                                                                            letter
                                                                                                            spacing
                                                                                                            depending on
                                                                                                            the
                                                                                                            situation
                                                                                                            and try, try
                                                                                                            again until
                                                                                                            it looks
                                                                                                            right,
                                                                                                            and each
                                                                                                            letter has
                                                                                                            the
                                                                                                            perfect spot
                                                                                                            of its own.
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    class="accordion-item border-0">
                                                                                                    <div class="accordion-header"
                                                                                                        id="heading7">
                                                                                                        <a class="accordion-button p-2 shadow-none"
                                                                                                            data-bs-toggle="collapse"
                                                                                                            href="#collapse7"
                                                                                                            aria-expanded="false">
                                                                                                            <div
                                                                                                                class="d-flex">
                                                                                                                <div
                                                                                                                    class="avatar-xs">
                                                                                                                    <div
                                                                                                                        class="avatar-title rounded-circle bg-light text-danger">
                                                                                                                        <i
                                                                                                                            class="ri-shopping-bag-line"></i>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    class="flex-grow-1 ms-3">
                                                                                                                    <h6
                                                                                                                        class="fs-14 mb-1">
                                                                                                                        Your
                                                                                                                        order
                                                                                                                        is
                                                                                                                        placed
                                                                                                                        <span
                                                                                                                            class="badge bg-soft-success text-success align-middle">Completed</span>
                                                                                                                    </h6>
                                                                                                                    <small
                                                                                                                        class="text-muted">These
                                                                                                                        customers
                                                                                                                        can
                                                                                                                        rest
                                                                                                                        assured
                                                                                                                        their
                                                                                                                        order
                                                                                                                        has
                                                                                                                        been
                                                                                                                        placed
                                                                                                                        -
                                                                                                                        1
                                                                                                                        week
                                                                                                                        Ago</small>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </a>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    class="accordion-item border-0">
                                                                                                    <div class="accordion-header"
                                                                                                        id="heading8">
                                                                                                        <a class="accordion-button p-2 shadow-none"
                                                                                                            data-bs-toggle="collapse"
                                                                                                            href="#collapse8"
                                                                                                            aria-expanded="true">
                                                                                                            <div
                                                                                                                class="d-flex">
                                                                                                                <div
                                                                                                                    class="flex-shrink-0 avatar-xs">
                                                                                                                    <div
                                                                                                                        class="avatar-title bg-light text-success rounded-circle">
                                                                                                                        <i
                                                                                                                            class="ri-home-3-line"></i>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    class="flex-grow-1 ms-3">
                                                                                                                    <h6
                                                                                                                        class="fs-14 mb-1">
                                                                                                                        HiQ
                                                                                                                        Africa
                                                                                                                        admin
                                                                                                                        dashboard
                                                                                                                        templates
                                                                                                                        layout
                                                                                                                        upload
                                                                                                                    </h6>
                                                                                                                    <small
                                                                                                                        class="text-muted">We
                                                                                                                        talked
                                                                                                                        about
                                                                                                                        a
                                                                                                                        project
                                                                                                                        on
                                                                                                                        linkedin
                                                                                                                        -
                                                                                                                        1
                                                                                                                        week
                                                                                                                        Ago</small>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </a>
                                                                                                    </div>
                                                                                                    <div id="collapse8"
                                                                                                        class="accordion-collapse collapse show"
                                                                                                        aria-labelledby="heading8"
                                                                                                        data-bs-parent="#accordionExample">
                                                                                                        <div
                                                                                                            class="accordion-body ms-2 ps-5 fst-italic">
                                                                                                            Powerful,
                                                                                                            clean &
                                                                                                            modern
                                                                                                            responsive
                                                                                                            bootstrap 5
                                                                                                            admin
                                                                                                            template.
                                                                                                            The maximum
                                                                                                            file
                                                                                                            size for
                                                                                                            uploads in
                                                                                                            this
                                                                                                            demo :
                                                                                                            <div
                                                                                                                class="row mt-2">
                                                                                                                <div
                                                                                                                    class="col-xxl-6">
                                                                                                                    <div
                                                                                                                        class="row border border-dashed gx-2 p-2">
                                                                                                                        <div
                                                                                                                            class="col-3">
                                                                                                                            <img src="assets/images/small/img-3.jpg"
                                                                                                                                alt=""
                                                                                                                                class="img-fluid rounded" />
                                                                                                                        </div>
                                                                                                                        <!--end col-->
                                                                                                                        <div
                                                                                                                            class="col-3">
                                                                                                                            <img src="assets/images/small/img-5.jpg"
                                                                                                                                alt=""
                                                                                                                                class="img-fluid rounded" />
                                                                                                                        </div>
                                                                                                                        <!--end col-->
                                                                                                                        <div
                                                                                                                            class="col-3">
                                                                                                                            <img src="assets/images/small/img-7.jpg"
                                                                                                                                alt=""
                                                                                                                                class="img-fluid rounded" />
                                                                                                                        </div>
                                                                                                                        <!--end col-->
                                                                                                                        <div
                                                                                                                            class="col-3">
                                                                                                                            <img src="assets/images/small/img-9.jpg"
                                                                                                                                alt=""
                                                                                                                                class="img-fluid rounded" />
                                                                                                                        </div>
                                                                                                                        <!--end col-->
                                                                                                                    </div>
                                                                                                                    <!--end row-->
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    class="accordion-item border-0">
                                                                                                    <div class="accordion-header"
                                                                                                        id="heading9">
                                                                                                        <a class="accordion-button p-2 shadow-none"
                                                                                                            data-bs-toggle="collapse"
                                                                                                            href="#collapse9"
                                                                                                            aria-expanded="false">
                                                                                                            <div
                                                                                                                class="d-flex">
                                                                                                                <div
                                                                                                                    class="flex-shrink-0">
                                                                                                                    <img src="assets/images/users/avatar-6.jpg"
                                                                                                                        alt=""
                                                                                                                        class="avatar-xs rounded-circle" />
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    class="flex-grow-1 ms-3">
                                                                                                                    <h6
                                                                                                                        class="fs-14 mb-1">
                                                                                                                        New
                                                                                                                        ticket
                                                                                                                        created
                                                                                                                        <span
                                                                                                                            class="badge bg-soft-info text-info align-middle">Inprogress</span>
                                                                                                                    </h6>
                                                                                                                    <small
                                                                                                                        class="text-muted mb-2">User
                                                                                                                        <span
                                                                                                                            class="text-secondary">Jack365</span>
                                                                                                                        submitted
                                                                                                                        a
                                                                                                                        ticket
                                                                                                                        -
                                                                                                                        2
                                                                                                                        week
                                                                                                                        Ago</small>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </a>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    class="accordion-item border-0">
                                                                                                    <div class="accordion-header"
                                                                                                        id="heading10">
                                                                                                        <a class="accordion-button p-2 shadow-none"
                                                                                                            data-bs-toggle="collapse"
                                                                                                            href="#collapse10"
                                                                                                            aria-expanded="true">
                                                                                                            <div
                                                                                                                class="d-flex">
                                                                                                                <div
                                                                                                                    class="flex-shrink-0">
                                                                                                                    <img src="assets/images/users/avatar-5.jpg"
                                                                                                                        alt=""
                                                                                                                        class="avatar-xs rounded-circle" />
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    class="flex-grow-1 ms-3">
                                                                                                                    <h6
                                                                                                                        class="fs-14 mb-1">
                                                                                                                        Jennifer
                                                                                                                        Carter
                                                                                                                    </h6>
                                                                                                                    <small
                                                                                                                        class="text-muted">Commented
                                                                                                                        -
                                                                                                                        4
                                                                                                                        week
                                                                                                                        Ago</small>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </a>
                                                                                                    </div>
                                                                                                    <div id="collapse10"
                                                                                                        class="accordion-collapse collapse show"
                                                                                                        aria-labelledby="heading10"
                                                                                                        data-bs-parent="#accordionExample">
                                                                                                        <div
                                                                                                            class="accordion-body ms-2 ps-5">
                                                                                                            <p
                                                                                                                class="text-muted fst-italic mb-2">
                                                                                                                " This
                                                                                                                is an
                                                                                                                awesome
                                                                                                                admin
                                                                                                                dashboard
                                                                                                                template.
                                                                                                                It is
                                                                                                                extremely
                                                                                                                well
                                                                                                                structured
                                                                                                                and uses
                                                                                                                state of
                                                                                                                the art
                                                                                                                components
                                                                                                                (e.g.
                                                                                                                one of
                                                                                                                the only
                                                                                                                templates
                                                                                                                using
                                                                                                                boostrap
                                                                                                                5.1.3 so
                                                                                                                far).
                                                                                                                I
                                                                                                                integrated
                                                                                                                it into
                                                                                                                a
                                                                                                                Rails 6
                                                                                                                project.
                                                                                                                Needs
                                                                                                                manual
                                                                                                                integration
                                                                                                                work
                                                                                                                of
                                                                                                                course
                                                                                                                but the
                                                                                                                template
                                                                                                                structure
                                                                                                                made
                                                                                                                it easy.
                                                                                                                "</p>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <!--end accordion-->
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="tab-pane" id="monthly"
                                                                                        role="tabpanel">
                                                                                        <div class="profile-timeline">
                                                                                            <div class="accordion accordion-flush"
                                                                                                id="monthlyExample">
                                                                                                <div
                                                                                                    class="accordion-item border-0">
                                                                                                    <div class="accordion-header"
                                                                                                        id="heading11">
                                                                                                        <a class="accordion-button p-2 shadow-none"
                                                                                                            data-bs-toggle="collapse"
                                                                                                            href="#collapse11"
                                                                                                            aria-expanded="false">
                                                                                                            <div
                                                                                                                class="d-flex">
                                                                                                                <div
                                                                                                                    class="flex-shrink-0 avatar-xs">
                                                                                                                    <div
                                                                                                                        class="avatar-title bg-light text-success rounded-circle">
                                                                                                                        M
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    class="flex-grow-1 ms-3">
                                                                                                                    <h6
                                                                                                                        class="fs-14 mb-1">
                                                                                                                        Megan
                                                                                                                        Elmore
                                                                                                                    </h6>
                                                                                                                    <small
                                                                                                                        class="text-muted">Adding
                                                                                                                        a
                                                                                                                        new
                                                                                                                        event
                                                                                                                        with
                                                                                                                        attachments
                                                                                                                        -
                                                                                                                        1
                                                                                                                        month
                                                                                                                        Ago.</small>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </a>
                                                                                                    </div>
                                                                                                    <div id="collapse11"
                                                                                                        class="accordion-collapse collapse show"
                                                                                                        aria-labelledby="heading11"
                                                                                                        data-bs-parent="#accordionExample">
                                                                                                        <div
                                                                                                            class="accordion-body ms-2 ps-5">
                                                                                                            <div
                                                                                                                class="row g-2">
                                                                                                                <div
                                                                                                                    class="col-auto">
                                                                                                                    <div
                                                                                                                        class="d-flex border border-dashed p-2 rounded position-relative">
                                                                                                                        <div
                                                                                                                            class="flex-shrink-0">
                                                                                                                            <i
                                                                                                                                class="ri-image-2-line fs-17 text-secondary"></i>
                                                                                                                        </div>
                                                                                                                        <div
                                                                                                                            class="flex-grow-1 ms-2">
                                                                                                                            <h6><a href="javascript:void(0);"
                                                                                                                                    class="stretched-link">Business
                                                                                                                                    Template
                                                                                                                                    -
                                                                                                                                    UI/UX
                                                                                                                                    design</a>
                                                                                                                            </h6>
                                                                                                                            <small>685
                                                                                                                                KB</small>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    class="col-auto">
                                                                                                                    <div
                                                                                                                        class="d-flex border border-dashed p-2 rounded position-relative">
                                                                                                                        <div
                                                                                                                            class="flex-shrink-0">
                                                                                                                            <i
                                                                                                                                class="ri-file-zip-line fs-17 text-secondary"></i>
                                                                                                                        </div>
                                                                                                                        <div
                                                                                                                            class="flex-grow-1 ms-2">
                                                                                                                            <h6><a href="javascript:void(0);"
                                                                                                                                    class="stretched-link">Bank
                                                                                                                                    Management
                                                                                                                                    System
                                                                                                                                    -
                                                                                                                                    PSD</a>
                                                                                                                            </h6>
                                                                                                                            <small>8.78
                                                                                                                                MB</small>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    class="col-auto">
                                                                                                                    <div
                                                                                                                        class="d-flex border border-dashed p-2 rounded position-relative">
                                                                                                                        <div
                                                                                                                            class="flex-shrink-0">
                                                                                                                            <i
                                                                                                                                class="ri-file-zip-line fs-17 text-secondary"></i>
                                                                                                                        </div>
                                                                                                                        <div
                                                                                                                            class="flex-grow-1 ms-2">
                                                                                                                            <h6><a href="javascript:void(0);"
                                                                                                                                    class="stretched-link">Bank
                                                                                                                                    Management
                                                                                                                                    System
                                                                                                                                    -
                                                                                                                                    PSD</a>
                                                                                                                            </h6>
                                                                                                                            <small>8.78
                                                                                                                                MB</small>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    class="accordion-item border-0">
                                                                                                    <div class="accordion-header"
                                                                                                        id="heading12">
                                                                                                        <a class="accordion-button p-2 shadow-none"
                                                                                                            data-bs-toggle="collapse"
                                                                                                            href="#collapse12"
                                                                                                            aria-expanded="true">
                                                                                                            <div
                                                                                                                class="d-flex">
                                                                                                                <div
                                                                                                                    class="flex-shrink-0">
                                                                                                                    <img src="assets/images/users/avatar-2.jpg"
                                                                                                                        alt=""
                                                                                                                        class="avatar-xs rounded-circle" />
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    class="flex-grow-1 ms-3">
                                                                                                                    <h6
                                                                                                                        class="fs-14 mb-1">
                                                                                                                        Jacqueline
                                                                                                                        Steve
                                                                                                                    </h6>
                                                                                                                    <small
                                                                                                                        class="text-muted">We
                                                                                                                        has
                                                                                                                        changed
                                                                                                                        2
                                                                                                                        attributes
                                                                                                                        on
                                                                                                                        3
                                                                                                                        month
                                                                                                                        Ago</small>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </a>
                                                                                                    </div>
                                                                                                    <div id="collapse12"
                                                                                                        class="accordion-collapse collapse show"
                                                                                                        aria-labelledby="heading12"
                                                                                                        data-bs-parent="#accordionExample">
                                                                                                        <div
                                                                                                            class="accordion-body ms-2 ps-5">
                                                                                                            In an
                                                                                                            awareness
                                                                                                            campaign, it
                                                                                                            is vital for
                                                                                                            people to
                                                                                                            begin
                                                                                                            put 2 and 2
                                                                                                            together and
                                                                                                            begin to
                                                                                                            recognize
                                                                                                            your
                                                                                                            cause. Too
                                                                                                            much or too
                                                                                                            little
                                                                                                            spacing, as
                                                                                                            in the
                                                                                                            example
                                                                                                            below, can
                                                                                                            make
                                                                                                            things
                                                                                                            unpleasant
                                                                                                            for the
                                                                                                            reader. The
                                                                                                            goal is to
                                                                                                            make
                                                                                                            your text as
                                                                                                            comfortable
                                                                                                            to
                                                                                                            read as
                                                                                                            possible. A
                                                                                                            wonderful
                                                                                                            serenity has
                                                                                                            taken
                                                                                                            possession
                                                                                                            of my entire
                                                                                                            soul, like
                                                                                                            these sweet
                                                                                                            mornings of
                                                                                                            spring which
                                                                                                            I
                                                                                                            enjoy with
                                                                                                            my whole
                                                                                                            heart.
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    class="accordion-item border-0">
                                                                                                    <div class="accordion-header"
                                                                                                        id="heading13">
                                                                                                        <a class="accordion-button p-2 shadow-none"
                                                                                                            data-bs-toggle="collapse"
                                                                                                            href="#collapse13"
                                                                                                            aria-expanded="false">
                                                                                                            <div
                                                                                                                class="d-flex">
                                                                                                                <div
                                                                                                                    class="flex-shrink-0">
                                                                                                                    <img src="assets/images/users/avatar-5.jpg"
                                                                                                                        alt=""
                                                                                                                        class="avatar-xs rounded-circle" />
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    class="flex-grow-1 ms-3">
                                                                                                                    <h6
                                                                                                                        class="fs-14 mb-1">
                                                                                                                        New
                                                                                                                        ticket
                                                                                                                        received
                                                                                                                    </h6>
                                                                                                                    <small
                                                                                                                        class="text-muted mb-2">User
                                                                                                                        <span
                                                                                                                            class="text-secondary">Erica245</span>
                                                                                                                        submitted
                                                                                                                        a
                                                                                                                        ticket
                                                                                                                        -
                                                                                                                        5
                                                                                                                        month
                                                                                                                        Ago</small>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </a>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    class="accordion-item border-0">
                                                                                                    <div class="accordion-header"
                                                                                                        id="heading14">
                                                                                                        <a class="accordion-button p-2 shadow-none"
                                                                                                            data-bs-toggle="collapse"
                                                                                                            href="#collapse14"
                                                                                                            aria-expanded="true">
                                                                                                            <div
                                                                                                                class="d-flex">
                                                                                                                <div
                                                                                                                    class="flex-shrink-0 avatar-xs">
                                                                                                                    <div
                                                                                                                        class="avatar-title bg-light text-muted rounded-circle">
                                                                                                                        <i
                                                                                                                            class="ri-user-3-fill"></i>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    class="flex-grow-1 ms-3">
                                                                                                                    <h6
                                                                                                                        class="fs-14 mb-1">
                                                                                                                        Nancy
                                                                                                                        Martino
                                                                                                                    </h6>
                                                                                                                    <small
                                                                                                                        class="text-muted">Commented
                                                                                                                        on
                                                                                                                        24
                                                                                                                        Nov,
                                                                                                                        2021.</small>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </a>
                                                                                                    </div>
                                                                                                    <div id="collapse14"
                                                                                                        class="accordion-collapse collapse show"
                                                                                                        aria-labelledby="heading14"
                                                                                                        data-bs-parent="#accordionExample">
                                                                                                        <div
                                                                                                            class="accordion-body ms-2 ps-5 fst-italic">
                                                                                                            " A
                                                                                                            wonderful
                                                                                                            serenity has
                                                                                                            taken
                                                                                                            possession
                                                                                                            of my
                                                                                                            entire soul,
                                                                                                            like these
                                                                                                            sweet
                                                                                                            mornings of
                                                                                                            spring
                                                                                                            which I
                                                                                                            enjoy with
                                                                                                            my whole
                                                                                                            heart. Each
                                                                                                            design is a
                                                                                                            new,
                                                                                                            unique piece
                                                                                                            of art
                                                                                                            birthed
                                                                                                            into this
                                                                                                            world, and
                                                                                                            while
                                                                                                            you have the
                                                                                                            opportunity
                                                                                                            to
                                                                                                            be creative
                                                                                                            and make
                                                                                                            your
                                                                                                            own style
                                                                                                            choices. "
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    class="accordion-item border-0">
                                                                                                    <div class="accordion-header"
                                                                                                        id="heading15">
                                                                                                        <a class="accordion-button p-2 shadow-none"
                                                                                                            data-bs-toggle="collapse"
                                                                                                            href="#collapse15"
                                                                                                            aria-expanded="true">
                                                                                                            <div
                                                                                                                class="d-flex">
                                                                                                                <div
                                                                                                                    class="flex-shrink-0">
                                                                                                                    <img src="assets/images/users/avatar-7.jpg"
                                                                                                                        alt=""
                                                                                                                        class="avatar-xs rounded-circle" />
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    class="flex-grow-1 ms-3">
                                                                                                                    <h6
                                                                                                                        class="fs-14 mb-1">
                                                                                                                        Lewis
                                                                                                                        Arnold
                                                                                                                    </h6>
                                                                                                                    <small
                                                                                                                        class="text-muted">Create
                                                                                                                        new
                                                                                                                        project
                                                                                                                        buildng
                                                                                                                        product
                                                                                                                        -
                                                                                                                        8
                                                                                                                        month
                                                                                                                        Ago</small>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </a>
                                                                                                    </div>
                                                                                                    <div id="collapse15"
                                                                                                        class="accordion-collapse collapse show"
                                                                                                        aria-labelledby="heading15"
                                                                                                        data-bs-parent="#accordionExample">
                                                                                                        <div
                                                                                                            class="accordion-body ms-2 ps-5">
                                                                                                            <p
                                                                                                                class="text-muted mb-2">
                                                                                                                Every
                                                                                                                team
                                                                                                                project
                                                                                                                can
                                                                                                                have a
                                                                                                                HiQ
                                                                                                                Africa.
                                                                                                                Use the
                                                                                                                HiQ
                                                                                                                Africa
                                                                                                                to share
                                                                                                                information
                                                                                                                with
                                                                                                                your
                                                                                                                team to
                                                                                                                understand
                                                                                                                and
                                                                                                                contribute
                                                                                                                to your
                                                                                                                project.
                                                                                                            </p>
                                                                                                            <div
                                                                                                                class="avatar-group">
                                                                                                                <a href="javascript: void(0);"
                                                                                                                    class="avatar-group-item"
                                                                                                                    data-bs-toggle="tooltip"
                                                                                                                    data-bs-trigger="hover"
                                                                                                                    data-bs-placement="top"
                                                                                                                    title=""
                                                                                                                    data-bs-original-title="Christi">
                                                                                                                    <img src="assets/images/users/avatar-4.jpg"
                                                                                                                        alt=""
                                                                                                                        class="rounded-circle avatar-xs">
                                                                                                                </a>
                                                                                                                <a href="javascript: void(0);"
                                                                                                                    class="avatar-group-item"
                                                                                                                    data-bs-toggle="tooltip"
                                                                                                                    data-bs-trigger="hover"
                                                                                                                    data-bs-placement="top"
                                                                                                                    title=""
                                                                                                                    data-bs-original-title="Frank Hook">
                                                                                                                    <img src="assets/images/users/avatar-3.jpg"
                                                                                                                        alt=""
                                                                                                                        class="rounded-circle avatar-xs">
                                                                                                                </a>
                                                                                                                <a href="javascript: void(0);"
                                                                                                                    class="avatar-group-item"
                                                                                                                    data-bs-toggle="tooltip"
                                                                                                                    data-bs-trigger="hover"
                                                                                                                    data-bs-placement="top"
                                                                                                                    title=""
                                                                                                                    data-bs-original-title=" Ruby">
                                                                                                                    <div
                                                                                                                        class="avatar-xs">
                                                                                                                        <div
                                                                                                                            class="avatar-title rounded-circle bg-light text-primary">
                                                                                                                            R
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </a>
                                                                                                                <a href="javascript: void(0);"
                                                                                                                    class="avatar-group-item"
                                                                                                                    data-bs-toggle="tooltip"
                                                                                                                    data-bs-trigger="hover"
                                                                                                                    data-bs-placement="top"
                                                                                                                    title=""
                                                                                                                    data-bs-original-title="more">
                                                                                                                    <div
                                                                                                                        class="avatar-xs">
                                                                                                                        <div
                                                                                                                            class="avatar-title rounded-circle">
                                                                                                                            2+
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </a>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <!--end accordion-->
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div><!-- end card body -->
                                                                        </div><!-- end card -->
                                                                    </div><!-- end col -->
                                                                </div><!-- end row -->

                                                            </div>
                                                            <!--end col-->
                                                        </div>
                                                        <!--end row-->
                                                    </div>
                                                    <div class="tab-pane fade" id="activities" role="tabpanel">
                                                        <div class="card" id="orderList">
                                                            <div class="card-header  border-0">
                                                                <div class="d-flex align-items-center">
                                                                    <h5 class="card-title mb-0 flex-grow-1">Order
                                                                        History</h5>
                                                                    <div class="flex-shrink-0">
                                                                        <div class="d-flex gap-1 flex-wrap">
                                                                            <button type="button"
                                                                                class="btn btn-primary add-btn"
                                                                                data-bs-toggle="modal" id="create-btn"
                                                                                data-bs-target="#showModal"><i
                                                                                    class="ri-add-line align-bottom me-1"></i>
                                                                                Create
                                                                                Order</button>
                                                                            <button type="button"
                                                                                class="btn btn-soft-success"><i
                                                                                    class="ri-file-download-line align-bottom me-1"></i>
                                                                                Import</button>
                                                                            <button class="btn btn-soft-danger"
                                                                                id="remove-actions"
                                                                                onclick="deleteMultiple()"><i
                                                                                    class="ri-delete-bin-2-line"></i></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="card-body border border-dashed border-end-0 border-start-0">
                                                                <form>
                                                                    <div class="row g-3">
                                                                        <div class="col-xxl-5 col-sm-6">
                                                                            <div class="search-box">
                                                                                <input type="text"
                                                                                    class="form-control search"
                                                                                    placeholder="Search for order ID, customer, order status or something...">
                                                                                <i class="ri-search-line search-icon"></i>
                                                                            </div>
                                                                        </div>
                                                                        <!--end col-->
                                                                    </div>
                                                                    <!--end row-->
                                                                </form>
                                                            </div>
                                                            <div class="card-body pt-0">
                                                                <div>
                                                                    <ul class="nav nav-tabs nav-tabs-custom nav-primary mb-3"
                                                                        role="tablist">
                                                                        <li class="nav-item" role="presentation">
                                                                            <a class="nav-link active All py-3"
                                                                                data-bs-toggle="tab" id="All" href="#home1"
                                                                                role="tab" aria-selected="true">
                                                                                <i
                                                                                    class="ri-store-2-fill me-1 align-bottom"></i>
                                                                                All Orders
                                                                            </a>
                                                                        </li>
                                                                        <li class="nav-item" role="presentation">
                                                                            <a class="nav-link py-3 Delivered"
                                                                                data-bs-toggle="tab" id="Delivered"
                                                                                href="#delivered" role="tab"
                                                                                aria-selected="false" tabindex="-1">
                                                                                <i
                                                                                    class="ri-checkbox-circle-line me-1 align-bottom"></i>
                                                                                Delivered
                                                                            </a>
                                                                        </li>
                                                                        <li class="nav-item" role="presentation">
                                                                            <a class="nav-link py-3 Pickups"
                                                                                data-bs-toggle="tab" id="Pickups"
                                                                                href="#pickups" role="tab"
                                                                                aria-selected="false" tabindex="-1">
                                                                                <i
                                                                                    class="ri-truck-line me-1 align-bottom"></i>
                                                                                Pickups <span
                                                                                    class="badge bg-secondary align-middle ms-1">2</span>
                                                                            </a>
                                                                        </li>
                                                                        <li class="nav-item" role="presentation">
                                                                            <a class="nav-link py-3 Returns"
                                                                                data-bs-toggle="tab" id="Returns"
                                                                                href="#returns" role="tab"
                                                                                aria-selected="false" tabindex="-1">
                                                                                <i
                                                                                    class="ri-arrow-left-right-fill me-1 align-bottom"></i>
                                                                                Returns
                                                                            </a>
                                                                        </li>
                                                                        <li class="nav-item" role="presentation">
                                                                            <a class="nav-link py-3 Cancelled"
                                                                                data-bs-toggle="tab" id="Cancelled"
                                                                                href="#cancelled" role="tab"
                                                                                aria-selected="false" tabindex="-1">
                                                                                <i
                                                                                    class="ri-close-circle-line me-1 align-bottom"></i>
                                                                                Cancelled
                                                                            </a>
                                                                        </li>
                                                                    </ul>

                                                                    <div class="table-responsive table-card mb-1">
                                                                        <table class="table table-nowrap align-middle"
                                                                            id="orderTable">
                                                                            <thead class="text-muted table-light">
                                                                                <tr class="text-uppercase">
                                                                                    <th scope="col" style="width: 25px;">
                                                                                        <div class="form-check">
                                                                                            <input class="form-check-input"
                                                                                                type="checkbox"
                                                                                                id="checkAll"
                                                                                                value="option">
                                                                                        </div>
                                                                                    </th>
                                                                                    <th class="sort" data-sort="id">
                                                                                        Order ID</th>
                                                                                    <th class="sort"
                                                                                        data-sort="customer_name">
                                                                                        Customer</th>
                                                                                    <th class="sort"
                                                                                        data-sort="product_name">Product
                                                                                    </th>
                                                                                    <th class="sort" data-sort="date">
                                                                                        Order Date</th>
                                                                                    <th class="sort" data-sort="amount">
                                                                                        Amount</th>
                                                                                    <th class="sort" data-sort="payment">
                                                                                        Payment
                                                                                        Method</th>
                                                                                    <th class="sort" data-sort="status">
                                                                                        Delivery Status</th>
                                                                                    <th class="sort" data-sort="city">
                                                                                        Action</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody class="list form-check-all">
                                                                                <tr>
                                                                                    <th scope="row">
                                                                                        <div class="form-check">
                                                                                            <input class="form-check-input"
                                                                                                type="checkbox"
                                                                                                name="checkAll"
                                                                                                value="option1">
                                                                                        </div>
                                                                                    </th>
                                                                                    <td class="id"><a data-bs-toggle="modal"
                                                                                            data-bs-target=".bs-example-modal-order"
                                                                                            class="fw-medium link-primary">#VZ2101</a>
                                                                                    </td>
                                                                                    <td class="customer_name">Frank Hook
                                                                                    </td>
                                                                                    <td class="product_name">Puma Tshirt
                                                                                    </td>
                                                                                    <td class="date">20 Dec, 2021,
                                                                                        <small class="text-muted">02:21
                                                                                            AM</small>
                                                                                    </td>
                                                                                    <td class="amount">$654</td>
                                                                                    <td class="payment">Mastercard</td>
                                                                                    <td class="status"><span
                                                                                            class="badge badge-soft-warning text-uppercase">Pending</span>
                                                                                    </td>
                                                                                    <td>
                                                                                        <ul
                                                                                            class="list-inline hstack gap-2 mb-0">
                                                                                            <li class="list-inline-item"
                                                                                                data-bs-toggle="tooltip"
                                                                                                data-bs-trigger="hover"
                                                                                                data-bs-placement="top"
                                                                                                aria-label="View"
                                                                                                data-bs-original-title="View">
                                                                                                <a href="apps-ecommerce-order-details.html"
                                                                                                    class="text-primary d-inline-block">
                                                                                                    <i
                                                                                                        class="ri-eye-fill fs-16"></i>
                                                                                                </a>
                                                                                            </li>
                                                                                            <li class="list-inline-item edit"
                                                                                                data-bs-toggle="tooltip"
                                                                                                data-bs-trigger="hover"
                                                                                                data-bs-placement="top"
                                                                                                aria-label="Edit"
                                                                                                data-bs-original-title="Edit">
                                                                                                <a href="#showModal"
                                                                                                    data-bs-toggle="modal"
                                                                                                    class="text-primary d-inline-block edit-item-btn">
                                                                                                    <i
                                                                                                        class="ri-pencil-fill fs-16"></i>
                                                                                                </a>
                                                                                            </li>
                                                                                            <li class="list-inline-item"
                                                                                                data-bs-toggle="tooltip"
                                                                                                data-bs-trigger="hover"
                                                                                                data-bs-placement="top"
                                                                                                aria-label="Remove"
                                                                                                data-bs-original-title="Remove">
                                                                                                <a class="text-danger d-inline-block remove-item-btn"
                                                                                                    data-bs-toggle="modal"
                                                                                                    href="#deleteOrder">
                                                                                                    <i
                                                                                                        class="ri-delete-bin-5-fill fs-16"></i>
                                                                                                </a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <div class="noresult" style="display: none">
                                                                            <div class="text-center">
                                                                                <lord-icon
                                                                                    src="https://cdn.lordicon.com/msoeawqm.json"
                                                                                    trigger="loop"
                                                                                    colors="primary:#00559e,secondary:#0ab39c"
                                                                                    style="width:75px;height:75px">
                                                                                </lord-icon>
                                                                                <h5 class="mt-2">Sorry! No Result Found
                                                                                </h5>
                                                                                <p class="text-muted">We've searched
                                                                                    more than 150+ Orders We did
                                                                                    not find any
                                                                                    orders for you search.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="d-flex justify-content-end">
                                                                        <div class="pagination-wrap hstack gap-2">
                                                                            <a class="page-item pagination-prev disabled"
                                                                                href="#">
                                                                                Previous
                                                                            </a>
                                                                            <ul class="pagination listjs-pagination mb-0">
                                                                                <li class="active"><a class="page" href="#"
                                                                                        data-i="1" data-page="8">1</a></li>
                                                                            </ul>
                                                                            <a class="page-item pagination-next" href="#">
                                                                                Next
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="modal fade" id="showModal" tabindex="-1"
                                                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                    <div class="modal-dialog modal-dialog-centered">
                                                                        <div class="modal-content">
                                                                            <div class="modal-header bg-light p-3">
                                                                                <h5 class="modal-title"
                                                                                    id="exampleModalLabel">&nbsp;</h5>
                                                                                <button type="button" class="btn-close"
                                                                                    data-bs-dismiss="modal"
                                                                                    aria-label="Close"
                                                                                    id="close-modal"></button>
                                                                            </div>
                                                                            <form action="#">
                                                                                <div class="modal-body">
                                                                                    <input type="hidden" id="id-field">

                                                                                    <div class="mb-3" id="modal-id">
                                                                                        <label for="orderId"
                                                                                            class="form-label">ID</label>
                                                                                        <input type="text" id="orderId"
                                                                                            class="form-control"
                                                                                            placeholder="ID" readonly="">
                                                                                    </div>

                                                                                    <div class="mb-3">
                                                                                        <label for="customername-field"
                                                                                            class="form-label">Customer
                                                                                            Name</label>
                                                                                        <input type="text"
                                                                                            id="customername-field"
                                                                                            class="form-control"
                                                                                            placeholder="Enter Name"
                                                                                            required="">
                                                                                    </div>

                                                                                    <div class="mb-3">
                                                                                        <label for="productname-field"
                                                                                            class="form-label">Product</label>
                                                                                        <div class="choices"
                                                                                            data-type="select-one"
                                                                                            tabindex="0" role="combobox"
                                                                                            aria-autocomplete="list"
                                                                                            aria-haspopup="true"
                                                                                            aria-expanded="false">
                                                                                            <div class="choices__inner">
                                                                                                <select
                                                                                                    class="form-control choices__input"
                                                                                                    data-trigger=""
                                                                                                    name="productname-field"
                                                                                                    id="productname-field"
                                                                                                    hidden="" tabindex="-1"
                                                                                                    data-choice="active">
                                                                                                    <option value=""
                                                                                                        data-custom-properties="[object Object]">
                                                                                                        Product</option>
                                                                                                </select>
                                                                                                <div
                                                                                                    class="choices__list choices__list--single">
                                                                                                    <div class="choices__item choices__placeholder choices__item--selectable"
                                                                                                        data-item=""
                                                                                                        data-id="1"
                                                                                                        data-value=""
                                                                                                        data-custom-properties="[object Object]"
                                                                                                        aria-selected="true">
                                                                                                        Product</div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="choices__list choices__list--dropdown"
                                                                                                aria-expanded="false">
                                                                                                <input type="text"
                                                                                                    class="choices__input choices__input--cloned"
                                                                                                    autocomplete="off"
                                                                                                    autocapitalize="off"
                                                                                                    spellcheck="false"
                                                                                                    role="textbox"
                                                                                                    aria-autocomplete="list"
                                                                                                    aria-label="Product"
                                                                                                    placeholder="">
                                                                                                <div class="choices__list"
                                                                                                    role="listbox">
                                                                                                    <div id="choices--productname-field-item-choice-11"
                                                                                                        class="choices__item choices__item--choice is-selected choices__placeholder choices__item--selectable is-highlighted"
                                                                                                        role="option"
                                                                                                        data-choice=""
                                                                                                        data-id="11"
                                                                                                        data-value=""
                                                                                                        data-select-text="Press to select"
                                                                                                        data-choice-selectable=""
                                                                                                        aria-selected="true">
                                                                                                        Product</div>
                                                                                                    <div id="choices--productname-field-item-choice-1"
                                                                                                        class="choices__item choices__item--choice choices__item--selectable"
                                                                                                        role="option"
                                                                                                        data-choice=""
                                                                                                        data-id="1"
                                                                                                        data-value="350 ml Glass Grocery Container"
                                                                                                        data-select-text="Press to select"
                                                                                                        data-choice-selectable="">
                                                                                                        350 ml
                                                                                                        Glass Grocery
                                                                                                        Container</div>
                                                                                                    <div id="choices--productname-field-item-choice-2"
                                                                                                        class="choices__item choices__item--choice choices__item--selectable"
                                                                                                        role="option"
                                                                                                        data-choice=""
                                                                                                        data-id="2"
                                                                                                        data-value="Adidas Sneakers"
                                                                                                        data-select-text="Press to select"
                                                                                                        data-choice-selectable="">
                                                                                                        Adidas Sneakers
                                                                                                    </div>
                                                                                                    <div id="choices--productname-field-item-choice-3"
                                                                                                        class="choices__item choices__item--choice choices__item--selectable"
                                                                                                        role="option"
                                                                                                        data-choice=""
                                                                                                        data-id="3"
                                                                                                        data-value="American egale outfitters Shirt"
                                                                                                        data-select-text="Press to select"
                                                                                                        data-choice-selectable="">
                                                                                                        American
                                                                                                        egale outfitters
                                                                                                        Shirt</div>
                                                                                                    <div id="choices--productname-field-item-choice-4"
                                                                                                        class="choices__item choices__item--choice choices__item--selectable"
                                                                                                        role="option"
                                                                                                        data-choice=""
                                                                                                        data-id="4"
                                                                                                        data-value="Apple iPhone 12"
                                                                                                        data-select-text="Press to select"
                                                                                                        data-choice-selectable="">
                                                                                                        Apple iPhone 12
                                                                                                    </div>
                                                                                                    <div id="choices--productname-field-item-choice-5"
                                                                                                        class="choices__item choices__item--choice choices__item--selectable"
                                                                                                        role="option"
                                                                                                        data-choice=""
                                                                                                        data-id="5"
                                                                                                        data-value="Classic Short Sleeve Shirt"
                                                                                                        data-select-text="Press to select"
                                                                                                        data-choice-selectable="">
                                                                                                        Classic Short
                                                                                                        Sleeve Shirt
                                                                                                    </div>
                                                                                                    <div id="choices--productname-field-item-choice-6"
                                                                                                        class="choices__item choices__item--choice choices__item--selectable"
                                                                                                        role="option"
                                                                                                        data-choice=""
                                                                                                        data-id="6"
                                                                                                        data-value="Funky Prints T-shirt"
                                                                                                        data-select-text="Press to select"
                                                                                                        data-choice-selectable="">
                                                                                                        Funky Prints
                                                                                                        T-shirt</div>
                                                                                                    <div id="choices--productname-field-item-choice-7"
                                                                                                        class="choices__item choices__item--choice choices__item--selectable"
                                                                                                        role="option"
                                                                                                        data-choice=""
                                                                                                        data-id="7"
                                                                                                        data-value="Galaxy Watch4"
                                                                                                        data-select-text="Press to select"
                                                                                                        data-choice-selectable="">
                                                                                                        Galaxy Watch4
                                                                                                    </div>
                                                                                                    <div id="choices--productname-field-item-choice-8"
                                                                                                        class="choices__item choices__item--choice choices__item--selectable"
                                                                                                        role="option"
                                                                                                        data-choice=""
                                                                                                        data-id="8"
                                                                                                        data-value="Half Sleeve T-Shirts (Blue)"
                                                                                                        data-select-text="Press to select"
                                                                                                        data-choice-selectable="">
                                                                                                        Half Sleeve
                                                                                                        T-Shirts (Blue)
                                                                                                    </div>
                                                                                                    <div id="choices--productname-field-item-choice-9"
                                                                                                        class="choices__item choices__item--choice choices__item--selectable"
                                                                                                        role="option"
                                                                                                        data-choice=""
                                                                                                        data-id="9"
                                                                                                        data-value="Noise Evolve Smartwatch"
                                                                                                        data-select-text="Press to select"
                                                                                                        data-choice-selectable="">
                                                                                                        Noise Evolve
                                                                                                        Smartwatch</div>
                                                                                                    <div id="choices--productname-field-item-choice-10"
                                                                                                        class="choices__item choices__item--choice choices__item--selectable"
                                                                                                        role="option"
                                                                                                        data-choice=""
                                                                                                        data-id="10"
                                                                                                        data-value="Oxford Button-Down Shirt"
                                                                                                        data-select-text="Press to select"
                                                                                                        data-choice-selectable="">
                                                                                                        Oxford
                                                                                                        Button-Down
                                                                                                        Shirt</div>
                                                                                                    <div id="choices--productname-field-item-choice-12"
                                                                                                        class="choices__item choices__item--choice choices__item--selectable"
                                                                                                        role="option"
                                                                                                        data-choice=""
                                                                                                        data-id="12"
                                                                                                        data-value="Puma Tshirt"
                                                                                                        data-select-text="Press to select"
                                                                                                        data-choice-selectable="">
                                                                                                        Puma Tshirt
                                                                                                    </div>
                                                                                                    <div id="choices--productname-field-item-choice-13"
                                                                                                        class="choices__item choices__item--choice choices__item--selectable"
                                                                                                        role="option"
                                                                                                        data-choice=""
                                                                                                        data-id="13"
                                                                                                        data-value="USB Flash Drive Personalized with 3D Print"
                                                                                                        data-select-text="Press to select"
                                                                                                        data-choice-selectable="">
                                                                                                        USB Flash Drive
                                                                                                        Personalized
                                                                                                        with 3D Print
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div class="mb-3">
                                                                                        <label for="date-field"
                                                                                            class="form-label">Order
                                                                                            Date</label>
                                                                                        <input type="text" id="date-field"
                                                                                            class="form-control flatpickr-input"
                                                                                            data-provider="flatpickr"
                                                                                            data-date-format="d M, Y"
                                                                                            data-enable-time="" required=""
                                                                                            placeholder="Select date"
                                                                                            readonly="readonly">
                                                                                    </div>

                                                                                    <div class="row gy-4 mb-3">
                                                                                        <div class="col-md-6">
                                                                                            <div>
                                                                                                <label for="amount-field"
                                                                                                    class="form-label">Amount</label>
                                                                                                <input type="text"
                                                                                                    id="amount-field"
                                                                                                    class="form-control"
                                                                                                    placeholder="Total amount"
                                                                                                    required="">
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-md-6">
                                                                                            <div>
                                                                                                <label for="payment-field"
                                                                                                    class="form-label">Payment
                                                                                                    Method</label>
                                                                                                <div class="choices"
                                                                                                    data-type="select-one"
                                                                                                    tabindex="0"
                                                                                                    role="combobox"
                                                                                                    aria-autocomplete="list"
                                                                                                    aria-haspopup="true"
                                                                                                    aria-expanded="false">
                                                                                                    <div
                                                                                                        class="choices__inner">
                                                                                                        <select
                                                                                                            class="form-control choices__input"
                                                                                                            data-trigger=""
                                                                                                            name="payment-method"
                                                                                                            id="payment-field"
                                                                                                            hidden=""
                                                                                                            tabindex="-1"
                                                                                                            data-choice="active">
                                                                                                            <option value=""
                                                                                                                data-custom-properties="[object Object]">
                                                                                                                Payment
                                                                                                                Method
                                                                                                            </option>
                                                                                                        </select>
                                                                                                        <div
                                                                                                            class="choices__list choices__list--single">
                                                                                                            <div class="choices__item choices__placeholder choices__item--selectable"
                                                                                                                data-item=""
                                                                                                                data-id="1"
                                                                                                                data-value=""
                                                                                                                data-custom-properties="[object Object]"
                                                                                                                aria-selected="true">
                                                                                                                Payment
                                                                                                                Method
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="choices__list choices__list--dropdown"
                                                                                                        aria-expanded="false">
                                                                                                        <input type="text"
                                                                                                            class="choices__input choices__input--cloned"
                                                                                                            autocomplete="off"
                                                                                                            autocapitalize="off"
                                                                                                            spellcheck="false"
                                                                                                            role="textbox"
                                                                                                            aria-autocomplete="list"
                                                                                                            aria-label="Payment Method"
                                                                                                            placeholder="">
                                                                                                        <div class="choices__list"
                                                                                                            role="listbox">
                                                                                                            <div id="choices--payment-field-item-choice-3"
                                                                                                                class="choices__item choices__item--choice is-selected choices__placeholder choices__item--selectable is-highlighted"
                                                                                                                role="option"
                                                                                                                data-choice=""
                                                                                                                data-id="3"
                                                                                                                data-value=""
                                                                                                                data-select-text="Press to select"
                                                                                                                data-choice-selectable=""
                                                                                                                aria-selected="true">
                                                                                                                Payment
                                                                                                                Method
                                                                                                            </div>
                                                                                                            <div id="choices--payment-field-item-choice-1"
                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                role="option"
                                                                                                                data-choice=""
                                                                                                                data-id="1"
                                                                                                                data-value="COD"
                                                                                                                data-select-text="Press to select"
                                                                                                                data-choice-selectable="">
                                                                                                                COD
                                                                                                            </div>
                                                                                                            <div id="choices--payment-field-item-choice-2"
                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                role="option"
                                                                                                                data-choice=""
                                                                                                                data-id="2"
                                                                                                                data-value="Mastercard"
                                                                                                                data-select-text="Press to select"
                                                                                                                data-choice-selectable="">
                                                                                                                Mastercard
                                                                                                            </div>
                                                                                                            <div id="choices--payment-field-item-choice-4"
                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                role="option"
                                                                                                                data-choice=""
                                                                                                                data-id="4"
                                                                                                                data-value="Paypal"
                                                                                                                data-select-text="Press to select"
                                                                                                                data-choice-selectable="">
                                                                                                                Paypal
                                                                                                            </div>
                                                                                                            <div id="choices--payment-field-item-choice-5"
                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                role="option"
                                                                                                                data-choice=""
                                                                                                                data-id="5"
                                                                                                                data-value="Visa"
                                                                                                                data-select-text="Press to select"
                                                                                                                data-choice-selectable="">
                                                                                                                Visa
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div>
                                                                                        <label for="delivered-status"
                                                                                            class="form-label">Delivery
                                                                                            Status</label>
                                                                                        <div class="choices"
                                                                                            data-type="select-one"
                                                                                            tabindex="0" role="combobox"
                                                                                            aria-autocomplete="list"
                                                                                            aria-haspopup="true"
                                                                                            aria-expanded="false">
                                                                                            <div class="choices__inner">
                                                                                                <select
                                                                                                    class="form-control choices__input"
                                                                                                    data-trigger=""
                                                                                                    name="delivered-status"
                                                                                                    id="delivered-status"
                                                                                                    hidden="" tabindex="-1"
                                                                                                    data-choice="active">
                                                                                                    <option value=""
                                                                                                        data-custom-properties="[object Object]">
                                                                                                        Delivery Status
                                                                                                    </option>
                                                                                                </select>
                                                                                                <div
                                                                                                    class="choices__list choices__list--single">
                                                                                                    <div class="choices__item choices__placeholder choices__item--selectable"
                                                                                                        data-item=""
                                                                                                        data-id="1"
                                                                                                        data-value=""
                                                                                                        data-custom-properties="[object Object]"
                                                                                                        aria-selected="true">
                                                                                                        Delivery Status
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="choices__list choices__list--dropdown"
                                                                                                aria-expanded="false">
                                                                                                <input type="text"
                                                                                                    class="choices__input choices__input--cloned"
                                                                                                    autocomplete="off"
                                                                                                    autocapitalize="off"
                                                                                                    spellcheck="false"
                                                                                                    role="textbox"
                                                                                                    aria-autocomplete="list"
                                                                                                    aria-label="Delivery Status"
                                                                                                    placeholder="">
                                                                                                <div class="choices__list"
                                                                                                    role="listbox">
                                                                                                    <div id="choices--delivered-status-item-choice-3"
                                                                                                        class="choices__item choices__item--choice is-selected choices__placeholder choices__item--selectable is-highlighted"
                                                                                                        role="option"
                                                                                                        data-choice=""
                                                                                                        data-id="3"
                                                                                                        data-value=""
                                                                                                        data-select-text="Press to select"
                                                                                                        data-choice-selectable=""
                                                                                                        aria-selected="true">
                                                                                                        Delivery Status
                                                                                                    </div>
                                                                                                    <div id="choices--delivered-status-item-choice-1"
                                                                                                        class="choices__item choices__item--choice choices__item--selectable"
                                                                                                        role="option"
                                                                                                        data-choice=""
                                                                                                        data-id="1"
                                                                                                        data-value="Cancelled"
                                                                                                        data-select-text="Press to select"
                                                                                                        data-choice-selectable="">
                                                                                                        Cancelled</div>
                                                                                                    <div id="choices--delivered-status-item-choice-2"
                                                                                                        class="choices__item choices__item--choice choices__item--selectable"
                                                                                                        role="option"
                                                                                                        data-choice=""
                                                                                                        data-id="2"
                                                                                                        data-value="Delivered"
                                                                                                        data-select-text="Press to select"
                                                                                                        data-choice-selectable="">
                                                                                                        Delivered</div>
                                                                                                    <div id="choices--delivered-status-item-choice-4"
                                                                                                        class="choices__item choices__item--choice choices__item--selectable"
                                                                                                        role="option"
                                                                                                        data-choice=""
                                                                                                        data-id="4"
                                                                                                        data-value="Inprogress"
                                                                                                        data-select-text="Press to select"
                                                                                                        data-choice-selectable="">
                                                                                                        Inprogress</div>
                                                                                                    <div id="choices--delivered-status-item-choice-5"
                                                                                                        class="choices__item choices__item--choice choices__item--selectable"
                                                                                                        role="option"
                                                                                                        data-choice=""
                                                                                                        data-id="5"
                                                                                                        data-value="Pending"
                                                                                                        data-select-text="Press to select"
                                                                                                        data-choice-selectable="">
                                                                                                        Pending</div>
                                                                                                    <div id="choices--delivered-status-item-choice-6"
                                                                                                        class="choices__item choices__item--choice choices__item--selectable"
                                                                                                        role="option"
                                                                                                        data-choice=""
                                                                                                        data-id="6"
                                                                                                        data-value="Pickups"
                                                                                                        data-select-text="Press to select"
                                                                                                        data-choice-selectable="">
                                                                                                        Pickups</div>
                                                                                                    <div id="choices--delivered-status-item-choice-7"
                                                                                                        class="choices__item choices__item--choice choices__item--selectable"
                                                                                                        role="option"
                                                                                                        data-choice=""
                                                                                                        data-id="7"
                                                                                                        data-value="Returns"
                                                                                                        data-select-text="Press to select"
                                                                                                        data-choice-selectable="">
                                                                                                        Returns</div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="modal-footer">
                                                                                    <div
                                                                                        class="hstack gap-2 justify-content-end">
                                                                                        <button type="button"
                                                                                            class="btn btn-light"
                                                                                            data-bs-dismiss="modal">Close</button>
                                                                                        <button type="submit"
                                                                                            class="btn btn-primary"
                                                                                            id="add-btn">Add
                                                                                            Order</button>
                                                                                        <button type="button"
                                                                                            class="btn btn-primary"
                                                                                            id="edit-btn">Update</button>
                                                                                    </div>
                                                                                </div>
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <!-- Modal -->
                                                                <div class="modal fade flip" id="deleteOrder" tabindex="-1"
                                                                    aria-hidden="true">
                                                                    <div class="modal-dialog modal-dialog-centered">
                                                                        <div class="modal-content">
                                                                            <div class="modal-body p-5 text-center">
                                                                                <lord-icon
                                                                                    src="https://cdn.lordicon.com/gsqxdxog.json"
                                                                                    trigger="loop"
                                                                                    colors="primary:#00559e,secondary:#00bd9d"
                                                                                    style="width:90px;height:90px"></lord-icon>
                                                                                <div class="mt-4 text-center">
                                                                                    <h4>You are about to delete a order
                                                                                        ?</h4>
                                                                                    <p class="text-muted fs-15 mb-4">
                                                                                        Deleting your order will remove
                                                                                        all of
                                                                                        your information from our
                                                                                        database.</p>
                                                                                    <div
                                                                                        class="hstack gap-2 justify-content-center remove">
                                                                                        <button
                                                                                            class="btn btn-link link-primary fw-medium text-decoration-none"
                                                                                            id="deleteRecord-close"
                                                                                            data-bs-dismiss="modal"><i
                                                                                                class="ri-close-line me-1 align-middle"></i>
                                                                                            Close</button>
                                                                                        <button class="btn btn-primary"
                                                                                            id="delete-record">Yes,
                                                                                            Delete It</button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <!--end modal -->
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!--end tab-pane-->
                                                    <div class="tab-pane fade" id="projects" role="tabpanel">
                                                        <div class="row">
                                                            <div class="col-xxl-3">
                                                                <div class="card">
                                                                    <div class="card-body p-4">
                                                                        <div class="text-center">
                                                                            <div
                                                                                class="profile-user position-relative d-inline-block mx-auto  mb-4">
                                                                                <img src="assets/images/users/avatar-1.jpg"
                                                                                    class="rounded-circle avatar-xl img-thumbnail user-profile-image"
                                                                                    alt="user-profile-image">
                                                                                <div
                                                                                    class="avatar-xs p-0 rounded-circle profile-photo-edit">
                                                                                    <input id="profile-img-file-input"
                                                                                        type="file"
                                                                                        class="profile-img-file-input">
                                                                                    <label for="profile-img-file-input"
                                                                                        class="profile-photo-edit avatar-xs">
                                                                                        <span
                                                                                            class="avatar-title rounded-circle bg-light text-body">
                                                                                            <i class="ri-camera-fill"></i>
                                                                                        </span>
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                            <h5 class="fs-16 mb-1">Change Logo</h5>
                                                                            <p class="text-muted mb-0">Choose File</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <!--end card-->
                                                                <div class="card">
                                                                    <div class="card-body">
                                                                        <h5 class="card-title mb-4">Contacts</h5>
                                                                        <div class="d-flex flex-wrap gap-2">
                                                                            <div>
                                                                                <a href="javascript:void(0);"
                                                                                    class="avatar-xs d-block">
                                                                                    <span
                                                                                        class="avatar-title rounded-circle fs-16 bg-soft-dark text-dark text-light">
                                                                                        <i class="ri-github-fill"></i>
                                                                                    </span>
                                                                                </a>
                                                                            </div>
                                                                            <div>
                                                                                <a href="javascript:void(0);"
                                                                                    class="avatar-xs d-block">
                                                                                    <span
                                                                                        class="avatar-title rounded-circle fs-16 bg-soft-primary text-primary">
                                                                                        <i class="ri-global-fill"></i>
                                                                                    </span>
                                                                                </a>
                                                                            </div>
                                                                            <div>
                                                                                <a href="javascript:void(0);"
                                                                                    class="avatar-xs d-block">
                                                                                    <span
                                                                                        class="avatar-title rounded-circle fs-16 bg-soft-danger text-danger">
                                                                                        <i class="ri-dribbble-fill"></i>
                                                                                    </span>
                                                                                </a>
                                                                            </div>
                                                                            <div>
                                                                                <a href="javascript:void(0);"
                                                                                    class="avatar-xs d-block">
                                                                                    <span
                                                                                        class="avatar-title rounded-circle fs-16 bg-soft-success text-success">
                                                                                        <i class="ri-pinterest-fill"></i>
                                                                                    </span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div><!-- end card body -->
                                                                </div><!-- end card -->
                                                            </div>
                                                            <!--end col-->

                                                            <div class="col-xxl-9">
                                                                <div class="card">
                                                                    <div class="card-header">
                                                                        <ul class="nav nav-tabs-custom rounded card-header-tabs border-bottom-0"
                                                                            role="tablist">
                                                                            <li class="nav-item" role="presentation">
                                                                                <a class="nav-link active"
                                                                                    data-bs-toggle="tab"
                                                                                    href="#personalDetails" role="tab"
                                                                                    aria-selected="true">
                                                                                    <i class="fas fa-home"></i>
                                                                                    Business Info
                                                                                </a>
                                                                            </li>
                                                                            <li class="nav-item" role="presentation">
                                                                                <a class="nav-link" data-bs-toggle="tab"
                                                                                    href="#changePassword" role="tab"
                                                                                    aria-selected="false" tabindex="-1">
                                                                                    <i class="far fa-user"></i>
                                                                                    Change Password
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="card-body p-4">
                                                                        <div class="tab-content">
                                                                            <div class="tab-pane active"
                                                                                id="personalDetails" role="tabpanel">
                                                                                <form action="javascript:void(0);">
                                                                                    <div class="row">
                                                                                        <div class="col-lg-12">
                                                                                            <div class="mb-3">
                                                                                                <label for="firstnameInput"
                                                                                                    class="form-label">Business
                                                                                                    Name</label>
                                                                                                <input type="text"
                                                                                                    class="form-control"
                                                                                                    id="firstnameInput"
                                                                                                    placeholder="Enter your firstname"
                                                                                                    value="Dave">
                                                                                            </div>
                                                                                        </div>
                                                                                        <!--end col-->

                                                                                        <div class="col-lg-6">
                                                                                            <div class="mb-3">
                                                                                                <label for="emailInput"
                                                                                                    class="form-label">Email
                                                                                                    Address</label>
                                                                                                <input type="email"
                                                                                                    class="form-control"
                                                                                                    id="emailInput"
                                                                                                    placeholder="Enter your email"
                                                                                                    value="daveadame@HiQ Africa.com">
                                                                                            </div>
                                                                                        </div>
                                                                                        <!--end col-->

                                                                                        <div class="col-lg-6">
                                                                                            <div class="mb-3">
                                                                                                <label
                                                                                                    for="phonenumberInput"
                                                                                                    class="form-label">Phone
                                                                                                    Number</label>
                                                                                                <input type="text"
                                                                                                    class="form-control"
                                                                                                    id="phonenumberInput"
                                                                                                    placeholder="Enter your phone number"
                                                                                                    value="+(1) 987 6543">
                                                                                            </div>
                                                                                        </div>
                                                                                        <!--end col-->

                                                                                        <div class="col-lg-12">
                                                                                            <div class="mb-3 pb-2">
                                                                                                <label
                                                                                                    for="exampleFormControlTextarea"
                                                                                                    class="form-label">Billing
                                                                                                    Address</label>
                                                                                                <textarea
                                                                                                    class="form-control"
                                                                                                    id="exampleFormControlTextarea"
                                                                                                    placeholder="Enter your description"
                                                                                                    rows="3">Hi I'm Anna Adame,It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is European languages are members of the same family.</textarea>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-lg-12">
                                                                                            <div class="mb-3 pb-2">
                                                                                                <label
                                                                                                    for="exampleFormControlTextarea"
                                                                                                    class="form-label">Shipping
                                                                                                    Address</label>
                                                                                                <textarea
                                                                                                    class="form-control"
                                                                                                    id="exampleFormControlTextarea"
                                                                                                    placeholder="Enter your description"
                                                                                                    rows="3">Hi I'm Anna Adame,It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is European languages are members of the same family.</textarea>
                                                                                            </div>
                                                                                        </div>

                                                                                        <!--end col-->
                                                                                        <div class="col-lg-12">
                                                                                            <div
                                                                                                class="hstack gap-2 justify-content-end">
                                                                                                <button type="submit"
                                                                                                    class="btn btn-primary">Update</button>
                                                                                            </div>
                                                                                        </div>
                                                                                        <!--end col-->
                                                                                    </div>
                                                                                    <!--end row-->
                                                                                </form>
                                                                            </div>
                                                                            <!--end tab-pane-->
                                                                            <div class="tab-pane" id="changePassword"
                                                                                role="tabpanel">
                                                                                <form action="javascript:void(0);">
                                                                                    <div class="row g-2">
                                                                                        <div class="col-lg-4">
                                                                                            <div>
                                                                                                <label
                                                                                                    for="oldpasswordInput"
                                                                                                    class="form-label">Old
                                                                                                    Password*</label>
                                                                                                <input type="password"
                                                                                                    class="form-control"
                                                                                                    id="oldpasswordInput"
                                                                                                    placeholder="Enter current password">
                                                                                            </div>
                                                                                        </div>
                                                                                        <!--end col-->
                                                                                        <div class="col-lg-4">
                                                                                            <div>
                                                                                                <label
                                                                                                    for="newpasswordInput"
                                                                                                    class="form-label">New
                                                                                                    Password*</label>
                                                                                                <input type="password"
                                                                                                    class="form-control"
                                                                                                    id="newpasswordInput"
                                                                                                    placeholder="Enter new password">
                                                                                            </div>
                                                                                        </div>
                                                                                        <!--end col-->
                                                                                        <div class="col-lg-4">
                                                                                            <div>
                                                                                                <label
                                                                                                    for="confirmpasswordInput"
                                                                                                    class="form-label">Confirm
                                                                                                    Password*</label>
                                                                                                <input type="password"
                                                                                                    class="form-control"
                                                                                                    id="confirmpasswordInput"
                                                                                                    placeholder="Confirm password">
                                                                                            </div>
                                                                                        </div>
                                                                                        <!--end col-->
                                                                                        <div class="col-lg-12">
                                                                                            <div class="mb-3">
                                                                                                <a href="javascript:void(0);"
                                                                                                    class="link-primary text-decoration-underline">Forgot
                                                                                                    Password ?</a>
                                                                                            </div>
                                                                                        </div>
                                                                                        <!--end col-->
                                                                                        <div class="col-lg-12">
                                                                                            <div class="text-end">
                                                                                                <button type="submit"
                                                                                                    class="btn btn-primary">Change
                                                                                                    Password</button>
                                                                                            </div>
                                                                                        </div>
                                                                                        <!--end col-->
                                                                                    </div>
                                                                                    <!--end row-->
                                                                                </form>
                                                                                <div class="mt-4 mb-3 border-bottom pb-2">
                                                                                    <div class="float-end">
                                                                                        <a href="javascript:void(0);"
                                                                                            class="link-secondary">All
                                                                                            Logout</a>
                                                                                    </div>
                                                                                    <h5 class="card-title">Login History
                                                                                    </h5>
                                                                                </div>
                                                                                <div class="d-flex align-items-center mb-3">
                                                                                    <div class="flex-shrink-0 avatar-sm">
                                                                                        <div
                                                                                            class="avatar-title bg-light text-primary rounded-3 fs-18">
                                                                                            <i
                                                                                                class="ri-smartphone-line"></i>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="flex-grow-1 ms-3">
                                                                                        <h6>iPhone 12 Pro</h6>
                                                                                        <p class="text-muted mb-0">Los
                                                                                            Angeles, United States -
                                                                                            March 16 at
                                                                                            2:47PM</p>
                                                                                    </div>
                                                                                    <div>
                                                                                        <a href="javascript:void(0);"
                                                                                            class="link-secondary">Logout</a>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="d-flex align-items-center mb-3">
                                                                                    <div class="flex-shrink-0 avatar-sm">
                                                                                        <div
                                                                                            class="avatar-title bg-light text-primary rounded-3 fs-18">
                                                                                            <i class="ri-tablet-line"></i>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="flex-grow-1 ms-3">
                                                                                        <h6>Apple iPad Pro</h6>
                                                                                        <p class="text-muted mb-0">
                                                                                            Washington, United States -
                                                                                            November 06
                                                                                            at 10:43AM</p>
                                                                                    </div>
                                                                                    <div>
                                                                                        <a href="javascript:void(0);"
                                                                                            class="link-secondary">Logout</a>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="d-flex align-items-center mb-3">
                                                                                    <div class="flex-shrink-0 avatar-sm">
                                                                                        <div
                                                                                            class="avatar-title bg-light text-primary rounded-3 fs-18">
                                                                                            <i
                                                                                                class="ri-smartphone-line"></i>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="flex-grow-1 ms-3">
                                                                                        <h6>Galaxy S21 Ultra 5G</h6>
                                                                                        <p class="text-muted mb-0">
                                                                                            Conneticut, United States -
                                                                                            June 12 at
                                                                                            3:24PM</p>
                                                                                    </div>
                                                                                    <div>
                                                                                        <a href="javascript:void(0);"
                                                                                            class="link-secondary">Logout</a>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="d-flex align-items-center">
                                                                                    <div class="flex-shrink-0 avatar-sm">
                                                                                        <div
                                                                                            class="avatar-title bg-light text-primary rounded-3 fs-18">
                                                                                            <i class="ri-macbook-line"></i>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="flex-grow-1 ms-3">
                                                                                        <h6>Dell Inspiron 14</h6>
                                                                                        <p class="text-muted mb-0">
                                                                                            Phoenix, United States -
                                                                                            July 26 at
                                                                                            8:10AM</p>
                                                                                    </div>
                                                                                    <div>
                                                                                        <a href="javascript:void(0);"
                                                                                            class="link-secondary">Logout</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <!--end tab-pane-->
                                                                            <div class="tab-pane" id="experience"
                                                                                role="tabpanel">
                                                                                <form>
                                                                                    <div id="newlink">
                                                                                        <div id="1">
                                                                                            <div class="row">
                                                                                                <div class="col-lg-12">
                                                                                                    <div class="mb-3">
                                                                                                        <label
                                                                                                            for="jobTitle"
                                                                                                            class="form-label">Job
                                                                                                            Title</label>
                                                                                                        <input type="text"
                                                                                                            class="form-control"
                                                                                                            id="jobTitle"
                                                                                                            placeholder="Job title"
                                                                                                            value="Lead Designer / Developer">
                                                                                                    </div>
                                                                                                </div>
                                                                                                <!--end col-->
                                                                                                <div class="col-lg-6">
                                                                                                    <div class="mb-3">
                                                                                                        <label
                                                                                                            for="companyName"
                                                                                                            class="form-label">Company
                                                                                                            Name</label>
                                                                                                        <input type="text"
                                                                                                            class="form-control"
                                                                                                            id="companyName"
                                                                                                            placeholder="Company name"
                                                                                                            value="Themesbrand">
                                                                                                    </div>
                                                                                                </div>
                                                                                                <!--end col-->
                                                                                                <div class="col-lg-6">
                                                                                                    <div class="mb-3">
                                                                                                        <label
                                                                                                            for="experienceYear"
                                                                                                            class="form-label">Experience
                                                                                                            Years</label>
                                                                                                        <div class="row">
                                                                                                            <div
                                                                                                                class="col-lg-5">
                                                                                                                <div class="choices"
                                                                                                                    data-type="select-one"
                                                                                                                    tabindex="0"
                                                                                                                    role="listbox"
                                                                                                                    aria-haspopup="true"
                                                                                                                    aria-expanded="false">
                                                                                                                    <div
                                                                                                                        class="choices__inner">
                                                                                                                        <select
                                                                                                                            class="form-control choices__input"
                                                                                                                            data-choices=""
                                                                                                                            data-choices-search-false=""
                                                                                                                            name="experienceYear"
                                                                                                                            id="experienceYear"
                                                                                                                            hidden=""
                                                                                                                            tabindex="-1"
                                                                                                                            data-choice="active">
                                                                                                                            <option
                                                                                                                                value="Choice 17"
                                                                                                                                data-custom-properties="[object Object]">
                                                                                                                                2017
                                                                                                                            </option>
                                                                                                                        </select>
                                                                                                                        <div
                                                                                                                            class="choices__list choices__list--single">
                                                                                                                            <div class="choices__item choices__item--selectable"
                                                                                                                                data-item=""
                                                                                                                                data-id="1"
                                                                                                                                data-value="Choice 17"
                                                                                                                                data-custom-properties="[object Object]"
                                                                                                                                aria-selected="true">
                                                                                                                                2017
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    <div class="choices__list choices__list--dropdown"
                                                                                                                        aria-expanded="false">
                                                                                                                        <div class="choices__list"
                                                                                                                            role="listbox">
                                                                                                                            <div id="choices--experienceYear-item-choice-23"
                                                                                                                                class="choices__item choices__item--choice choices__placeholder choices__item--selectable is-highlighted"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="23"
                                                                                                                                data-value=""
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable=""
                                                                                                                                aria-selected="true">
                                                                                                                                Select
                                                                                                                                years
                                                                                                                            </div>
                                                                                                                            <div id="choices--experienceYear-item-choice-1"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="1"
                                                                                                                                data-value="Choice 1"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2001
                                                                                                                            </div>
                                                                                                                            <div id="choices--experienceYear-item-choice-2"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="2"
                                                                                                                                data-value="Choice 2"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2002
                                                                                                                            </div>
                                                                                                                            <div id="choices--experienceYear-item-choice-3"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="3"
                                                                                                                                data-value="Choice 3"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2003
                                                                                                                            </div>
                                                                                                                            <div id="choices--experienceYear-item-choice-4"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="4"
                                                                                                                                data-value="Choice 4"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2004
                                                                                                                            </div>
                                                                                                                            <div id="choices--experienceYear-item-choice-5"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="5"
                                                                                                                                data-value="Choice 5"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2005
                                                                                                                            </div>
                                                                                                                            <div id="choices--experienceYear-item-choice-6"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="6"
                                                                                                                                data-value="Choice 6"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2006
                                                                                                                            </div>
                                                                                                                            <div id="choices--experienceYear-item-choice-7"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="7"
                                                                                                                                data-value="Choice 7"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2007
                                                                                                                            </div>
                                                                                                                            <div id="choices--experienceYear-item-choice-8"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="8"
                                                                                                                                data-value="Choice 8"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2008
                                                                                                                            </div>
                                                                                                                            <div id="choices--experienceYear-item-choice-9"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="9"
                                                                                                                                data-value="Choice 9"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2009
                                                                                                                            </div>
                                                                                                                            <div id="choices--experienceYear-item-choice-10"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="10"
                                                                                                                                data-value="Choice 10"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2010
                                                                                                                            </div>
                                                                                                                            <div id="choices--experienceYear-item-choice-11"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="11"
                                                                                                                                data-value="Choice 11"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2011
                                                                                                                            </div>
                                                                                                                            <div id="choices--experienceYear-item-choice-12"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="12"
                                                                                                                                data-value="Choice 12"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2012
                                                                                                                            </div>
                                                                                                                            <div id="choices--experienceYear-item-choice-13"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="13"
                                                                                                                                data-value="Choice 13"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2013
                                                                                                                            </div>
                                                                                                                            <div id="choices--experienceYear-item-choice-14"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="14"
                                                                                                                                data-value="Choice 14"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2014
                                                                                                                            </div>
                                                                                                                            <div id="choices--experienceYear-item-choice-15"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="15"
                                                                                                                                data-value="Choice 15"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2015
                                                                                                                            </div>
                                                                                                                            <div id="choices--experienceYear-item-choice-16"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="16"
                                                                                                                                data-value="Choice 16"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2016
                                                                                                                            </div>
                                                                                                                            <div id="choices--experienceYear-item-choice-17"
                                                                                                                                class="choices__item choices__item--choice is-selected choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="17"
                                                                                                                                data-value="Choice 17"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2017
                                                                                                                            </div>
                                                                                                                            <div id="choices--experienceYear-item-choice-18"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="18"
                                                                                                                                data-value="Choice 18"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2018
                                                                                                                            </div>
                                                                                                                            <div id="choices--experienceYear-item-choice-19"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="19"
                                                                                                                                data-value="Choice 19"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2019
                                                                                                                            </div>
                                                                                                                            <div id="choices--experienceYear-item-choice-20"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="20"
                                                                                                                                data-value="Choice 20"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2020
                                                                                                                            </div>
                                                                                                                            <div id="choices--experienceYear-item-choice-21"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="21"
                                                                                                                                data-value="Choice 21"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2021
                                                                                                                            </div>
                                                                                                                            <div id="choices--experienceYear-item-choice-22"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="22"
                                                                                                                                data-value="Choice 22"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2022
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <!--end col-->
                                                                                                            <div
                                                                                                                class="col-auto align-self-center">
                                                                                                                to
                                                                                                            </div>
                                                                                                            <!--end col-->
                                                                                                            <div
                                                                                                                class="col-lg-5">
                                                                                                                <div class="choices"
                                                                                                                    data-type="select-one"
                                                                                                                    tabindex="0"
                                                                                                                    role="listbox"
                                                                                                                    aria-haspopup="true"
                                                                                                                    aria-expanded="false">
                                                                                                                    <div
                                                                                                                        class="choices__inner">
                                                                                                                        <select
                                                                                                                            class="form-control choices__input"
                                                                                                                            data-choices=""
                                                                                                                            data-choices-search-false=""
                                                                                                                            name="choices-single-default2"
                                                                                                                            hidden=""
                                                                                                                            tabindex="-1"
                                                                                                                            data-choice="active">
                                                                                                                            <option
                                                                                                                                value="Choice 20"
                                                                                                                                data-custom-properties="[object Object]">
                                                                                                                                2020
                                                                                                                            </option>
                                                                                                                        </select>
                                                                                                                        <div
                                                                                                                            class="choices__list choices__list--single">
                                                                                                                            <div class="choices__item choices__item--selectable"
                                                                                                                                data-item=""
                                                                                                                                data-id="1"
                                                                                                                                data-value="Choice 20"
                                                                                                                                data-custom-properties="[object Object]"
                                                                                                                                aria-selected="true">
                                                                                                                                2020
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    <div class="choices__list choices__list--dropdown"
                                                                                                                        aria-expanded="false">
                                                                                                                        <div class="choices__list"
                                                                                                                            role="listbox">
                                                                                                                            <div id="choices--choices-single-default2-kv-item-choice-23"
                                                                                                                                class="choices__item choices__item--choice choices__placeholder choices__item--selectable is-highlighted"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="23"
                                                                                                                                data-value=""
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable=""
                                                                                                                                aria-selected="true">
                                                                                                                                Select
                                                                                                                                years
                                                                                                                            </div>
                                                                                                                            <div id="choices--choices-single-default2-kv-item-choice-1"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="1"
                                                                                                                                data-value="Choice 1"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2001
                                                                                                                            </div>
                                                                                                                            <div id="choices--choices-single-default2-kv-item-choice-2"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="2"
                                                                                                                                data-value="Choice 2"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2002
                                                                                                                            </div>
                                                                                                                            <div id="choices--choices-single-default2-kv-item-choice-3"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="3"
                                                                                                                                data-value="Choice 3"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2003
                                                                                                                            </div>
                                                                                                                            <div id="choices--choices-single-default2-kv-item-choice-4"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="4"
                                                                                                                                data-value="Choice 4"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2004
                                                                                                                            </div>
                                                                                                                            <div id="choices--choices-single-default2-kv-item-choice-5"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="5"
                                                                                                                                data-value="Choice 5"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2005
                                                                                                                            </div>
                                                                                                                            <div id="choices--choices-single-default2-kv-item-choice-6"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="6"
                                                                                                                                data-value="Choice 6"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2006
                                                                                                                            </div>
                                                                                                                            <div id="choices--choices-single-default2-kv-item-choice-7"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="7"
                                                                                                                                data-value="Choice 7"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2007
                                                                                                                            </div>
                                                                                                                            <div id="choices--choices-single-default2-kv-item-choice-8"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="8"
                                                                                                                                data-value="Choice 8"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2008
                                                                                                                            </div>
                                                                                                                            <div id="choices--choices-single-default2-kv-item-choice-9"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="9"
                                                                                                                                data-value="Choice 9"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2009
                                                                                                                            </div>
                                                                                                                            <div id="choices--choices-single-default2-kv-item-choice-10"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="10"
                                                                                                                                data-value="Choice 10"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2010
                                                                                                                            </div>
                                                                                                                            <div id="choices--choices-single-default2-kv-item-choice-11"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="11"
                                                                                                                                data-value="Choice 11"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2011
                                                                                                                            </div>
                                                                                                                            <div id="choices--choices-single-default2-kv-item-choice-12"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="12"
                                                                                                                                data-value="Choice 12"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2012
                                                                                                                            </div>
                                                                                                                            <div id="choices--choices-single-default2-kv-item-choice-13"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="13"
                                                                                                                                data-value="Choice 13"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2013
                                                                                                                            </div>
                                                                                                                            <div id="choices--choices-single-default2-kv-item-choice-14"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="14"
                                                                                                                                data-value="Choice 14"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2014
                                                                                                                            </div>
                                                                                                                            <div id="choices--choices-single-default2-kv-item-choice-15"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="15"
                                                                                                                                data-value="Choice 15"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2015
                                                                                                                            </div>
                                                                                                                            <div id="choices--choices-single-default2-kv-item-choice-16"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="16"
                                                                                                                                data-value="Choice 16"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2016
                                                                                                                            </div>
                                                                                                                            <div id="choices--choices-single-default2-kv-item-choice-17"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="17"
                                                                                                                                data-value="Choice 17"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2017
                                                                                                                            </div>
                                                                                                                            <div id="choices--choices-single-default2-kv-item-choice-18"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="18"
                                                                                                                                data-value="Choice 18"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2018
                                                                                                                            </div>
                                                                                                                            <div id="choices--choices-single-default2-kv-item-choice-19"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="19"
                                                                                                                                data-value="Choice 19"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2019
                                                                                                                            </div>
                                                                                                                            <div id="choices--choices-single-default2-kv-item-choice-20"
                                                                                                                                class="choices__item choices__item--choice is-selected choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="20"
                                                                                                                                data-value="Choice 20"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2020
                                                                                                                            </div>
                                                                                                                            <div id="choices--choices-single-default2-kv-item-choice-21"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="21"
                                                                                                                                data-value="Choice 21"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2021
                                                                                                                            </div>
                                                                                                                            <div id="choices--choices-single-default2-kv-item-choice-22"
                                                                                                                                class="choices__item choices__item--choice choices__item--selectable"
                                                                                                                                role="option"
                                                                                                                                data-choice=""
                                                                                                                                data-id="22"
                                                                                                                                data-value="Choice 22"
                                                                                                                                data-select-text="Press to select"
                                                                                                                                data-choice-selectable="">
                                                                                                                                2022
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <!--end col-->
                                                                                                        </div>
                                                                                                        <!--end row-->
                                                                                                    </div>
                                                                                                </div>
                                                                                                <!--end col-->
                                                                                                <div class="col-lg-12">
                                                                                                    <div class="mb-3">
                                                                                                        <label
                                                                                                            for="jobDescription"
                                                                                                            class="form-label">Job
                                                                                                            Description</label>
                                                                                                        <textarea
                                                                                                            class="form-control"
                                                                                                            id="jobDescription"
                                                                                                            rows="3"
                                                                                                            placeholder="Enter description">You always want to make sure that your fonts work well together and try to limit the number of fonts you use to three or less. Experiment and play around with the fonts that you already have in the software you're working with reputable font websites. </textarea>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <!--end col-->
                                                                                                <div
                                                                                                    class="hstack gap-2 justify-content-end">
                                                                                                    <a class="btn btn-success"
                                                                                                        href="javascript:deleteEl(1)">Delete</a>
                                                                                                </div>
                                                                                            </div>
                                                                                            <!--end row-->
                                                                                        </div>
                                                                                    </div>
                                                                                    <div id="newForm"
                                                                                        style="display: none;">

                                                                                    </div>
                                                                                    <div class="col-lg-12">
                                                                                        <div class="hstack gap-2">
                                                                                            <button type="submit"
                                                                                                class="btn btn-success">Update</button>
                                                                                            <a href="javascript:new_link()"
                                                                                                class="btn btn-primary">Add
                                                                                                New</a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <!--end col-->
                                                                                </form>
                                                                            </div>
                                                                            <!--end tab-pane-->
                                                                            <div class="tab-pane" id="privacy"
                                                                                role="tabpanel">
                                                                                <div class="mb-4 pb-2">
                                                                                    <h5
                                                                                        class="card-title text-decoration-underline mb-3">
                                                                                        Security:</h5>
                                                                                    <div
                                                                                        class="d-flex flex-column flex-sm-row mb-4 mb-sm-0">
                                                                                        <div class="flex-grow-1">
                                                                                            <h6 class="fs-14 mb-1">
                                                                                                Two-factor
                                                                                                Authentication</h6>
                                                                                            <p class="text-muted">
                                                                                                Two-factor
                                                                                                authentication is an
                                                                                                enhanced
                                                                                                security meansur. Once
                                                                                                enabled, you'll be
                                                                                                required to give
                                                                                                two types of
                                                                                                identification when you
                                                                                                log into Google
                                                                                                Authentication and SMS
                                                                                                are Supported.</p>
                                                                                        </div>
                                                                                        <div class="flex-shrink-0 ms-sm-3">
                                                                                            <a href="javascript:void(0);"
                                                                                                class="btn btn-sm btn-primary">Enable
                                                                                                Two-facor
                                                                                                Authentication</a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        class="d-flex flex-column flex-sm-row mb-4 mb-sm-0 mt-2">
                                                                                        <div class="flex-grow-1">
                                                                                            <h6 class="fs-14 mb-1">
                                                                                                Secondary Verification
                                                                                            </h6>
                                                                                            <p class="text-muted">The
                                                                                                first factor is a
                                                                                                password and the
                                                                                                second commonly includes
                                                                                                a text with a code sent
                                                                                                to your
                                                                                                smartphone, or
                                                                                                biometrics using your
                                                                                                fingerprint, face, or
                                                                                                retina.</p>
                                                                                        </div>
                                                                                        <div class="flex-shrink-0 ms-sm-3">
                                                                                            <a href="javascript:void(0);"
                                                                                                class="btn btn-sm btn-primary">Set
                                                                                                up secondary method</a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        class="d-flex flex-column flex-sm-row mb-4 mb-sm-0 mt-2">
                                                                                        <div class="flex-grow-1">
                                                                                            <h6 class="fs-14 mb-1">
                                                                                                Backup Codes</h6>
                                                                                            <p class="text-muted mb-sm-0">
                                                                                                A backup code is
                                                                                                automatically
                                                                                                generated for you when
                                                                                                you turn on two-factor
                                                                                                authentication
                                                                                                through your iOS or
                                                                                                Android Twitter app. You
                                                                                                can also
                                                                                                generate a backup code
                                                                                                on twitter.com.</p>
                                                                                        </div>
                                                                                        <div class="flex-shrink-0 ms-sm-3">
                                                                                            <a href="javascript:void(0);"
                                                                                                class="btn btn-sm btn-primary">Generate
                                                                                                backup codes</a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="mb-3">
                                                                                    <h5
                                                                                        class="card-title text-decoration-underline mb-3">
                                                                                        Application
                                                                                        Notifications:</h5>
                                                                                    <ul class="list-unstyled mb-0">
                                                                                        <li class="d-flex">
                                                                                            <div class="flex-grow-1">
                                                                                                <label for="directMessage"
                                                                                                    class="form-check-label fs-14">Direct
                                                                                                    messages</label>
                                                                                                <p class="text-muted">
                                                                                                    Messages from people
                                                                                                    you follow</p>
                                                                                            </div>
                                                                                            <div class="flex-shrink-0">
                                                                                                <div
                                                                                                    class="form-check form-switch">
                                                                                                    <input
                                                                                                        class="form-check-input"
                                                                                                        type="checkbox"
                                                                                                        role="switch"
                                                                                                        id="directMessage"
                                                                                                        checked="">
                                                                                                </div>
                                                                                            </div>
                                                                                        </li>
                                                                                        <li class="d-flex mt-2">
                                                                                            <div class="flex-grow-1">
                                                                                                <label
                                                                                                    class="form-check-label fs-14"
                                                                                                    for="desktopNotification">
                                                                                                    Show desktop
                                                                                                    notifications
                                                                                                </label>
                                                                                                <p class="text-muted">
                                                                                                    Choose the option
                                                                                                    you want as your
                                                                                                    default setting.
                                                                                                    Block a site: Next
                                                                                                    to "Not allowed to
                                                                                                    send notifications,"
                                                                                                    click Add.</p>
                                                                                            </div>
                                                                                            <div class="flex-shrink-0">
                                                                                                <div
                                                                                                    class="form-check form-switch">
                                                                                                    <input
                                                                                                        class="form-check-input"
                                                                                                        type="checkbox"
                                                                                                        role="switch"
                                                                                                        id="desktopNotification"
                                                                                                        checked="">
                                                                                                </div>
                                                                                            </div>
                                                                                        </li>
                                                                                        <li class="d-flex mt-2">
                                                                                            <div class="flex-grow-1">
                                                                                                <label
                                                                                                    class="form-check-label fs-14"
                                                                                                    for="emailNotification">
                                                                                                    Show email
                                                                                                    notifications
                                                                                                </label>
                                                                                                <p class="text-muted">
                                                                                                    Under Settings,
                                                                                                    choose
                                                                                                    Notifications.
                                                                                                    Under Select an
                                                                                                    account, choose the
                                                                                                    account to enable
                                                                                                    notifications for.
                                                                                                </p>
                                                                                            </div>
                                                                                            <div class="flex-shrink-0">
                                                                                                <div
                                                                                                    class="form-check form-switch">
                                                                                                    <input
                                                                                                        class="form-check-input"
                                                                                                        type="checkbox"
                                                                                                        role="switch"
                                                                                                        id="emailNotification">
                                                                                                </div>
                                                                                            </div>
                                                                                        </li>
                                                                                        <li class="d-flex mt-2">
                                                                                            <div class="flex-grow-1">
                                                                                                <label
                                                                                                    class="form-check-label fs-14"
                                                                                                    for="chatNotification">
                                                                                                    Show chat
                                                                                                    notifications
                                                                                                </label>
                                                                                                <p class="text-muted">To
                                                                                                    prevent duplicate
                                                                                                    mobile
                                                                                                    notifications from
                                                                                                    the Gmail and Chat
                                                                                                    apps, in settings,
                                                                                                    turn off Chat
                                                                                                    notifications.</p>
                                                                                            </div>
                                                                                            <div class="flex-shrink-0">
                                                                                                <div
                                                                                                    class="form-check form-switch">
                                                                                                    <input
                                                                                                        class="form-check-input"
                                                                                                        type="checkbox"
                                                                                                        role="switch"
                                                                                                        id="chatNotification">
                                                                                                </div>
                                                                                            </div>
                                                                                        </li>
                                                                                        <li class="d-flex mt-2">
                                                                                            <div class="flex-grow-1">
                                                                                                <label
                                                                                                    class="form-check-label fs-14"
                                                                                                    for="purchaesNotification">
                                                                                                    Show purchase
                                                                                                    notifications
                                                                                                </label>
                                                                                                <p class="text-muted">
                                                                                                    Get real-time
                                                                                                    purchase alerts to
                                                                                                    protect yourself
                                                                                                    from fraudulent
                                                                                                    charges.</p>
                                                                                            </div>
                                                                                            <div class="flex-shrink-0">
                                                                                                <div
                                                                                                    class="form-check form-switch">
                                                                                                    <input
                                                                                                        class="form-check-input"
                                                                                                        type="checkbox"
                                                                                                        role="switch"
                                                                                                        id="purchaesNotification">
                                                                                                </div>
                                                                                            </div>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div>
                                                                                    <h5
                                                                                        class="card-title text-decoration-underline mb-3">
                                                                                        Delete This
                                                                                        Account:</h5>
                                                                                    <p class="text-muted">Go to the Data
                                                                                        &amp; Privacy section of your
                                                                                        profile
                                                                                        Account. Scroll to "Your data
                                                                                        &amp; privacy options." Delete
                                                                                        your
                                                                                        Profile Account. Follow the
                                                                                        instructions to delete your
                                                                                        account :
                                                                                    </p>
                                                                                    <div>
                                                                                        <input type="password"
                                                                                            class="form-control"
                                                                                            id="passwordInput"
                                                                                            placeholder="Enter your password"
                                                                                            value="make@321654987"
                                                                                            style="max-width: 265px;">
                                                                                    </div>
                                                                                    <div class="hstack gap-2 mt-3">
                                                                                        <a href="javascript:void(0);"
                                                                                            class="btn btn-soft-primary">Close
                                                                                            &amp;
                                                                                            Delete This Account</a>
                                                                                        <a href="javascript:void(0);"
                                                                                            class="btn btn-light">Cancel</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <!--end tab-pane-->

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!--end tab-pane-->
                                                    <div class="tab-pane fade" id="documents" role="tabpanel">
                                                        <div class="card">
                                                            <div class="card-body">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!--end tab-pane-->
                                                </div>
                                                <!--end tab-content-->
                                            </div>
                                        </div>
                                        <!--end col-->
                                    </div>
                                    <!--end row-->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end row -->

                </div>
                <!-- end container -->
            </div>
            <!-- end auth page content -->
        </div>
        <!-- end auth-page-wrapper -->
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