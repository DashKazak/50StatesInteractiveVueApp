import {createRouter,createWebHashHistory} from 'vue-router'
import stateList from '@/components/stateList'
import aboutSite from '@/components/aboutSite'
import stateMap from '@/components/stateMap'
import statesVisited from '@/components/statesVisited'
import PageNotFound from '@/components/PageNotFound'

//router describes a URL for each page. Each page is associated with a component(component can have a child component, like stateDetail is child of stateList). With router we can make apps with multiple pages. Router is like a heart, paths are veins are organs are components
//this is where mapping is defined
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
            //Uses :state parameter so this routewill be used to route each state like this /map/Minnesota
            path:'/map/:state',
            name:'stateMap',
            component:stateMap
        },

        //order is important
        {
            path:'/visited',
            name:'statesVisited',
            component:statesVisited
        },
        {
            path:'/:pathMatch(.*)*', //match anything that's not one of the routes above 
            name:'PageNotFound',
            component:PageNotFound
        }

        



    ]
})