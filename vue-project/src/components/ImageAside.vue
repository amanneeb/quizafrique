<template>
    <img  class="ctnImgZone__img"  :src="`src/assets/images/afrique_${this.zone.toLowerCase()}_mobile.jpg`" alt="">
</template>

<script>

    export default {
    components: {
    },
    props: {
        zone:{
            type: String,
            default: ""
        }
    },
    data: {
    },
    
    methods: {
        
    }
}
</script>