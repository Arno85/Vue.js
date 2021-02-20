import { createRouter, createWebHistory } from 'vue-router';
import CoachesList from '../pages/coaches/CoachesList.vue';
import CoachDetail from '../pages/coaches/CoachDetail.vue';
import CoachRegistration from '../pages/coaches/CoachRegistration.vue';
import ContactCoach from '../pages/requests/ContactCoach.vue';
import RequestReceived from '../pages/requests/RequestReceived.vue';
import NotFound from '../pages/NotFound.vue';
import routes from './routes';

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
            component: CoachRegistration
        },
        {
            path: routes.requests,
            component: RequestReceived
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        }
    ]
});

export default router;