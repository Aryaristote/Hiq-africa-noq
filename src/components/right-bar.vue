<script>
localStorage.setItem("rightbar_isopen", false);
import { layoutMethods, layoutComputed } from "@/state/helpers";
import { SimpleBar } from "simplebar-vue3";
import { useStore } from "vuex";
/**
 * Right sidebar component
 */
export default {
  components: {
    SimpleBar,
  },
  setup() {
    const store = useStore();
    const cartItems = store.state.cart.cartItems;
    // console.log(store.getters)
    

    const clearCart = () => {
      store.commit("cart/removeCartItems");
    };

    const removeFromCart = (index) => {
      store.commit("cart/removeFromCart", index);
    };

    return {
      cartItems,
      clearCart,
      removeFromCart
      // cartTotal
    }
  },
  data() {
    return {
      config: {
        handler: this.handleRightBarClick,
        middleware: this.middleware,
        events: ["click"],
      },
    };
  },
  methods: {
    ...layoutMethods,
    hide() {
      this.$parent.toggleRightSidebar();
    },
    handleRightBarClick() {
      this.$parent.hideRightSidebar();
    },
    middleware(event) {
      if (event.target.classList)
        return !event.target.classList.contains("toggle-right");
    },
    removeExtraFade() {
      let fade = document.getElementsByClassName('offcanvas-backdrop fade show');
      for (let i = 0; i < fade.length; i++) {
        while (fade.length > 1) {
          fade[i].remove();
        }
      }
    },

    topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

  },
  mounted() {

    let backtoTop = document.getElementById("back-to-top");

    if (backtoTop) {
      backtoTop = document.getElementById("back-to-top");
      window.onscroll = function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          backtoTop.style.display = "block";
        } else {
          backtoTop.style.display = "none";
        }
      };
    }

    let rightbar_isopen = localStorage.getItem('rightbar_isopen');
    if (rightbar_isopen == 'true') {
      document.getElementById('mdi-cog').click();
      localStorage.setItem("rightbar_isopen", false);
    }
    var setpreloader = document.getElementById("preloader");
    if (localStorage.getItem('data-preloader') && localStorage.getItem('data-preloader') == 'enable') {
      document.documentElement.setAttribute("data-preloader", "enable");
      if (setpreloader) {
        setTimeout(function () {
          setpreloader.style.opacity = "0";
          setpreloader.style.visibility = "hidden";
        }, 1000);
      }
    } else {
      document.documentElement.setAttribute("data-preloader", "disable");
      if (setpreloader) {
        setpreloader.style.opacity = "0";
        setpreloader.style.visibility = "hidden";
      }
    }
    if (document.getElementById('collapseBgGradient')) {
      Array.from(document.querySelectorAll("#collapseBgGradient .form-check input")).forEach(function () {
        if (document.querySelector("[data-bs-target='#collapseBgGradient']")) {
          document.querySelector("[data-bs-target='#collapseBgGradient']").addEventListener('click', function () {
            document.getElementById("sidebar-color-gradient").click();
          });
        }
      });
    }

    Array.from(document.querySelectorAll("[name='data-sidebar']")).forEach(function (elem) {
      if (document.querySelector("[data-bs-target='#collapseBgGradient']")) {
        if (document.querySelector("#collapseBgGradient .form-check input:checked")) {
          document.querySelector("[data-bs-target='#collapseBgGradient']").classList.add("active");
        } else {
          document.querySelector("[data-bs-target='#collapseBgGradient']").classList.remove("active");
          document.getElementById('collapseBgGradient').classList.remove('show');
        }

        elem.addEventListener("change", function () {
          if (document.querySelector("#collapseBgGradient .form-check input:checked")) {
            document.querySelector("[data-bs-target='#collapseBgGradient']").classList.add("active");
          } else {
            document.getElementById('collapseBgGradient').classList.remove('show');
            document.querySelector("[data-bs-target='#collapseBgGradient']").classList.remove("active");
          }
        });
      }
    });
  },
  computed: {
    ...layoutComputed,
    layoutType: {
      get() {
        return this.$store ? this.$store.state.layout.layoutType : {} || {};
      },
      set(layout) {
        localStorage.setItem("rightbar_isopen", true);
        this.changeLayoutType({
          layoutType: layout,
        });
      },
    },
    layoutWidth: {
      get() {
        return this.$store ? this.$store.state.layout.layoutWidth : {} || {};
      },
      set(width) {
        this.changeLayoutWidth({
          layoutWidth: width,
        });
      },
    },
    topbar: {
      get() {
        return this.$store ? this.$store.state.layout.topbar : {} || {};
      },
      set(topbar) {
        this.changeTopbar({
          topbar: topbar,
        });
      },
    },
    sidebarSize: {
      get() {
        return this.$store ? this.$store.state.layout.sidebarSize : {} || {};
      },
      set(type) {
        return this.changeSidebarSize({
          sidebarSize: type,
        });
      },
    },
    position: {
      get() {
        return this.$store ? this.$store.state.layout.position : {} || {};
      },
      set(position) {
        return this.changePosition({
          position: position,
        });
      },
    },
    sidebarView: {
      get() {
        return this.$store ? this.$store.state.layout.sidebarView : {} || {};
      },
      set(sidebarView) {
        return this.changeSidebarView({
          sidebarView: sidebarView,
        });
      },
    },
    sidebarColor: {
      get() {
        return this.$store ? this.$store.state.layout.sidebarColor : {} || {};
      },
      set(sidebarColor) {
        return this.changeSidebarColor({
          sidebarColor: sidebarColor,
        });
      },
    },
    sidebarImage: {
      get() {
        return this.$store ? this.$store.state.layout.sidebarImage : {} || {};
      },
      set(sidebarImage) {
        return this.changeSidebarImage({
          sidebarImage: sidebarImage,
        });
      },
    },
    preloader: {
      get() {
        return this.$store ? this.$store.state.layout.preloader : {} || {};
      },
      set(preloader) {
        return this.changePreloader({
          preloader: preloader,
        });
      },
    },
    mode: {
      get() {
        return this.$store ? this.$store.state.layout.mode : {} || {};
      },
      set(mode) {
        return this.changeMode({
          mode: mode,
        });
      },
    },
  },
  watch: {
    mode: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "dark":
              document.documentElement.setAttribute("data-layout-mode", "dark");
              break;
            case "light":
              document.documentElement.setAttribute(
                "data-layout-mode",
                "light"
              );
              break;
          }
        }
      },
    },
    sidebarColor: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "dark":
              document.documentElement.setAttribute("data-sidebar", "dark");
              break;
            case "light":
              document.documentElement.setAttribute("data-sidebar", "light");
              break;
            case "gradient":
              document.documentElement.setAttribute("data-sidebar", "gradient");
              break;
            case "gradient-2":
              document.documentElement.setAttribute("data-sidebar", "gradient-2");
              break;
            case "gradient-3":
              document.documentElement.setAttribute("data-sidebar", "gradient-3");
              break;
            case "gradient-4":
              document.documentElement.setAttribute("data-sidebar", "gradient-4");
              break;
          }
        }
      },
    },
    preloader: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          localStorage.setItem('data-preloader', newVal);
        }
      },
    },
    sidebarImage: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "img-1":
              document.documentElement.setAttribute("data-sidebar-image", "img-1");
              break;
            case "img-2":
              document.documentElement.setAttribute("data-sidebar-image", "img-2");
              break;
            case "img-3":
              document.documentElement.setAttribute("data-sidebar-image", "img-3");
              break;
            case "img-4":
              document.documentElement.setAttribute("data-sidebar-image", "img-4");
              break;
            case "none":
              document.documentElement.setAttribute("data-sidebar-image", "none");
              break;
          }
        }
      },
    },
    sidebarView: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "detached":
              document.documentElement.setAttribute(
                "data-layout-style",
                "detached"
              );
              break;
            case "default":
              document.documentElement.setAttribute(
                "data-layout-style",
                "default"
              );
              break;
          }
        }
      },
    },
    position: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "fixed":
              document.documentElement.setAttribute(
                "data-layout-position",
                "fixed"
              );
              break;
            case "scrollable":
              document.documentElement.setAttribute(
                "data-layout-position",
                "scrollable"
              );
              break;
          }
        }
      },
    },
    sidebarSize: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "lg":
              document.documentElement.setAttribute("data-sidebar-size", "lg");
              break;
            case "sm":
              document.documentElement.setAttribute("data-sidebar-size", "sm");
              break;
            case "md":
              document.documentElement.setAttribute("data-sidebar-size", "md");
              break;
            case "sm-hover":
              document.documentElement.setAttribute(
                "data-sidebar-size",
                "sm-hover"
              );
              break;
          }
        }
      },
    },
    topbar: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "light":
              document.documentElement.setAttribute("data-topbar", "light");
              break;
            case "dark":
              document.documentElement.setAttribute("data-topbar", "dark");
              break;
          }
        }
      },
    },
    layoutWidth: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "fluid":
              document.documentElement.setAttribute(
                "data-layout-width",
                "fluid"
              );
              break;
            case "boxed":
              document.documentElement.setAttribute(
                "data-layout-width",
                "boxed"
              );
              break;
          }
        }
      },
    },
    layoutType: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "horizontal":
              document.documentElement.setAttribute(
                "data-layout",
                "horizontal"
              );
              break;
            case "vertical":
              document.documentElement.setAttribute("data-layout", "vertical");
              break;
            case "twocolumn":
              document.documentElement.setAttribute("data-layout", "twocolumn");
              break;
          }
        }
      },
    },
  },
};
</script>

<template>
  <div>
    <div id="preloader">
      <div id="status">
        <div class="spinner-border text-primary avatar-sm" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>

    <div class="customizer-setting d-none d-md-block">
      <div class="btn-primary btn-rounded shadow-lg btn btn-icon btn-lg p-2" data-bs-toggle="offcanvas"
        data-bs-target="#theme-settings-offcanvas" aria-controls="theme-settings-offcanvas" id="mdi-cog">
        <i class="mdi mdi-lightning-bolt-outline fs-22"></i>
      </div>
    </div>
    <div class="offcanvas offcanvas-end border-0" tabindex="-1" id="theme-settings-offcanvas">
      <div class="d-flex align-items-center bg-primary bg-gradient p-3 offcanvas-header">
        <h5 class="m-0 me-2 text-white">Order Queue</h5>
        <b-button type="button" variant="white" class="btn-close btn-close-white ms-auto" data-bs-dismiss="offcanvas"
          aria-label="Close"></b-button>
      </div>
      <div class="offcanvas-body p-0">

        <SimpleBar data-simplebar style="height: 100%;">
          <b-card no-body>
            <b-card-header class="align-items-center d-flex">
              <b-card-title class="mb-0 flex-grow-1">
                <span class="text-primary">{{ cartItems && cartItems.length || 0 }}</span> Item(s), 
                <span class="text-primary">9</span>  Unit(s)
              </b-card-title>
              <div class="flex-shrink-0">
                <div class="dropdown card-header-dropdown">
                  <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    <span class="fw-semibold text-uppercase fs-12">Total - </span><span class="text-primary"> Rwf
                      {{ cartTotal || 0 }}</span>
                  </b-link>
                </div>
              </div>
            </b-card-header>

            <b-card-body>
              <div class="table-responsive table-card">
                <SimpleBar data-simplebar style="height: 100%;">
                  <table class="table table-hover table-centered align-middle table-nowrap mb-0">
                    <tbody>
                      <tr v-for="item in cartItems" :key="item.xid">
                        <td>
                          <div class="d-flex align-items-center">
                            <div class="avatar-sm bg-light rounded p-1 me-2">
                              <img :src=item.image_url alt="" class="img-fluid d-block" />
                            </div>
                            <div>
                              <h5 class="fs-14 my-1">
                                <span class="text-reset"> {{ item && item.name }}</span>
                              </h5>
                              <span class="text-muted">Rwf {{ item && item.details && item.details.sales_price }}</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <h5 class="fs-14 my-1 fw-normal">Quantity</h5>
                          <span class="text-muted">{{ item && item.cart_quantity }}</span>
                        </td>
                        <td>
                          <h5 class="fs-14 my-1 fw-normal">Amount</h5>
                          <span class="text-muted"> Rwf {{ item.details.sales_price * item.cart_quantity }} </span>
                        </td>
                        <td>
                          <h5 class="fs-14 my-1 fw-normal" style="cursor: pointer;"><span class="badge badge-soft-danger"
                            @click="removeFromCart(item.xid)">
                              Remove
                            </span> </h5>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </SimpleBar>
              </div>
            </b-card-body>
          </b-card>
        </SimpleBar>
      </div>
      <div class="offcanvas-footer border-top p-3 text-center">
        <b-row>
          <b-col cols="6">
            <button type="button" class="btn btn-light w-100" data-bs-toggle="dropdown" aria-expanded="false">
              Clear Queue
            </button>
            <ul class="dropdown-menu">
              Are you sure?
              <li @click="clearCart()"><a class="dropdown-item" href="#">Yes</a></li>
            </ul>
          </b-col>
          <b-col cols="6">
            <b-button type="button" variant="success" class="w-100"> Checkout </b-button>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>
  