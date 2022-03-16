import {createRouter, createWebHashHistory} from 'vue-router'
import Login from "@/views/Login";
import Index from "@/views/Index";
import ShowStudentInfo from "@/views/systemStudents/ShowStudentInfo";
import createWork from "@/views/course/createWork";


const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHashHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login,
        },
        {
            path: '/index',
            name: 'index',
            component: Index,
            children: [
                {
                    path: '/showStudentInfo',
                    name: 'showStudentInfo',
                    component: ShowStudentInfo,
                },
                {
                    path: '/createCourse',
                    name: 'createCourse',
                    component: createWork,
                },
            ]
        },
    ],
})

export default router


/*

import {createRouter,createWebHashHistory} from 'vue-router'
import Login from "../views/Login";
import {getToken} from "@/utils/auth";
import Index from "../views/Index";
import store from "../vuex/store";
import ShowStudentInfo from "../views/systemStudents/ShowStudentInfo";
import createWork from "../views/course/createWork";

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },

    {
        path: '/index',
        name: 'index',
        component: Index,
        children: [
            {
                path: '/showStudentInfo',
                name: 'showStudentInfo',
                component: ShowStudentInfo,
            },
            {
                path: '/createCourse',
                name: 'createCourse',
                component: createWork,
            },
        ]
    },



]

const router = createRouter({
    history: createWebHashHistory(),
    // mode: 'history',
    routes
})

// 根据菜单动态生成路由
function getRoutes() {
    router.addRoutes(store.state.newRoutes)
}

//假如用户A没有登录，访问了Login页面
router.beforeEach((to, from, next) => {
    if (getToken() !== 'undefined' && getToken()) {//已登录
        if (to.name == "login") {
            next("/index")
        } else {
            next()
        }
    } else if (to.name !== 'login') {
        //没有登录
        next({name: 'login'}) //如果不是登陆页面，重定向到登陆页面
    } else next() //如果是登陆页面，就直接放行
})

export default router
*/
