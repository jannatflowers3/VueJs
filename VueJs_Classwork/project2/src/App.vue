<template>
<Header/>

<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>

<div class="container mt-5">
  <div class="row">
   <Sidebar />
     <Leftsidebar/>
  </div>
</div>
<Footer/>

</template>

<script>
import Header from './layouts/header.vue';
import Footer from './layouts/footer.vue';
import  Sidebar from './layouts/leftsidebar.vue';
import Leftsidebar from './layouts/rightsidebar.vue';
export default{
    components:{Header,Footer,Sidebar,Leftsidebar},
}
</script>
<style>


</style>