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
        {
            path: '/exo-event-binding',
            name: 'ExoEventBinding',
            component: () => import('../views/exo/EventBinding.vue')
        },
        {
            path: '/exo-create-bug',
            name: 'ExoCreerBug',
            component: () => import('../views/exo/createBug.vue')
        },
        {
            path: '/exo-dynamic-styling',
            name: 'ExoDynamicStyling',
            component: () => import('../views/exo/DynamicStyling.vue')
        },
        {
            path: '/exo-dynamic-class',
            name: 'ExoDynamicClass',
            component: () => import('../views/exo/DynamicClass.vue')
        },
        {
            path: '/exo-v-for',
            name: 'ExoVFOR',
            component: () => import('../views/exo/V-for.vue')
        },
        {
            path: '/exo-v-if',
            name: 'ExoVIF',
            component: () => import('../views/exo/V-If.vue')
        },
        {
            path: '/exo-props',
            name: 'ExoProps',
            component: () => import('../views/exo/Friends.vue')
        },
        //! ----------------------------TP Views routes ----------------------------
        {
            path: '/tp-data-binding',
            name: 'TP-DataBinding',
            component: () => import('../views/tp/TP_DataBinding.vue')
        },
        {
            path: '/tp-event-binding',
            name: 'TP-EventBinding',
            component: () => import('../views/tp/TP_EventBinding.vue')
        },
        {
            path: '/tp-reactivite',
            name: 'TP-Reactivite',
            component: () => import('../views/tp/TP_Reactivite.vue')
        },
        {
            path: '/tp-dynamic-style',
            name: 'TP-DynamicStyle',
            component: () => import('../views/tp/TP_DynamicStyle.vue')
        },
    ]
});

export default router;