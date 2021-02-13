import { createStore } from 'vuex';
import productsModule from './modules/products/index';
import cartModule from './modules/cart/index';
import authModule from './modules/auth/index';

const store = createStore({
    modules: {
        products: productsModule,
        cart: cartModule,
        auth: authModule
    }
});

export default store;