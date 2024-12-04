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
        {
            path: '/lesson-v-html',
            name: 'LessonVHtml',
            component: () => import('../views/lessons/LessonDirective_v-html.vue')
        },
        {
            path: '/lesson-v-bind',
            name: 'LessonVBind',
            component: () => import('../views/lessons/LessonAttributeBinding.vue')
        },
        //! ----------------------------Exos Views routes ----------------------------
        {
            path: '/exo-interpolation',
            name: 'ExoInterpolation',
            component: () => import('../views/exo/TextInterpolation.vue')
        },
        {
            path: '/exo-interpolation-functions',
            name: 'ExoInterpolationFunctions',
            component: () => import('../views/exo/TextInterpolationEtFunctions.vue')
        },
        //! ----------------------------TP Views routes ----------------------------
        {
            path: '/tp-data-binding',
            name: 'TP-DataBinding',
            component: () => import('../views/tp/TP_DataBinding.vue')
        },
    ]
});

export default router;