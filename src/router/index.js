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

// ??????????????????????????????
function getRoutes() {
    router.addRoutes(store.state.newRoutes)
}

//????????????A????????????????????????Login??????
router.beforeEach((to, from, next) => {
    if (getToken() !== 'undefined' && getToken()) {//?????????
        if (to.name == "login") {
            next("/index")
        } else {
            next()
        }
    } else if (to.name !== 'login') {
        //????????????
        next({name: 'login'}) //???????????????????????????????????????????????????
    } else next() //???????????????????????????????????????
})

export default router
*/
