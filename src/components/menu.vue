<script>
import {
  layoutComputed
} from "@/state/helpers";
import {
  // SimpleBar
} from "simplebar-vue3";
import {
  // GridIcon,
  UsersIcon,
  // CommandIcon,
  // PackageIcon,
  // LayersIcon,
  // CopyIcon,
  // FileTextIcon,
  // DatabaseIcon,
  // PieChartIcon,
  // ArchiveIcon,
  // MapPinIcon,
  // Share2Icon,
  ActivityIcon,
  AtSignIcon,
// HeartIcon,
HomeIcon,
ShoppingCartIcon,
ShoppingBagIcon,
ClipboardIcon,
UserCheckIcon,
GlobeIcon,
ArrowRightCircleIcon,
ArrowLeftCircleIcon,
DollarSignIcon,
MonitorIcon,
SettingsIcon
} from "@zhuowenli/vue-feather-icons";

export default {
  components: {
    // SimpleBar,
    ActivityIcon,
    // GridIcon,
    UsersIcon,
    // CommandIcon,
    // PackageIcon,
    // LayersIcon,
    // CopyIcon,
    // FileTextIcon,
    // DatabaseIcon,
    // PieChartIcon,
    // ArchiveIcon,
    // MapPinIcon,
    // Share2Icon,
    // HeartIcon,
    HomeIcon,
    AtSignIcon,
    ShoppingCartIcon,
    ShoppingBagIcon,
    ClipboardIcon,
    UserCheckIcon,
    GlobeIcon,
    ArrowRightCircleIcon,
    ArrowLeftCircleIcon,
    DollarSignIcon,
    MonitorIcon,
    SettingsIcon
},
  data() {
    return {
      settings: {
        minScrollbarLength: 60,
      },
    };
  },
  computed: {
    ...layoutComputed,
    layoutType: {
      get() {
        return this.$store ? this.$store.state.layout.layoutType : {} || {};
      },
    },
  },

  watch: {
    $route: {
      handler: "onRoutechange",
      immediate: true,
      deep: true,
    },
  },

  mounted() {
    if (document.querySelectorAll(".navbar-nav .collapse")) {
      let collapses = document.querySelectorAll(".navbar-nav .collapse");

      collapses.forEach((collapse) => {
        // Hide sibling collapses on `show.bs.collapse`
        collapse.addEventListener("show.bs.collapse", (e) => {
          e.stopPropagation();
          let closestCollapse = collapse.parentElement.closest(".collapse");
          if (closestCollapse) {
            let siblingCollapses =
              closestCollapse.querySelectorAll(".collapse");
            siblingCollapses.forEach((siblingCollapse) => {
              if (siblingCollapse.classList.contains("show")) {
                siblingCollapse.classList.remove("show");
              }
            });
          } else {
            let getSiblings = (elem) => {
              // Setup siblings array and get the first sibling
              let siblings = [];
              let sibling = elem.parentNode.firstChild;
              // Loop through each sibling and push to the array
              while (sibling) {
                if (sibling.nodeType === 1 && sibling !== elem) {
                  siblings.push(sibling);
                }
                sibling = sibling.nextSibling;
              }
              return siblings;
            };
            let siblings = getSiblings(collapse.parentElement);
            siblings.forEach((item) => {
              if (item.childNodes.length > 2)
                item.firstElementChild.setAttribute("aria-expanded", "false");
              let ids = item.querySelectorAll("*[id]");
              ids.forEach((item1) => {
                item1.classList.remove("show");
                if (item1.childNodes.length > 2) {
                  let val = item1.querySelectorAll("ul li a");

                  val.forEach((subitem) => {
                    if (subitem.hasAttribute("aria-expanded"))
                      subitem.setAttribute("aria-expanded", "false");
                  });
                }
              });
            });
          }
        });

        // Hide nested collapses on `hide.bs.collapse`
        collapse.addEventListener("hide.bs.collapse", (e) => {
          e.stopPropagation();
          let childCollapses = collapse.querySelectorAll(".collapse");
          childCollapses.forEach((childCollapse) => {
            let childCollapseInstance = childCollapse;
            childCollapseInstance.style.display = "none";
          });
        });
      });
    }
  },

  methods: {
    onRoutechange(ele) {
      this.initActiveMenu(ele.path);
      if (document.getElementsByClassName("mm-active").length > 0) {
        const currentPosition = document.getElementsByClassName("mm-active")[0].offsetTop;
        if (currentPosition > 500)
          if (this.$refs.isSimplebar)
            this.$refs.isSimplebar.value.getScrollElement().scrollTop = currentPosition + 300;
      }
    },

    initActiveMenu(ele) {
      setTimeout(() => {
        if (document.querySelector("#navbar-nav")) {
          let a = document.querySelector("#navbar-nav").querySelector('[href="' + ele + '"]');
          if (a) {
            a.classList.add("active");
            let parentCollapseDiv = a.closest(".collapse.menu-dropdown");
            if (parentCollapseDiv) {
              parentCollapseDiv.classList.add("show");
              parentCollapseDiv.parentElement.children[0].classList.add("active");
              parentCollapseDiv.parentElement.children[0].setAttribute("aria-expanded", "true");
              if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")) {
                parentCollapseDiv.parentElement.closest(".collapse").classList.add("show");
                if (parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling)
                  parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.classList.add("active");
                const grandparent = parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.parentElement.closest(".collapse");
                if (grandparent && grandparent && grandparent.previousElementSibling) {
                  grandparent.previousElementSibling.classList.add("active");
                  grandparent.classList.add("show");
                }
              }
            }
          }
        }
      }, 0);
    },
  },
};
</script>   

<template>
  <b-container fluid>
    <div id="two-column-menu"></div>

    <template v-if="layoutType === 'twocolumn'">     
    </template>

    <template v-else>
      <ul class="navbar-nav h-100" id="navbar-nav">
        <li class="menu-title text-primary">
          <span data-key="t-menu"> {{ $t("t-menu") }}</span>
        </li>
        <li class="nav-item">
          <b-link class="nav-link menu-link" href="#sidebarDashboards" data-bs-toggle="collapse" role="button"
            aria-expanded="false" aria-controls="sidebarDashboards">
            <HomeIcon width="24" height="24"/>
            <span data-key="t-dashboards"> {{ $t("t-dashboards") }}</span>
          </b-link>
        </li>
        <!-- end Dashboard Menu -->
        <li class="nav-item">
          <b-link class="nav-link menu-link" href="#sidebarApps" data-bs-toggle="collapse" role="button"
            aria-expanded="false" aria-controls="sidebarApps">
            <AtSignIcon width="24" height="24"/>
            <span data-key="t-apps"> {{ $t("t-apps") }}</span>
          </b-link>
        </li>

        <li class="nav-item">
          <b-link class="nav-link menu-link" href="#sidebarApps" data-bs-toggle="collapse" role="button"
            aria-expanded="false" aria-controls="sidebarApps">
            <ActivityIcon width="24" height="24"/>
            <span> Reports</span>
          </b-link>
        </li>

        <li class="menu-title text-primary">
          <i class="ri-more-fill"></i>
          <span >Inventory</span>
        </li>

        <li class="nav-item">
          <b-link class="nav-link menu-link" href="#sidebarAuth" data-bs-toggle="collapse" role="button"
            aria-expanded="false" aria-controls="sidebarAuth">
            <ShoppingCartIcon width="24" height="24"/>
            <span data-key="t-authentication">{{
                $t("t-authentication")
            }}</span>
          </b-link>
          <div class="collapse menu-dropdown" id="sidebarAuth">
            <ul class="nav nav-sm flex-column">
              <li class="nav-item">
                <b-link href="#sidebarSignIn" class="nav-link" data-bs-toggle="collapse" role="button"
                  aria-expanded="false" aria-controls="sidebarSignIn" data-key="t-signin">{{ $t("t-signin") }}
                </b-link>
                <div class="collapse menu-dropdown" id="sidebarSignIn">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <router-link to="#" class="nav-link" data-key="t-basic">{{ $t("t-basic") }} </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="#" class="nav-link" data-key="t-cover">{{ $t("t-cover") }} </router-link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <b-link href="#sidebarSignUp" class="nav-link" data-bs-toggle="collapse" role="button"
                  aria-expanded="false" aria-controls="sidebarSignUp" data-key="t-signup">{{ $t("t-signup") }}
                </b-link>
                <div class="collapse menu-dropdown" id="sidebarSignUp">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <router-link to="#" class="nav-link" data-key="t-basic">{{ $t("t-basic") }} </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="#" class="nav-link" data-key="t-cover">{{ $t("t-cover") }} </router-link>
                    </li>
                  </ul>
                </div>
              </li>

              <li class="nav-item">
                <b-link href="#sidebarResetPass" class="nav-link" data-bs-toggle="collapse" role="button"
                  aria-expanded="false" aria-controls="sidebarResetPass" data-key="t-password-reset"> {{ $t("t-password-reset") }}
                </b-link>
                <div class="collapse menu-dropdown" id="sidebarResetPass">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <router-link to="#" class="nav-link" data-key="t-basic"> {{ $t("t-basic") }} </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="#" class="nav-link" data-key="t-cover"> {{ $t("t-cover") }} </router-link>
                    </li>
                  </ul>
                </div>
              </li>

              <li class="nav-item">
                <b-link href="#sidebarcreatepassword" class="nav-link" data-bs-toggle="collapse" role="button"
                  aria-expanded="false" aria-controls="sidebarcreatepassword" data-key="t-lock-screen"> {{ $t("t-password-create") }}
                </b-link>
                <div class="collapse menu-dropdown" id="sidebarcreatepassword">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <router-link to="#" class="nav-link" data-key="t-basic"> {{ $t("t-basic") }} </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="#" class="nav-link" data-key="t-cover"> {{ $t("t-cover") }} </router-link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <b-link href="#sidebarLockScreen" class="nav-link" data-bs-toggle="collapse" role="button"
                  aria-expanded="false" aria-controls="sidebarLockScreen" data-key="t-lock-screen"> {{ $t("t-lock-screen") }}
                </b-link>
                <div class="collapse menu-dropdown" id="sidebarLockScreen">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <router-link to="#" class="nav-link" data-key="t-basic"> {{ $t("t-basic") }} </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="#" class="nav-link" data-key="t-cover"> {{ $t("t-cover") }} </router-link>
                    </li>
                  </ul>
                </div>
              </li>

              <li class="nav-item">
                <b-link href="#sidebarLogout" class="nav-link" data-bs-toggle="collapse" role="button"
                  aria-expanded="false" aria-controls="sidebarLogout" data-key="t-logout">
                  {{ $t("t-logout") }}
                </b-link>
                <div class="collapse menu-dropdown" id="sidebarLogout">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <router-link to="#" class="nav-link" data-key="t-basic"> {{ $t("t-basic") }} </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="#" class="nav-link" data-key="t-cover"> {{ $t("t-cover") }} </router-link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <b-link href="#sidebarSuccessMsg" class="nav-link" data-bs-toggle="collapse" role="button"
                  aria-expanded="false" aria-controls="sidebarSuccessMsg" data-key="t-success-message">
                  {{ $t("t-success-message") }}
                </b-link>
                <div class="collapse menu-dropdown" id="sidebarSuccessMsg">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <router-link to="#" class="nav-link" data-key="t-basic"> {{ $t("t-basic") }}</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="#" class="nav-link" data-key="t-cover"> {{ $t("t-cover") }} </router-link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <b-link href="#sidebarTwoStep" class="nav-link" data-bs-toggle="collapse" role="button"
                  aria-expanded="false" aria-controls="sidebarTwoStep" data-key="t-two-step-verification">
                  {{ $t("t-two-step-verification") }}
                </b-link>
                <div class="collapse menu-dropdown" id="sidebarTwoStep">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <router-link to="#" class="nav-link" data-key="t-basic">
                        {{ $t("t-basic") }} </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="#" class="nav-link" data-key="t-cover">
                        {{ $t("t-cover") }} </router-link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <b-link href="#sidebarErrors" class="nav-link" data-bs-toggle="collapse" role="button"
                  aria-expanded="false" aria-controls="sidebarErrors" data-key="t-errors">
                  {{ $t("t-errors") }}
                </b-link>
                <div class="collapse menu-dropdown" id="sidebarErrors">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <router-link to="#" class="nav-link" data-key="t-404-basic">
                        {{ $t("t-404-basic") }} </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="#" class="nav-link" data-key="t-404-cover">
                        {{ $t("t-404-cover") }} </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="#" class="nav-link" data-key="t-404-alt">
                        {{ $t("t-404-alt") }} </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="#" class="nav-link" data-key="t-500">
                        {{ $t("t-500") }}
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="#" class="nav-link" data-key="t-offline-page">
                        {{ $t("t-offline-page") }}
                      </router-link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>

        <li class="nav-item">
          <b-link class="nav-link menu-link" href="#sidebarPages" data-bs-toggle="collapse" role="button"
            aria-expanded="false" aria-controls="sidebarPages">
            <ShoppingBagIcon width="24" height="24"/>
            <span data-key="t-pages">{{ $t("t-pages") }}</span>
          </b-link>
          <div class="collapse menu-dropdown" id="sidebarPages">
            <ul class="nav nav-sm flex-column">
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-starter">{{ $t("t-starter") }}
                </router-link>
              </li>
              <li class="nav-item">
                <b-link href="#sidebarProfile" class="nav-link" data-bs-toggle="collapse" role="button"
                  aria-expanded="false" aria-controls="sidebarProfile" data-key="t-profile">{{ $t("t-profile") }}
                </b-link>
                <div class="collapse menu-dropdown" id="sidebarProfile">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <router-link to="#" class="nav-link" data-key="t-simple-page"> {{ $t("t-simple-page") }} </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="#" class="nav-link" data-key="t-settings">
                        {{ $t("t-settings") }}
                      </router-link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-team">
                  {{ $t("t-team") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-timeline">
                  {{ $t("t-timeline") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-faqs">
                  {{ $t("t-faqs") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-pricing">
                  {{ $t("t-pricing") }}
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-maintenance">  {{ $t("t-maintenance") }} </router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-coming-soon"> {{ $t("t-coming-soon") }} </router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-sitemap">
                  {{ $t("t-sitemap") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-search-results">
                  {{ $t("t-search-results") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-privacy-policy">
                  {{ $t("t-privacy-policy") }}
                  <b-badge variant="success" class="badge-pill" data-key="t-new">{{
                      $t("t-new")
                  }}</b-badge>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-term-conditions">
                  {{ $t("t-term-conditions") }}
                  <b-badge variant="success" class="badge-pill" data-key="t-new">{{
                      $t("t-new")
                  }}</b-badge>
                </router-link>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <b-link href="#sidebarlanding" class="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false"
            aria-controls="sidebarlanding" data-key="t-projects">
            <ClipboardIcon width="24" height="24"/>
            <span data-key="t-landing">{{ $t("t-landing") }}</span>
          </b-link>
          <div class="collapse menu-dropdown" id="sidebarlanding">
            <ul class="nav nav-sm flex-column">
              <li class="nav-item">
                <b-link class="nav-link menu-link" target="_blank" href="#">
                  <span data-key="t-landing">{{ $t("t-one-page") }}</span>
                </b-link>
              </li>
              <li class="nav-item">
                <b-link class="nav-link menu-link" target="_blank" href="#">
                  <span data-key="t-landing">{{ $t("t-nft-landing") }}</span>
                </b-link>
              </li>
              <li class="nav-item">
                <b-link class="nav-link menu-link" target="_blank" href="#">
                  <span data-key="t-landing">{{ $t("t-job") }}</span>
                  <b-badge variant="success" class="badge-pill" data-key="t-new">{{
                      $t("t-new")
                  }}</b-badge>
                </b-link>
              </li>

            </ul>
          </div>
        </li>
        <li class="menu-title text-primary">
          <i class="ri-more-fill"></i>
          <span>Network</span>
        </li>
        <li class="nav-item">
          <b-link class="nav-link menu-link" href="#sidebarUI" data-bs-toggle="collapse" role="button"
            aria-expanded="false" aria-controls="sidebarUI">
            <UsersIcon width="24" height="24"/>
            <span>Party Manager</span>
          </b-link>
          <div class="collapse menu-dropdown mega-dropdown-menu" id="sidebarUI">
            <b-row>
              <b-col col lg="4">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <router-link to="#" class="nav-link" data-key="t-alerts">{{ $t("t-alerts") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="#" class="nav-link" data-key="t-badges">{{ $t("t-badges") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="#" class="nav-link" data-key="t-buttons">{{ $t("t-buttons") }}
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="#" class="nav-link" data-key="t-colors">{{ $t("t-colors") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="#" class="nav-link" data-key="t-cards">{{ $t("t-cards") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="#" class="nav-link" data-key="t-carousel">{{ $t("t-carousel") }}
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="#" class="nav-link" data-key="t-dropdowns">{{ $t("t-dropdowns") }}
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="#" class="nav-link" data-key="t-grid">{{ $t("t-grid") }}</router-link>
                  </li>
                </ul>
              </b-col>
              <b-col col lg="4">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <router-link to="#" class="nav-link" data-key="t-images">{{ $t("t-images") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="#" class="nav-link" data-key="t-tabs">{{ $t("t-tabs") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="#" class="nav-link" data-key="t-accordion-collapse">
                      {{ $t("t-accordion-collapse") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="#" class="nav-link" data-key="t-modals">{{ $t("t-modals") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="#" class="nav-link" data-key="t-offcanvas">{{ $t("t-offcanvas") }}
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="#" class="nav-link" data-key="t-placeholders">
                      {{ $t("t-placeholders") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="#" class="nav-link" data-key="t-progress">{{ $t("t-progress") }}
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="#" class="nav-link" data-key="t-notifications">
                      {{ $t("t-notifications") }}</router-link>
                  </li>
                </ul>
              </b-col>
              <b-col col lg="4">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <router-link to="#" class="nav-link" data-key="t-media-object">{{ $t("t-media-object") }} </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="#" class="nav-link" data-key="t-embed-video"> {{ $t("t-embed-video") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="#" class="nav-link" data-key="t-typography">{{ $t("t-typography") }}
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="#" class="nav-link" data-key="t-lists">{{ $t("t-lists") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="#" class="nav-link" data-key="t-general">{{ $t("t-general") }}
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="#" class="nav-link" data-key="t-ribbons">{{ $t("t-ribbons") }}
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="#" class="nav-link" data-key="t-utilities">{{ $t("t-utilities") }}
                    </router-link>
                  </li>
                </ul>
              </b-col>
            </b-row>
          </div>
        </li>

        <li class="nav-item">
          <b-link class="nav-link menu-link" href="#sidebarAdvanceUI" data-bs-toggle="collapse" role="button"
            aria-expanded="false" aria-controls="sidebarAdvanceUI">
            <UserCheckIcon width="24" height="24"/>
            <span>Staff Manager</span>

          </b-link>
          <div class="collapse menu-dropdown" id="sidebarAdvanceUI">
            <ul class="nav nav-sm flex-column">
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-sweet-alerts">{{ $t("t-sweet-alerts") }}</router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-scrollbar">{{ $t("t-scrollbar") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-animation">{{ $t("t-animation") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-swiper-slider"> {{ $t("t-swiper-slider") }}</router-link>
              </li>

              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-highlight">{{ $t("t-highlight") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-scrollSpy">{{ $t("t-scrollSpy") }}
                </router-link>
              </li>
            </ul>
          </div>
        </li>

        <li class="nav-item">
          <b-link class="nav-link menu-link" href="#sidebarAdvanceUI" data-bs-toggle="collapse" role="button"
            aria-expanded="false" aria-controls="sidebarAdvanceUI">
            <GlobeIcon width="24" height="24"/>
            <span>Marketplace</span>

          </b-link>
          <div class="collapse menu-dropdown" id="sidebarAdvanceUI">
            <ul class="nav nav-sm flex-column">
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-sweet-alerts">{{ $t("t-sweet-alerts") }}</router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-scrollbar">{{ $t("t-scrollbar") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-animation">{{ $t("t-animation") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-swiper-slider"> {{ $t("t-swiper-slider") }}</router-link>
              </li>

              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-highlight">{{ $t("t-highlight") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-scrollSpy">{{ $t("t-scrollSpy") }}
                </router-link>
              </li>
            </ul>
          </div>
        </li>

        <li class="menu-title text-primary">
          <i class="ri-more-fill"></i>
          <span>Accounts</span>
        </li>

        <li class="nav-item">
          <router-link class="nav-link menu-link" to="#">
            <ArrowRightCircleIcon width="24" height="24"/>
            <span>Purchase Manager</span>
          </router-link>
        </li>

        <li class="nav-item">
          <b-link class="nav-link menu-link" href="#sidebarForms" data-bs-toggle="collapse" role="button"
            aria-expanded="false" aria-controls="sidebarForms">
            <ArrowLeftCircleIcon width="24" height="24"/>
            <span >Expense Manager</span>
          </b-link>
          <div class="collapse menu-dropdown" id="sidebarForms">
            <ul class="nav nav-sm flex-column">
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-basic-elements"> {{ $t("t-basic-elements") }}</router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-form-select">{{ $t("t-form-select") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-checkboxs-radios">
                  {{ $t("t-checkboxs-radios") }}</router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-pickers">
                  {{ $t("t-pickers") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-input-masks">{{ $t("t-input-masks") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-advanced">
                  {{ $t("t-advanced") }}</router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-range-slider"> {{ $t("t-range-slider") }} </router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-validation">{{ $t("t-validation") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-wizard">{{ $t("t-wizard") }}</router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-editors">{{ $t("t-editors") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-file-uploads"> {{ $t("t-file-uploads") }}</router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-form-layouts">{{ $t("t-form-layouts") }}
                </router-link>
              </li>
            </ul>
          </div>
        </li>

        <li class="nav-item">
          <b-link class="nav-link menu-link" href="#sidebarTables" data-bs-toggle="collapse" role="button"
            aria-expanded="false" aria-controls="sidebarTables">
            <DollarSignIcon width="24" height="24"/>
            <span>Payments</span>
          </b-link>
          <div class="collapse menu-dropdown" id="sidebarTables">
            <ul class="nav nav-sm flex-column">
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-basic-tables">{{ $t("t-basic-tables") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-grid-js">{{ $t("t-grid-js") }}
                </router-link>
              </li>
            </ul>
          </div>
        </li>

        <li class="menu-title text-primary">
          <i class="ri-more-fill"></i>
          <span>Admin</span>
        </li>

        <li class="nav-item">
          <b-link class="nav-link menu-link" href="#sidebarCharts" data-bs-toggle="collapse" role="button"
            aria-expanded="false" aria-controls="sidebarCharts">
            <MonitorIcon width="24" height="24"/>
            <span data-key="t-charts">Online Manager</span>
          </b-link>
          <div class="collapse menu-dropdown" id="sidebarCharts">
            <ul class="nav nav-sm flex-column">
              <li class="nav-item">
                <b-link href="#sidebarApexcharts" class="nav-link" data-bs-toggle="collapse" role="button"
                  aria-expanded="false" aria-controls="sidebarApexcharts" data-key="t-apexcharts"> {{ $t("t-apexcharts") }}
                </b-link>
                <div class="collapse menu-dropdown" id="sidebarApexcharts">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <router-link to="#" class="nav-link" data-key="t-line">{{ $t("t-line") }} </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="#" class="nav-link" data-key="t-area"> {{ $t("t-area") }} </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="#" class="nav-link" data-key="t-column"> {{ $t("t-column") }}</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="#" class="nav-link" data-key="t-bar">
                        {{ $t("t-bar") }}
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="#" class="nav-link" data-key="t-mixed"> {{ $t("t-mixed") }} </router-link>
                    </li>

                    <li class="nav-item">
                      <router-link to="#" class="nav-link" data-key="t-candlstick">
                        {{ $t("t-candlstick") }}
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="#" class="nav-link" data-key="t-boxplot"> {{ $t("t-boxplot") }} </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="#" class="nav-link" data-key="t-bubble"> {{ $t("t-bubble") }}  </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="#" class="nav-link" data-key="t-scatter"> {{ $t("t-scatter") }} </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="#" class="nav-link" data-key="t-heatmap">  {{ $t("t-heatmap") }} </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="#" class="nav-link" data-key="t-treemap"> {{ $t("t-treemap") }}  </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="#" class="nav-link" data-key="t-pie">
                        {{ $t("t-pie") }}
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="#" class="nav-link" data-key="t-radialbar">
                        {{ $t("t-radialbar") }}
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="#" class="nav-link" data-key="t-radar"> {{ $t("t-radar") }} </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="#" class="nav-link" data-key="t-polar-area"> {{ $t("t-polar-area") }} </router-link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-chartjs">{{ $t("t-chartjs") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-echarts">{{ $t("t-echarts") }}
                </router-link>
              </li>
            </ul>
          </div>
        </li>

        <li class="nav-item">
          <b-link class="nav-link menu-link" href="#sidebarIcons" data-bs-toggle="collapse" role="button"
            aria-expanded="false" aria-controls="sidebarIcons">
            <SettingsIcon width="24" height="24"/>
            <span>Settings</span>
          </b-link>
          <div class="collapse menu-dropdown" id="sidebarIcons">
            <ul class="nav nav-sm flex-column">
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-remix">{{ $t("t-remix") }}</router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-boxicons">{{ $t("t-boxicons") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-material-design">
                  {{ $t("t-material-design") }}</router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-line-awesome"> {{ $t("t-line-awesome") }}</router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-feather">{{ $t("t-feather") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link" data-key="t-feather">{{ $t("t-crypto-svg") }}
                </router-link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </template>
  </b-container>
</template>