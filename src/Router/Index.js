import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

/** Routes */
import AppView from '../components/AppView';
import ProductView from '../components/Pages/ProductView';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: AppView,
    },
    {
        path: '/product',
        name: 'Product',
        component: ProductView,
    },
];

export default new VueRouter({
    routes,
});