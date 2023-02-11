<template>
hi,{{ name }}
<p>ocupation {{ ocupation }} ,Address:{{ addres }}</p>
<p v-text="addres"></p>
<div v-html="Hobby"></div>
<div>{{ Hobby }}</div>
<div v-bind:class="'dynamicClass'"> {{ ocupation }}</div>
<div id="dynamicId"> {{ ocupation }}</div>
<div :class="{active:ifActive,error:!ifActive}"> {{ ocupation }}</div>
</template>
<script>
export default{
  data(){
    return{
      name:'jannatul ferdaush',
      addres:"Kajla",
      ocupation:"web developer",
        Hobby:"<br>Coding</br>",
        ifActive:true,  
    }
  }
}
</script>
<style>
.dynamicClass{
  color:red;
}
 #dynamicId{
  color: aqua;
  background-color: gray;
 }
 .active{
  color:red;
 }
 .error{
  color: blue;
 }
</style>