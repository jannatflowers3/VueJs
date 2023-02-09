<template>
  <h1>{{obj.nested.count}}</h1>
  <P>{{ obj.arr }}</P>
  <button v-on:click="mutateDeeply"> Click ME</button>
</template>
<script>
 export default {
  data() {
    return {
      obj: {
        nested: { count: 0 },
        arr: ['foo', 'bar']
      }
    }
  },
  methods: {
    mutateDeeply() {
      // these will work as expected.
      this.obj.nested.count++
      this.obj.arr.push('sum')
    }
  }
}
</script>