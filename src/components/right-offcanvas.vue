<script>
// import Layout from "../../src/layouts/main.vue";
// import PageHeader from "@/components/page-header";
import {
  SimpleBar
} from "simplebar-vue3";
import ProductInfo from '@/common/components/product/ProductInfo'

import 'prismjs';
import 'prismjs/themes/prism.css';

export default {
    props: ["currentProduct"],
    data() {
        return {
            title: "Offcanvas",
            items: [
                {
                    text: "Base UI",
                    href: "/",
                },
                {
                    text: "Offcanvas",
                    active: true,
                },
            ],
        };
    },
    name: "Offcanvas",
    components: {
        ProductInfo,
        SimpleBar
        // Layout,
        // PageHeader,
    },
};
</script>

<template>
    <b-row>
        <b-col lg="12">
            <div class="offcanvas offcanvas-start" data-bs-scroll="true"  tabindex="-1" id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel">
                <div class="offcanvas-body p-0">
                    <SimpleBar data-simplebar style="height: 100%;">
                        <ProductInfo :product="currentProduct" :key="currentProduct && currentProduct.xid"/>                        
                    </SimpleBar>
                </div>
                <div class="offcanvas-foorter border p-3 text-center">
                    <b-link href="javascript:void(0);" class="btn btn-outline-primary" style="float: left;">
                       Add To Order                        
                    </b-link>
                    <b-link href="javascript:void(0);" class="btn btn-success" style="float: right;">
                       Order Now
                    </b-link>
                </div>
            </div>
        </b-col>
    </b-row>
</template>

