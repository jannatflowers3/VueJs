<template>
    <p>{{ greeting('jannatul ','ferdsuah') }}</p>
  </template>
  
  <script>
  // export default {
  //   data() {
  //     return {
  //       username: 'Jannatul Ferdaush'
  //     };
  //   },
  //   methods: {
  //     greeting() {
  //       return 'Hello there ' + this.username
  //     }
  //   }
  // }

 export default{
  methods:{
    greeting:(x,y)=>{
      return 'Hello '+x+y;
    }
  }
 }
  </script>