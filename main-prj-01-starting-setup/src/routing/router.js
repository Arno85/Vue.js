import { createRouter, createWebHistory } from 'vue-router';
import CoachesList from '../pages/coaches/CoachesList.vue';
import CoachDetail from '../pages/coaches/CoachDetail.vue';
import CoachRegistration from '../pages/coaches/CoachRegistration.vue';
import ContactCoach from '../pages/requests/ContactCoach.vue';
import RequestReceived from '../pages/requests/RequestReceived.vue';
import UserAuth from '../pages/auth/UserAuth.vue';
import NotFound from '../pages/NotFound.vue';
import routes from './routes';
import store from '../store/index';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: routes.coaches
        },
        {
            path: routes.coaches,
            component: CoachesList
        },
        {
            path: `${routes.coaches}/:id`,
            component: CoachDetail,
            props: true,
            children: [
                {
                    path: routes.contact,
                    component: ContactCoach
                },
            ]
        },
        {
            path: routes.register,
            component: CoachRegistration,
            meta: { requiresAuth: true }
        },
        {
            path: routes.requests,
            component: RequestReceived,
            meta: { requiresAuth: true }
        },
        {
            path: routes.auth,
            component: UserAuth,
            meta: { requiresUnauth: true }
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        }
    ]
});

router.beforeEach((to, _, next) => {
    const isAuthenticated = store.getters.isAuthenticated;

    if (to.meta.requiresAuth && !isAuthenticated) {
        next('/auth');
    } else if (to.meta.requiresUnauth && isAuthenticated) {
        next('/');
    } else {
        next();
    }

});

export default router;