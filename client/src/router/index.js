import {createRouter,createWebHashHistory} from 'vue-router'
import stateList from '@/components/stateList'
import aboutSite from '@/components/aboutSite'
import stateMap from '@/components/stateMap'

export default createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            name:'stateList',
            component:stateList
        },
        {
            path:'/about',
            name:'aboutSite',
            component:aboutSite
        },
        {
            path:'/map/:state',
            name:'stateMap',
            component:stateMap
        }

    ]
})