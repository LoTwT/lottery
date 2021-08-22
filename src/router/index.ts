import { createRouter, createWebHistory } from "vue-router"

import Login from "@/views/Login.vue"
import Admin from "@/views/Admin.vue"
import User from "@/views/User.vue"

export default createRouter({
    history: createWebHistory("/"),
    routes: [
        { path: "/", component: Login },
        { path: "/admin", component: Admin, name: "admin" },
        { path: "/user", component: User, name: "user" },
    ],
})