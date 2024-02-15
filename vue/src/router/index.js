import { createRouter, createWebHistory } from "vue-router";
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Todo from '../views/Todo.vue';
import NotFound from '../views/404.vue';
import store from "@/store";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/todos',
            name: 'Todos',
            component: Todo,
            meta: { requiresAuth: true }
        },
        {
            path: '/:catchAll(.*)',
            component: NotFound
          }
        
    ]
})

router.beforeEach((to, from, next) =>{
    if (to.meta.requiresAuth && !store.state.user.token) {
        next({name: 'Login'});
    }else{
        next();
    }
})

export default router;