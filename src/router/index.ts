import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: 'login',
            component: LoginView
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/usuarios',
            name: 'usuario',
            component: () => import('../views/UsuarioView.vue')
        },
        {
            path:'/usuario-detalle/:id',
            component: ()=> import('../views/UsuarioDetalleView.vue')
        }
    ]
})

export default router