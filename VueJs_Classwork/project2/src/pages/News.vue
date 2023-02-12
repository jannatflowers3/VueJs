<template>
    <div class="container mt-5">
        <div class="row">

         <div class="col-sm-4">
            <h2>News Page</h2>
            <h5>Photo of me:</h5>
            <div class="fakeimg">Fake Image</div>
            <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
            <h3 class="mt-4">Some Links</h3>
            <p>Lorem ipsum dolor sit ame.</p>
            <ul class="nav nav-pills flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#About">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
            <hr class="d-sm-none">
          </div>
          <div class="col-sm-8">
        <div v-for="post in posts" :key="post.id"> 
            <!-- <h2>{{post.product_name}}</h2> -->
            <!-- <p>Lorem ipsum dolor sit ame.</p>
            <div class="fakeimg">{{post.image}}</div>
                <h1>{{ post.product_price }}</h1>
            <p> {{post.product_descriptions }} </p> -->
            <table>
                <tr>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Product Details</th>
                </tr>
                <tr>
                    <td>{{post.product_name}}</td>
                    <td>{{ post.product_price }}</td>
                    <td>{{post.product_descriptions }}</td>
                </tr>
            </table>
        </div>

            <!-- {{ posts }} -->
        </div>
        </div>
      </div>
</template>
<script>
import axios from 'axios'
export default{
    data(){
        return{
            posts:[],
        }
    },
    mounted() {
    axios
      .get('http://127.0.0.1:8000/api/products')
      .then((response) => {
        this.posts = response.data;
        console.log(response)
      })
  }
}
</script>
<style lang="">
    
</style>