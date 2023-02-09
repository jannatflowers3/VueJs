<template>
<ul>
    <li v-for="(fruit,i) in fruits" :key="i">
        {{i}}
        {{ fruit }}</li>
</ul>
</template>
<script>
export default {
    data() {
  return {

   fruits : ['Mango','Orange','Apple','Grape']
  }
},

}
</script>

