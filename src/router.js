import Vue from 'vue'
import Router from 'vue-router'
import Thumbnails from "./components/Thumbnails.vue"
import About from "./components/About.vue"

Vue.use(Router)

export default new Router ({
    routes: [

        {
            path:"/",
            name:"Thumbnail",
            component: Thumbnails
        }
        ,

        {
            path:"/about/:name",
            name:"about",
            component:About
        }
    ]
        
})