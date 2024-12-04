import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            alias: "/home",
            name: "Home",
            component: () => import("../views/HomeView.vue")
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('../views/NotFoundView.vue')
        },
        //! ----------------------------Lessons Views routes ----------------------------
        {
            path: '/lesson-interpolation',
            name: 'LessonInterpolation',
            component: () => import('../views/lessons/LessonTextInterpolation.vue')
        },
        //! ----------------------------Exos Views routes ----------------------------
        {
            path: '/exo-interpolation',
            name: 'ExoInterpolation',
            component: () => import('../views/exo/TextInterpolation.vue')
        }
    ]
});

export default router;