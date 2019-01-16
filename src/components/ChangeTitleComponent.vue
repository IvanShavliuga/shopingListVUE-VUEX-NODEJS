<template>
    <div>
        <em>Cambiar titulo de su lista acá</em>
        <input type="text" :value="title" @input="onInput({title:$event.target.value,id:id})">
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    props:['title','id'],
    methods:mapActions({
        onInput:'changeTitle'
    })

}
</script>

<style>

</style>
