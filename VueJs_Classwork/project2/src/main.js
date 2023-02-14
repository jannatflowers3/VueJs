import { createApp } from 'vue';   //application create
// vue theke file newa hoise tia ./vue dewa hoi nai
// import App from './components/App.vue'
// import App from './components/App1.vue'
// import App from './components/Reactivity.vue'
// import App from './components/Reactivity3.vue'
// import App from './components/computated1.vue'
// import App from './components/computated2.vue'
// import App from './components/stylebinding1.vue'
// import App from './components/condition_rendaring.vue'
// import App from './components/List_rendering.vue'
// import App from './components/Event1.vue'
// import App from './components/Event2.vue'
// import App from './components/app.vue'
import App from './app.vue'; //main component
import {createRouter,createWebHistory} from 'vue-router';
import Home from "./pages/Home.vue";
import About from './pages/About.vue';
import Contact from './pages/Contact.vue';
import News from './pages/News.vue';
import Product from './pages/Product.vue';
import Search from './pages/Search.vue';

const routes = [
     {path: '/',component:Home},
     {path: '/About',component:About },
     {path:'/contact',component:Contact},
     {path:'/news',component:News},
     {path:'/product',component:Product},
     {path:'/search',component:Search}

     
]


const router =createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass:'active'
  })

// import './assets/main.css'

createApp(App).use(router).mount('#app')
