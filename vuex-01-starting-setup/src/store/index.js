import { createStore } from 'vuex';
import authModule from './modules/auth/index';
import conterModule from './modules/counter/index';

const store = createStore({
    modules: {
        auth: authModule,
        counter: conterModule
    }
});

export default store;