<template>
    <p>{{ thisInArrowFunc('aklima') }}</p>
    <p>{{ thisInRegularFunc() }}</p>
  </template>
  
  <script>
  export default {
    data() {
        return {
            username:'jannatul',
        }
    },
    methods: {
    //   username: 'Obi-Wan Kenobi',
  
      thisInArrowFunc: (name) => {
        return 'Help us ' + name // no 'this' binding
      },
  
      thisInRegularFunc() {
        return 'Help us ' + this.username // global 'this'
      }
    }
  }
  </script>