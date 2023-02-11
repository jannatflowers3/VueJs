<template>
 {{ name }}
 <button @click="name ='Ferdaush'">Clilck Here</button>
 <button @click="name ='Sultana'">SULTAN NAME</button>
 <button @click="setName('Aklima Akter')">Aklima click</button>
<hr/>

<h1>{{ count1 }}</h1>
<button @click="count1++"> increment</button>
<h1>{{ count2 }}</h1>
<button @click="count2--"> drecrement</button>
<button @click="count2 +=5"> 5 increment</button>
<button @mousemove="count2 -=5"> 5 decrement</button>
<br>
<!-- <button @click="greet(event)"> event</button> -->
<button @click="greet"> event</button>
<!-- event parameter na dil e o hoi -->


</template>


<script>
 export default {
    data(){
        return{
            name: "Jannatul",
            count1:0,
            count2:0,
        }
    },
    methods:{
    setName(x){
        this.name = x;
    },

    greet(event){
        alert(`Hello ${this.name} Ferdaush`);
    }
    },
 };
</script>
