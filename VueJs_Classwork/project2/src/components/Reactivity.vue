<template>
  <h1>{{count}}</h1>
  <button v-on:click="increment"> Click ME</button>
</template>
<script>
 export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  mounted() {
    // methods can be called in lifecycle hooks, or other methods!
    this.increment()
  }
}
</script>