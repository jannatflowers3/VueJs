<template>
<div  :class="classObject"> Hello</div>
<button @click="toggleActive">Click Here</button>
</template>
<script>
export default {
    data() {
  return {
    isActive: true,
    error: false
  }
},
computed: {
  classObject() {
    return {
      active: this.isActive,
      error: this.error 
    //   'text-danger': this.error && this.error.type === 'fatal'
    }
  }
},
methods:{
    toggleActive (){
     this.isActive = !this.isActive;
     this.error = !this.error;
    }
}
}
</script>
<style>
.active{
    background-color: green;
     color: white;
}
.error{
    color: red;
}

</style>
