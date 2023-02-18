<template>
    <div class="container mt-5">
        <div class="row">

         <div class="col-sm-7">
            <h2> Shopping Cart </h2>
            <h1>{{$store.state.counter}}</h1>
            <!-- <button @click="$store.state.counter++">click</button> -->
            <!-- or -->
            <!-- <button @click="$store.commit('increment')">click</button> -->
            <h2> Shopping Cart increment with 50 </h2>
           
            <p>Counter: {{ $store.getters.getCounter }}</p>
            <p>Normalized: {{ $store.getters.getNormalizedCounter }}</p>
            <button @click="$store.commit('increment',10)">click</button>
         
           </div>
        </div>
      </div>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>