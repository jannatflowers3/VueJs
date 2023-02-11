<template>

<button @click="warn('Dont click here',$event)">Click</button>

</template>


<script>
export default {
    methods:{
        warn(message,event){
            if(event){
                event.preventDefault();
                
            }
            alert(message);
        }
    }
}
</script>
