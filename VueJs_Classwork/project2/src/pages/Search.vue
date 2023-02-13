<template>
    <div class="container mt-5">
        <div class="row">


          <div class="col-sm-12">
            <h1>Search Item</h1>
            <form method="post" v-on:submit.prevent="search">
                <input type="text" v-model="searchItem"/> 
                <button type="submit">Search</button> 
            </form>
            With  {{searchItem}} {{ searchResult.length}}
            <hr/>
            <ul> 
        <li v-for="post in searchResult" :key="post.id"> 
            <h2>{{post.product_name}}</h2>
            <p>Lorem ipsum dolor sit ame.</p>
            <div class="fakeimg">{{post.image}}</div>
                <h1>{{ post.product_price }}</h1>
            <p> {{post.product_descriptions }} </p>
          
        </li>
    </ul>

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
            searchItem:'',
            searchResult:[],
        }
    },
    methods:{
        search(){
            axios
      .post('http://127.0.0.1:8000/api/search/',{item:this.searchItem})
      .then((response) => {
        // this.posts = response.data;
        this.searchResult = response.data;
        console.log(response.data);
      })
        }
    }
   

}
</script>
<style lang="">
    
</style>