<script >
export default {
  data() {
    return { count: 0 }
  },
 
}
</script>
<template>
    <div id="app">
  <button @click="count++">
    Count is: {{ count }}
  </button>
</div>
</template>

