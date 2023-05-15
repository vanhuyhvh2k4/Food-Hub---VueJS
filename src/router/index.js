import { createRouter, createWebHistory } from 'vue-router';
import Cookies from 'js-cookie';
import routesConfig from '@/config/routes.js';

const requiredAuth = (to, from ,next) => {
  const accessToken = Cookies.get("accessToken");
  if (!accessToken) {
    next({ name: 'auth', params: {}})
  } else {
    next();
  }
}

const routes = [
  {
    path: routesConfig.createShop,
    name: 'createShop',
    component: () => import(/* webpackChunkName: "createShop" */ '../views/CreateShop.vue'),
    beforeEnter: requiredAuth,
    meta: {
      // noNavigation: true,
      buttonAndTitle: true,
      backHome: true,
      noFixed: true
    }
  },
  {
    path: routesConfig.home,
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    beforeEnter: requiredAuth
  },
  {
    path: routesConfig.cart,
    name: 'cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue'),
    // beforeEnter: requiredAuth,
  },
  {
    path: routesConfig.shop,
    name: 'shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/Shop.vue'),
    beforeEnter: requiredAuth,
    meta: {
      noNavigation: true,
      onlyBtn: true,
      backHome: true,
      noFixed: true
    }
  },
  {
    path: routesConfig.detail,
    name: 'detail',
    component: () => import(/* webpackChunkName: "detail" */ '../views/Detail.vue'),
    beforeEnter: requiredAuth,
    meta: {
      noNavigation: true,
      onlyBtn: true,
      backHome: true,
      noFixed: true
    }
  },
  {
    path: routesConfig.favorite,
    name: 'favorite',
    component: () => import(/* webpackChunkName: "favorite" */ '../views/Favorite.vue'),
    beforeEnter: requiredAuth,
  },
  {
    path: routesConfig.auth,
    name: 'auth',
    component: () => import(/* webpackChunkName: "auth" */ '../views/Auth.vue'),
    meta: {
      layout: 'empty',
    }
  },
  {
    path: routesConfig.login,
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      layout: 'auth',
      path: 'login'
    }
  },
  {
    path: routesConfig.signup,
    name: 'signup',
    component: () => import(/* webpackChunkName: "signup" */ '../views/Register.vue'),
    meta: {
      layout: 'auth',
      path: 'signup'
    }
  },
  {
    path: routesConfig.forgot,
    name: 'forgot',
    component: () => import(/* webpackChunkName: "forgot" */ '../views/ForgotPassword.vue'),
    meta: {
      layout: 'auth',
      path: 'signup'
    }
  },
  {
    path: routesConfig.resetPassword,
    name: 'resetPassword',
    component: () => import(/* webpackChunkName: "resetPassword" */ '../views/ResetPassword.vue'),
    meta: {
      layout: 'auth',
      path: 'signup'
    }
  },
  {
    path: routesConfig.logout,
    name: 'logout',
    component: () => import(/* webpackChunkName: "logout" */ '../views/Logout.vue'),
    meta: {
      layout: 'empty',
    },
    beforeEnter: requiredAuth
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
