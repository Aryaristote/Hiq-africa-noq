<script>
// import Lottie from "@/components/widgets/lottie.vue";
import animationData from "@/components/widgets/hrqwmuhr.json";
import animationData1 from "@/components/widgets/lupuorrc.json";
import animationData2 from "@/components/widgets/tdrtiskw.json";
import animationData3 from "@/components/widgets/zpxybbhl.json";
import animationData4 from "@/components/widgets/pithnlch.json";
import animationData5 from "@/components/widgets/tqywkdcz.json";

import 'prismjs';
import 'prismjs/themes/prism.css';

export default {
    data() {
        return {
            title: "Modals",
            items: [{
                text: "Base UI",
                href: "/",
            },
            {
                text: "Modals",
                active: true,
            },
            ],
            defaultOptions: {
                animationData: animationData
            },
            defaultOptions1: {
                animationData: animationData1
            },
            defaultOptions2: {
                animationData: animationData2
            },
            defaultOptions3: {
                animationData: animationData3
            },
            defaultOptions4: {
                animationData: animationData4
            },
            defaultOptions5: {
                animationData: animationData5
            },
            modalShow: true,
            modalShow1: false,
            modalShow2: false,
            modalShow3: false,
            modalShow4: false,
            modalShow5: false,
            modalShow6: false,
            modalShow7: false,
            modalShow8: false,
            modalShow9: false,
            modalShow10: false,
            modalShow11: false,
            modalShow12: false,
            modalShow13: false,
            modalShow14: false,
            modalShow15: false,
            modalShow16: false,
            modalShow17: false,
            modalShow18: false,
            modalShow19: false,
            modalShow20: false,
            modalShow21: false,
            modalShow22: false,
            modalShow23: false,
            modalShow24: false,
            modalShow25: false,
            modalShow26: false,
            modalShow27: false,
            modalShow28: false,
            modalShow29: false,
            modalShow30: false,
            modalShow31: false,
        };
    },
    name: "Modals",
    components: {
        // lottie: Lottie,
    },
    mounted() {
        const checkbox = document.getElementsByClassName("code-switcher");
        Array.from(checkbox).forEach((check) => {
            check.addEventListener('change', () => {
                const card = check.closest('.card');
                const preview = card.querySelector(".live-preview");
                const code = card.querySelector(".code-view");
                if (check.checked) {
                    // do this
                    preview.classList.add("d-none");
                    code.classList.remove("d-none");
                } else {
                    // do that
                    preview.classList.remove("d-none");
                    code.classList.add("d-none");
                }
            });
        });
    },
    methods: {
        changecustomerName(e) {
            const msg = document.querySelector(".varyingcontentModal");
            const customerName = document.getElementById("customer-name");
            this.modalShow6 = !this.modalShow6,
                msg.innerText = "New message to " + e;
            customerName.value = e;
        },

        toggleModal() {
            this.modalShow30 = !this.modalShow30;
            this.modalShow31 = !this.modalShow31;
        }
    },
};
</script>

<template>
    <div class="live-preview">
        <div>
            <div class="hstack gap-2 flex-wrap">
                <b-button variant="btn btn-outline-primary btn-sm" @click="modalShow20 = !modalShow20"> Active Orders
                     <span class="badge bg-success ms-1">2</span>
                </b-button>
            </div>

            <b-modal v-model="modalShow20" hide-footer title="Active Orders" modal-class="flip"
                class="v-modal-custom fw-bold" centered>
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1"> Items </b-card-title>
                        <div class="flex-shrink-0">
                            <div class="dropdown card-header-dropdown">
                                <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <span class="fw-semibold text-uppercase fs-12">Order Total -</span><span
                                        class="text-primary"> Rwf 250,000</span>
                                </b-link>
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <div class="table-responsive table-card">
                            <table class="table table-hover table-centered align-middle table-nowrap mb-0">
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <div class="avatar-sm bg-light rounded p-1 me-2">
                                                    <img src="@/assets/images/products/img-1.png" alt=""
                                                        class="img-fluid d-block" />
                                                </div>
                                                <div>
                                                    <h5 class="fs-14 my-1">
                                                        <router-link to="/ecommerce/product-details"
                                                            class="text-reset">Branded
                                                            T-Shirts</router-link>
                                                    </h5>
                                                    <span class="text-muted">Rwf 1500</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h5 class="fs-14 my-1 fw-normal">62</h5>
                                            <span class="text-muted">Quantity</span>
                                        </td>
                                        <td>
                                            <h5 class="fs-14 my-1 fw-normal">$1,798</h5>
                                            <span class="text-muted">Amount</span>
                                        </td>
                                        <td>
                                            <h5 class="fs-14 my-1 fw-normal"><span class="badge badge-soft-danger">
                                                Remove
                                            </span> </h5>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <div class="avatar-sm bg-light rounded p-1 me-2">
                                                    <img src="@/assets/images/products/img-2.png" alt=""
                                                        class="img-fluid d-block" />
                                                </div>
                                                <div>
                                                    <h5 class="fs-14 my-1">
                                                        <router-link to="/ecommerce/product-details"
                                                            class="text-reset">Bentwood
                                                            Chair</router-link>
                                                    </h5>
                                                    <span class="text-muted">Rwf 2500</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h5 class="fs-14 my-1 fw-normal">35</h5>
                                            <span class="text-muted">Quantity</span>
                                        </td>
                                        <td>
                                            <h5 class="fs-14 my-1 fw-normal">$2982</h5>
                                            <span class="text-muted">Amount</span>
                                        </td>
                                        <td>
                                            <h5 class="fs-14 my-1 fw-normal"><span class="badge badge-soft-danger">
                                                Remove
                                            </span> </h5>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </b-card-body>
                </b-card>
                <div class="modal-footer v-modal-footer">
                    <b-button type="button" variant="light" @click="modalShow20 = false">Back
                    </b-button>
                    <b-button type="button" variant="success">Checkout</b-button>
                </div>
            </b-modal>
        </div>
    </div>
    <!-- <b-row>
        <b-col lg="12">
            <b-card no-body>

                <b-card-body>
                    
                </b-card-body>

            </b-card>

        </b-col>
    </b-row> -->
</template>