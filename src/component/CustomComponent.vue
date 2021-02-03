<template>
    <button @click="count++">You clicked me {{ count }} times.</button>
</template>

<script>

    export default {
        name: 'custom',
        data: function(){
            return {
                count: 0,
            };
        }
    }
</script>

<style>

</style>


