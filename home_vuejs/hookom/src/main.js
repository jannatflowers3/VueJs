import { createApp } from 'vue';
import App from './App.vue';
import {createRouter,createWebHistory} from 'vue-router';
// import './assets/main.css'
import Home from './pages/Home.vue';
// import About from './pages/About.vue';
const routes= [
    {path: '/',component:Home},
    // {path: '/about',component:About},
]
const router =createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass:'active'
  })


// createApp(App).mount('#app')

const app = createApp(App);
// app.use(store);
app.use(router);
app.mount('#app');

