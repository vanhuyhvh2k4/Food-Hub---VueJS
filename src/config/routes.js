const routesConfig = {
    home: '/',
    cart: '/cart',
    auth: '/auth',
    login: '/login',
    signup: '/signup',
    forgot: '/forgot',
    resetPassword: '/forgot/reset/:email',
    shop: '/:shopName',
    logout: '/logout',
    detail: '/:shopName/:foodName',
    favorite: '/favorite',
    shopManager: '/shop',
    createShop: '/shop/create',
    profile: '/profile',
    newFood: '/shop/new-food',
    searchResult: '/search',
    checkout: '/checkout'
}

export default routesConfig;