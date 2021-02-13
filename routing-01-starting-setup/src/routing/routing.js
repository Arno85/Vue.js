import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from '../pages/TeamsList.vue';
import UsersList from '../pages/UsersList.vue';
import UsersFooter from '../pages/UsersFooter.vue';
import TeamMembers from '../pages/TeamMembers.vue';
import TeamsFooter from '../pages/TeamsFooter.vue';
import NotFound from '../pages/NotFound.vue';
import routes from './routes';

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    scrollBehavior(_, _2, savedPosition) {
        // console.log(to, from, savedPosition);
        if (savedPosition) {
            return savedPosition;
        }

        return {
            left: 0,
            top: 0
        }
    },
    routes: [
        {
            path: '/',
            redirect: routes.teams
        },
        {
            name: 'teams',
            path: routes.teams,
            meta: { needsAuth: true },
            components: {
                default: TeamsList,
                footer: TeamsFooter
            },
            children: [
                {
                    name: 'team-members',
                    path: ':id',
                    component: TeamMembers,
                    props: true
                },
            ]
        },
        {
            path: routes.users,
            components: {
                default: UsersList,
                footer: UsersFooter
            },
            beforeEnter(to, from, next) {
                console.log('-- On route: beforeEnter --');
                console.log(to);
                console.log(from);
                next();
            }
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        }
    ]
});

// CanActivate before each route
// beforeEnter(to, from, next) in routing for specific route (see routing.js /users)
// OR beforeRouteEnter(to, from, next) in component for specific route (see UsersList.vue)
router.beforeEach((to, from, next) => {
    console.log('-- main,js: Global Before Each --');
    console.log(to);
    console.log(from);
    if (to.meta.needsAuth) {
        console.log('Need Auth!');
    }
    next();
    // next(false) to deny
    // next({ path: '*/route'}) to redirect to specifi route
});

// Send analytics data for example
router.afterEach((to, from) => {
    console.log('-- main,js: Global After Each --');
    console.log(to);
    console.log(from);
});

export default router;