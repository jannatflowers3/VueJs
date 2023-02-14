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
        <hr class="d-sm-none" />
      </div>
      <div class="col-sm-8" >
        <button class="btn btn-primary" @click="formDisplay ='true';isSubmitButton='true'">
          New Product
        </button>
       <div v-if="formDisplay">
        {{ JSON.stringify(formValues, null,2) }}
        <form name="productForm" method="post" v-on:submit.prevent="product_submit">
          <div class="col-12">
            <div class="form-group">
              <label class="form-label" for="product_name">Product Name</label>
              <div class="form-control-wrap">
                <input
                v-model="formValues.p_name"
                  type="text"
                  class="form-control"
                  id="product_name"
                  name="product_name"
                />
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <label class="form-label" for="product_details"
                >Product Details</label
              >
              <div class="form-control-wrap">
                <textarea
                v-model="formValues.p_details"
                  name="product_details"
                  id="product_details"
                  cols="36"
                  rows="10"
                >
                </textarea>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <label class="form-label" for="product_price"
                >Product Price</label
              >
              <div class="form-control-wrap">
                <input
                  type="number"
                  class="form-control"
                  v-model="formValues.p_price"
                  id="product_price"
                  name="product_price"
                />
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <label class="form-label" for="p_stock"
                >Product Stock</label
              >
              <div class="form-control-wrap">
                <input
                  type="number"
                  class="form-control"
                  v-model="formValues.p_stock"
                  id="p_stock"
                  name="p_stock"
                />
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label class="form-label" for="product_category">Category</label>
              <div class="form-control-wrap">
                <select name="p_catagory" v-model="formValues.p_catagory" id="product_category">
                  <option selected disabled>Selected One</option>
                  <option value="">Selected One</option>
                  <option value="1">Three Pice</option>
                  <option value="1">Shirt</option>
                  <option value="2">Pant</option>
                </select>
              </div>
            </div>
          </div>
          <!-- <div class="col-md-12">
            <div class="form-group">
              <label class="form-label" for="product_img">Product Image</label>
              <div class="form-control-wrap">
                <input
                  type="file"
                  class="form-control"
                  id="product_img"
                  name="product_img"
                />
              </div>
            </div>
          </div> -->
          <div class="col-12" v-if="isSubmitButton">
            <button class="btn btn-primary" type="submit" @click="product_submit()"> Submit </button> 
          </div>
          <div class="col-12" v-if="isUpdateButton">
            <button class="btn btn-success" @click="product_update" type="button" > Update </button>

          </div>
        </form>
       </div>

       <div class="product" v-if="productList">
        <div v-for="post in posts" :key="post.id">
          <h2>{{ post.product_name }}</h2>
          <p>Lorem ipsum dolor sit ame.</p>
          <!-- <div class="fakeimg">{{ post.image }}</div> -->
          <h1>{{ post.product_price }}</h1>
          <p>{{ post.product_descriptions }}</p>
            <button @click="product_delete(post.id)" onclick="return confirm('Are You Sure')" class="btn btn-danger">Delete </button>
            
            <button class="btn btn-success" @click="edit_product(post);isUpdateButton='true'">Edit</button>
        </div>
       </div>

        <!-- {{ posts }} -->
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      posts: [],
      formDisplay:false,
      isSubmitButton:false,
      isUpdateButton:false,
      productList:true,
      formValues:{
        p_name:'',
        p_details:'',
        p_price:'',
        p_stock:'',
        p_catagory:'',
      }
    };
  },
  mounted() {
    axios.get("http://127.0.0.1:8000/api/products").then((response) => {
      this.posts = response.data;
      console.log(response);
    });
  },

  methods:{
    
    // fontend theke backend data submit
    product_submit() {
    axios.post('http://127.0.0.1:8000/api/products',
    {
      // prod_details:this.formValues
      product_name:this.formValues.p_name,
      product_descriptions:this.formValues.p_details,
      product_price:this.formValues.p_price,
      product_stock:this.formValues.p_stock,
      product_category:this.formValues.p_catagory,
    
    })
    .then((response)=>{
      this.formDisplay =false,
      this.formValues = {};
      this.get_products();
      alert(response.data);
    })
    .catch((error)=>{
      console.log(error.response.data.error);
    })
  },
get_products(){
  axios.get("http://127.0.0.1:8000/api/products").then((response) => {
      this.posts = response.data;
      console.log(response);
    });
},

  // delete method 
product_delete(id){
      axios.delete("http://127.0.0.1:8000/api/products/"+id).then((response) => {
      this.get_products();
      alert(response.data.msg);
    });
    },

    // edit method 
    edit_product(product){
      this.formDisplay =true,
      this.formValues.p_name = product.product_name;
      this.formValues.p_details = product.product_descriptions;
      this.formValues.p_price = product.product_price;
      this.formValues.p_stock = product.product_stock;
      this.formValues.p_catagory = product.product_category;
      this.productList = false;
    },
    // product update
    product_update(){

      axios.put("http://127.0.0.1:8000/api/products"+this.formValues.id,
      {
        product_name:this.formValues.p_name,
      product_descriptions:this.formValues.p_details,
      product_price:this.formValues.p_price,
      product_stock:this.formValues.p_stock,
      product_category:this.formValues.p_catagory,
      })
      .then((response) => {
      this.get_products();
      alert(response.data);
    });
    }

}
};
</script>
<style lang=""></style>
