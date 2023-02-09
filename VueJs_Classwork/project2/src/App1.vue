<template>
 <h1 v-if="score>=8">Score is {{ score }} , Excellent</h1>
 <h2 v-else-if="score<=6">Score is {{ score }},Good</h2>
 <h2 v-else>Poor</h2>

 <ul v-if="fruits">
  <li > Mango</li>
  <li >Guaba</li>
  <li >Lichi</li>
 </ul>
 <ul v-else>
 <li> orange</li>
 <li> apple</li>
 </ul>

 <hr>
 {{ ok ? 'Yes':'No' }}
</template>
<script>
 export default{
  data(){
    return{
      score:3,
      fruits:false,
    ok:true,

    }
  }
 }
</script>