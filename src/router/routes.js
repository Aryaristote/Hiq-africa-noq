import store from "@/state/store";

export default [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/account/login.vue"),
    meta: {
      title: "Login",
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "default" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/account/register.vue"),
    meta: {
      title: "Register",
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "default" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/forgot-password",
    name: "Forgot password",
    component: () => import("../views/account/forgot-password.vue"),
    meta: {
      title: "Forgot Password",
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "default" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/",
    name: "default",
    meta: {
      title: "Dashboard",
      authRequired: true,
    },
    component: () => import("../views/dashboard/ecommerce/index.vue"),
  },
  {
    path: "/logout",
    name: "logout",
    meta: {
      title: "Logout", authRequired: true,
      beforeResolve(routeTo, routeFrom, next) {
        localStorage.clear();
        sessionStorage.clear();
        next();
      },
    },
    component: () => import("../views/auth/logout/basic")
  },
  {
    path: "/order",
    name: "shop",
    meta: {
      title: "Order Stock",
      authRequired: false,
    },
    component: () => import("../views/front/Home.vue"),
  },
  {
    path: "/order/dashboard",
    name: "order-dashboard",
    meta: {
      title: "Order Dashboard",
      authRequired: false,
    },
    component: () => import("../views/dashboard/ecommerce/dashboard"),
  },
  {
    path: "/order/checkout",
    name: "checkout",
    meta: {
      title: "Checkout",
      authRequired: false,
    },
    component: () => import("../views/dashboard/ecommerce/checkout"),
  },
  {
    path: "/onboard",
    name: "onboard",
    meta: {
      title: "Onboarding",
      authRequired: true,
    },
    component: () => import("../views/dashboard/ecommerce/onboard"),
  },
  {
    path: "/modal",
    name: "modal",
    meta: {
      title: "modal",
      authRequired: false,
    },
    component: () => import("../common/components/product/ProductInfo.vue"),
  },
];