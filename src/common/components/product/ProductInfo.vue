<script>
import { ref } from 'vue';
import { Thumbs } from 'swiper';

// import Layout from "../../../layouts/main.vue";
import appConfig from "../../../../app.config";
// import PageHeader from "@/components/page-header";

// import SwiperCore, { Pagination, Navigation } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

// SwiperCore.use([Pagination, Navigation]);

export default {
  props: ["product"],
  page: {
    title: "Products Details",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  setup() {
    const thumbsSwiper = ref(null);
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };
    return {
      Thumbs,
      thumbsSwiper,
      setThumbsSwiper,
    };

  },
  data() {
    return {
      title: "Products Details",
      items: [
        {
          text: "Ecommerce",
          href: "/",
        },
        {
          text: "Products Details",
          active: true,
        },
      ],
      productDetailsWidgets: [
        {
          id: 1,
          icon: "ri-money-dollar-circle-fill",
          label: "Unit Price",
          labelDetail: this.product && this.product.details && this.product.details.sales_price,
        },
        {
          id: 2,
          icon: "ri-file-copy-2-fill",
          label: "Min. Order",
          labelDetail: "100 Units",
        },
      ],
    };
  },
  components: {
    // Layout,
    // PageHeader,
    // Swiper,
    // SwiperSlide,
  },
};
</script>

<template>
  <b-col lg="12">
    <b-card no-body>
      <b-card-body>
        <b-row class="gx-lg-5">

          <b-col xl="12">
            <div class="mt-xl-0 mt-5">
              <div class="d-flex">
                <div class="flex-grow-1 text-center">
                  <h4> {{ product && product.name }} </h4>
                  <div class="d-flex flex-grow-1 gap-2 mb-3">
                    <b-link href="#" class="d-block">
                      <img :src="product && product.image_url" alt class="avatar-xl rounded object-cover" />
                    </b-link>
                  </div>
                  <div class="hstack gap-3 flex-wrap text-center">
                    <div>
                      <b-link href="#" class="text d-block">
                        {{ product && product.category && product.category.name }}</b-link>
                    </div>
                    <div class="vr"></div>
                    <div>
                      <b-link href="#" class="text d-block">
                        {{ product && product.brand && product.brand.name }}</b-link>
                    </div>
                    <div class="vr"></div>
                    <div class="text-muted">SKU: <span class="text-body fw-medium">
                        {{ product && product.xid }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>



              <b-row class="mt-4">
                <b-col lg="6" sm="6" v-for="(item, index) of productDetailsWidgets" :key="index">
                  <div class="p-2 border border-dashed rounded">
                    <div class="d-flex align-items-center">
                      <div class="avatar-sm me-2">
                        <div class="avatar-title rounded bg-transparent text-primary fs-24">
                          <i :class="`${item.icon}`"></i>
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <p class="text-muted mb-1">{{ item.label }} :</p>
                        <h5 class="mb-0">{{ item.labelDetail }}</h5>
                      </div>
                    </div>
                  </div>
                </b-col>
              </b-row>



              <div class="mt-4 text-muted text-center">
                <h5 class="fs-14">Description</h5>
                <p>{{ product && product.description }}</p>
              </div>

              <div class="product-content mt-5">
                <nav>
                  <ul class="nav nav-tabs nav-tabs-custom nav-primary" id="nav-tab" role="tablist">
                    <li class="nav-item">
                      <b-link class="nav-link active" id="nav-speci-tab" data-bs-toggle="tab" href="#nav-speci" role="tab"
                        aria-controls="nav-speci" aria-selected="true">Details</b-link>
                    </li>
                  </ul>
                </nav>
                <div class="tab-content border border-top-0 p-4" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="nav-speci" role="tabpanel" aria-labelledby="nav-speci-tab">
                    <div class="table-responsive">
                      <table class="table mb-0">
                        <tbody>
                          <tr>
                            <th scope="row">VAT</th>
                            <td>Inclusive</td>
                          </tr>
                          <tr>
                            <th scope="row">Branch</th>
                            <td>Main Branch</td>
                          </tr>
                          <tr>
                            <th scope="row" style="width: 200px">
                              Tax Rate % </th>
                            <td>18</td>
                          </tr>
                          <tr>
                            <th scope="row">Shipping</th>
                            <td>Self Pickup</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="nav-detail" role="tabpanel" aria-labelledby="nav-detail-tab">
                    <div>
                      <h5 class="font-size-16 mb-3">Tommy Hilfiger Sweatshirt
                        for Men (Pink) </h5>
                      <p>Tommy Hilfiger men striped pink sweatshirt. Crafted
                        with cotton. Material composition is 100% organic
                        cotton. This is one of the world’s leading designer
                        lifestyle brands and is internationally recognized
                        for celebrating the essence of classic American cool
                        style, featuring preppy with a twist designs.</p>
                      <div>
                        <p class="mb-2">
                          <i class="mdi mdi-circle-medium me-1 text-muted align-middle"></i>
                          Machine Wash
                        </p>
                        <p class="mb-2">
                          <i class="mdi mdi-circle-medium me-1 text-muted align-middle"></i>
                          Fit Type: Regular
                        </p>
                        <p class="mb-2">
                          <i class="mdi mdi-circle-medium me-1 text-muted align-middle"></i>
                          100% Cotton
                        </p>
                        <p class="mb-0">
                          <i class="mdi mdi-circle-medium me-1 text-muted align-middle"></i>
                          Long sleeve
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

             
            </div>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
  </b-col>
</template>
