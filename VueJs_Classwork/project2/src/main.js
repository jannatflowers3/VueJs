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
import Cart from './pages/Cart.vue';
import { createStore } from 'vuex';
const routes = [
     {path: '/',component:Home},
     {path: '/About',component:About },
     {path:'/contact',component:Contact},
     {path:'/news',component:News},
     {path:'/product',component:Product},
     {path:'/search',component:Search},
     {path:'/cart',component:Cart}

     
]

const store = createStore({
  state() {
    return {
         counter:0,
    }
  },
  // mutations: {
  //   increment(state) {
  //     state.counter++
  //   }
  // }
  // number increment hoi

  mutations: {
    increment(state,payload) {
      state.counter = state.counter +payload;
    }
  },
  getters: {
    getCounter(state) {
      return state.counter
    },
    getNormalizedCounter(state, getter) {
      // get the getCounter() return
      // value from the object
      if (getter.getCounter >= 50) {
        return 50
      }
      return getter.getCounter
    }


  }
});

const router =createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass:'active'
  })

// import './assets/main.css'

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
