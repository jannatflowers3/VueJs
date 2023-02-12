<template>
<Header/>
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link to="/" class="nav-link">Home</router-link> 
      </li>
      <li class="nav-item">
    
        <router-link to="/about" class="nav-link ">About</router-link>
      </li>
      <li class="nav-item">
    
        <router-link to="/news" class="nav-link ">News</router-link>
      </li>
      <li class="nav-item">
    
        <router-link to="/registration" class="nav-link ">Registration</router-link>
      </li>
      
      <li class="nav-item">
    
        <router-link to="/search" class="nav-link ">Search</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/contact" class="nav-link">Contact</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
 <router-view></router-view>

<Footer/>

</template>

<script>
import Header from './layouts/header.vue';
import Footer from './layouts/footer.vue';

// import  Sidebar from './layouts/leftsidebar.vue';
// import Leftsidebar from './layouts/rightsidebar.vue';
export default{
    components:{Header,Footer},
}
</script>
<style>


</style>