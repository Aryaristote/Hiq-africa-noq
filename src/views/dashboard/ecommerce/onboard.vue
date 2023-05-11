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
                        <div class="text-center mt-sm-5 pt-4 mb-4">
                            <div class="col-xl-12">
                                <!-- Info Alert -->
                                <div class="alert alert-warning alert-border-left alert-dismissible fade show" role="alert">
                                    <i class="ri-alert-line me-3 align-middle"></i>
                                    Your company default settings not completed. Follow below setups to complete your
                                    company basic settings
                                    <button type="button" class="btn-close" data-bs-dismiss="alert"
                                        aria-label="Close"></button>
                                </div>
                                <div class="card">
                                    <div class="card-header">
                                        <h4 class="card-title mb-0">Setup Not Completed</h4>
                                    </div><!-- end card header -->
                                    <div class="card-body">
                                        <form action="#" class="form-steps" autocomplete="off">
                                            <div class="text-center pt-3 pb-4 mb-1">
                                                <h5>Set Up Your Business</h5>
                                            </div>
                                            <div id="custom-progress-bar" class="progress-nav mb-4">
                                                <div class="progress" style="height: 1px;">
                                                    <div class="progress-bar" role="progressbar" style="width: 0%;"
                                                        aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>

                                                <ul class="nav nav-pills progress-bar-tab custom-nav" role="tablist">
                                                    <li class="nav-item" role="presentation">
                                                        <button class="nav-link rounded-pill active"
                                                            data-progressbar="custom-progress-bar" id="warehouse-tab"
                                                            data-bs-toggle="pill" data-bs-target="#warehouse" type="button"
                                                            role="tab" aria-controls="warehouse"
                                                            aria-selected="true">1</button>
                                                        Branch
                                                    </li>
                                                    <li class="nav-item" role="presentation">
                                                        <button class="nav-link rounded-pill"
                                                            data-progressbar="custom-progress-bar" id="currency-tab"
                                                            data-bs-toggle="pill" data-bs-target="#currency" type="button"
                                                            role="tab" aria-controls="currency"
                                                            aria-selected="false">2</button>
                                                        Currency
                                                    </li>
                                                    <li class="nav-item" role="presentation">
                                                        <button class="nav-link rounded-pill"
                                                            data-progressbar="custom-progress-bar" id="payment-tab"
                                                            data-bs-toggle="pill" data-bs-target="#payment" type="button"
                                                            role="tab" aria-controls="payment"
                                                            aria-selected="false">3</button>
                                                        Payment
                                                    </li>
                                                    <li class="nav-item" role="presentation">
                                                        <button class="nav-link rounded-pill"
                                                            data-progressbar="custom-progress-bar" id="brand-tab"
                                                            data-bs-toggle="pill" data-bs-target="#brand" type="button"
                                                            role="tab" aria-controls="brand"
                                                            aria-selected="false">4</button>
                                                        Brand
                                                    </li>
                                                </ul>
                                            </div>

                                            <div class="tab-content">
                                                <div class="tab-pane fade show active" id="warehouse" role="tabpanel"
                                                    aria-labelledby="pills-gen-info-tab">
                                                    <div>
                                                        <div class="mb-4">
                                                            <div>
                                                                <h5 class="mb-1">Add First Branch</h5>
                                                                <p class="text-muted">Set up your main branch</p>
                                                                <button type="button"
                                                                    class="btn btn-primary btn-label right nexttab nexttab"
                                                                    data-nexttab="currency-tab"><i
                                                                        class="ri-add-fill label-icon align-middle fs-16 ms-2"></i>
                                                                    Add Branch</button>
                                                            </div>
                                                            <div class="mt-4">
                                                                <div class="text-center">
                                                                    <div
                                                                        class="profile-user position-relative d-inline-block mx-auto mb-2">
                                                                        <img src="assets/images/users/user-dummy-img.jpg"
                                                                            class="rounded-circle avatar-lg img-thumbnail user-profile-image"
                                                                            alt="user-profile-image">
                                                                        <div
                                                                            class="avatar-xs p-0 rounded-circle profile-photo-edit">
                                                                            <input id="profile-img-file-input" type="file"
                                                                                class="profile-img-file-input"
                                                                                accept="image/png, image/jpeg">
                                                                            <label for="profile-img-file-input"
                                                                                class="profile-photo-edit avatar-xs">
                                                                                <span
                                                                                    class="avatar-title rounded-circle bg-light text-body">
                                                                                    <i class="ri-pencil-fill"></i>
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <h5 class="fs-14">My Company Branch</h5>

                                                                </div>
                                                                <div>
                                                                    <label class="form-label"
                                                                        for="gen-info-description-input">+254 704 146
                                                                        627</label>
                                                                </div>
                                                                <div>

                                                                </div>
                                                            </div>
                                                            <div class="d-flex align-items-start gap-3 mt-4">
                                                                <button type="button"
                                                                    class="btn btn-success btn-label right ms-auto nexttab nexttab"
                                                                    data-nexttab="payment-tab"><i
                                                                        class="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>Next</button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <!-- end tab pane -->

                                                <div class="tab-pane fade" id="currency" role="tabpanel"
                                                    aria-labelledby="currency-tab">
                                                    <div>
                                                        <h5 class="mb-1">Add Your Currency</h5>
                                                        <p class="text-muted">Set up your main currency</p>
                                                        <button type="button"
                                                            class="btn btn-primary btn-label right nexttab nexttab"
                                                            data-nexttab="currency-tab"><i
                                                                class="ri-add-fill label-icon align-middle fs-16 ms-2"></i>
                                                            Add Currency</button>
                                                    </div>
                                                    <div class="mt-4">
                                                        <div class="text-center">
                                                            <div
                                                                class="profile-user position-relative d-inline-block mx-auto mb-2">
                                                                <img src="https://ui-avatars.com/api/?name=$&background=00559e&length=1&color=fff"
                                                                    class="rounded-circle avatar-lg img-thumbnail user-profile-image"
                                                                    alt="user-profile-image">
                                                                <div
                                                                    class="avatar-xs p-0 rounded-circle profile-photo-edit">
                                                                    <input id="profile-img-file-input" type="file"
                                                                        class="profile-img-file-input"
                                                                        accept="image/png, image/jpeg">
                                                                    <label for="profile-img-file-input"
                                                                        class="profile-photo-edit avatar-xs">
                                                                        <span
                                                                            class="avatar-title rounded-circle bg-light text-body">
                                                                            <i class="ri-camera-fill"></i>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <h5 class="fs-14">RWF</h5>

                                                        </div>
                                                        <div>
                                                            <label class="form-label"
                                                                for="gen-info-description-input">Rwandan Francs</label>
                                                        </div>
                                                        <div>

                                                        </div>
                                                    </div>
                                                    <div class="d-flex align-items-start gap-3 mt-4">
                                                        <button type="button"
                                                            class="btn btn-link text-decoration-none btn-label previestab"
                                                            data-previous="pills-gen-info-tab"><i
                                                                class="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i>
                                                            Back</button>
                                                        <button type="button"
                                                            class="btn btn-success btn-label right ms-auto nexttab nexttab"
                                                            data-nexttab="payment-tab"><i
                                                                class="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>Next</button>
                                                    </div>
                                                </div>
                                                <!-- end tab pane -->

                                                <div class="tab-pane fade" id="payment" role="tabpanel"
                                                    aria-labelledby="payment-tab">
                                                    <div>
                                                        <h5 class="mb-1">Add Your Payment Method</h5>
                                                        <p class="text-muted">Set up your main payment method</p>
                                                        <button type="button"
                                                            class="btn btn-primary btn-label right nexttab nexttab"
                                                            data-nexttab="currency-tab"><i
                                                                class="ri-add-fill label-icon align-middle fs-16 ms-2"></i>
                                                            Add Payment Method</button>
                                                    </div>
                                                    <div class="mt-4">
                                                        <div class="text-center">
                                                            <div
                                                                class="profile-user position-relative d-inline-block mx-auto mb-2">
                                                                <img src="assets/images/users/user-dummy-img.jpg"
                                                                    class="rounded-circle avatar-lg img-thumbnail user-profile-image"
                                                                    alt="user-profile-image">
                                                                <div
                                                                    class="avatar-xs p-0 rounded-circle profile-photo-edit">
                                                                    <input id="profile-img-file-input" type="file"
                                                                        class="profile-img-file-input"
                                                                        accept="image/png, image/jpeg">
                                                                    <label for="profile-img-file-input"
                                                                        class="profile-photo-edit avatar-xs">
                                                                        <span
                                                                            class="avatar-title rounded-circle bg-light text-body">
                                                                            <i class="ri-pencil-fill"></i>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <h5 class="fs-14">MTN MoMo</h5>

                                                        </div>
                                                        <div>
                                                            <label class="form-label" for="gen-info-description-input">Momo
                                                                Pay 87 98
                                                                47</label>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex align-items-start gap-3 mt-4">
                                                        <button type="button"
                                                            class="btn btn-link text-decoration-none btn-label previestab"
                                                            data-previous="pills-gen-info-tab"><i
                                                                class="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i>
                                                            Back</button>
                                                        <button type="button"
                                                            class="btn btn-success btn-label right ms-auto nexttab nexttab"
                                                            data-nexttab="payment-tab"><i
                                                                class="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>Next</button>
                                                    </div>
                                                </div>
                                                <!-- end tab pane -->
                                                <div class="tab-pane fade" id="brand" role="tabpanel"
                                                    aria-labelledby="payment-tab">
                                                    <div>
                                                        <div class="mb-4">
                                                            <h5 class="mb-1">Brand your Company</h5>
                                                            <p class="text-muted">Customize your brand theme</p>
                                                            <button type="button"
                                                                class="btn btn-primary btn-label right nexttab nexttab"
                                                                data-nexttab="currency-tab"><i
                                                                    class="ri-add-fill label-icon align-middle fs-16 ms-2"></i>
                                                                Add Branding</button>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-xxl-3">
                                                                <div class="card">
                                                                    <div class="card-body">
                                                                        <h5 class="card-title mb-3">Company Info</h5>
                                                                        <div class="table-responsive">
                                                                            <table class="table table-borderless mb-0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <th class="ps-0" scope="row">
                                                                                            Name:
                                                                                        </th>
                                                                                        <td class="text-muted">Anna
                                                                                            Adame</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th class="ps-0" scope="row">
                                                                                            Email:
                                                                                        </th>
                                                                                        <td class="text-muted">+(1)
                                                                                            987 6543</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th class="ps-0" scope="row">
                                                                                            Phone
                                                                                        </th>
                                                                                        <td class="text-muted">
                                                                                            daveadame@HiQ Africa.com
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div><!-- end card body -->
                                                                </div>
                                                            </div>

                                                            <div class="col-xxl-9">

                                                                <div class="card">
                                                                    <div class="card-body">
                                                                        <h5 class="card-title mb-3">Summary</h5>
                                                                        <div class="row">
                                                                            <div class="col-6 col-md-4">
                                                                                <div class="d-flex mt-4">
                                                                                    <div
                                                                                        class="flex-shrink-0 avatar-xs align-self-center me-3">
                                                                                        <div
                                                                                            class="avatar-title bg-light rounded-circle fs-16 text-primary">
                                                                                            <i class="ri-user-2-fill"></i>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        class="flex-grow-1 overflow-hidden">
                                                                                        <p class="mb-1">Main Branch :
                                                                                        </p>
                                                                                        <h6 class="text-truncate mb-0">
                                                                                            Lead Designer /
                                                                                            Developer</h6>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <!--end col-->
                                                                            <div class="col-6 col-md-4">
                                                                                <div class="d-flex mt-4">
                                                                                    <div
                                                                                        class="flex-shrink-0 avatar-xs align-self-center me-3">
                                                                                        <div
                                                                                            class="avatar-title bg-light rounded-circle fs-16 text-primary">
                                                                                            <i class="ri-global-line"></i>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        class="flex-grow-1 overflow-hidden">
                                                                                        <p class="mb-1">Currency :</p>
                                                                                        <a href="#"
                                                                                            class="fw-semibold">www.HiQ
                                                                                            Africa.com</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <!--end col-->
                                                                            <div class="col-6 col-md-4">
                                                                                <div class="d-flex mt-4">
                                                                                    <div
                                                                                        class="flex-shrink-0 avatar-xs align-self-center me-3">
                                                                                        <div
                                                                                            class="avatar-title bg-light rounded-circle fs-16 text-primary">
                                                                                            <i class="ri-global-line"></i>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        class="flex-grow-1 overflow-hidden">
                                                                                        <p class="mb-1">Payment Method :</p>
                                                                                        <a href="#"
                                                                                            class="fw-semibold">www.HiQ
                                                                                            Africa.com</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <!--end col-->
                                                                        </div>

                                                                        <!--end row-->
                                                                    </div>
                                                                    <!--end card-body-->
                                                                </div><!-- end card -->



                                                            </div>
                                                        </div>
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