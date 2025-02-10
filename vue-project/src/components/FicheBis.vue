<template>
    <section class="ctnFiche">
        <img class="ctnFiche__drapeau" v-if="this.listePays[parseInt(this.contenufiche)-1]" :src="`src/assets/images/drapeaux/${this.listePays[parseInt(this.contenufiche)-1].drapeau}`"  alt="">
        <section class="ctnInfo" v-if="this.listePays[parseInt(this.contenufiche)-1]">
            <h1 class="pays">{{this.listePays[parseInt(this.contenufiche)-1].nom}}</h1>
            <h2>Capitale</h2>
            <p class="capitale">{{this.listePays[parseInt(this.contenufiche)-1].capitale}}</p>
            <h2>Ville(s) secondaire(s):</h2>
            <p class="villesSecondaires">{{this.listePays[parseInt(this.contenufiche)-1].villesSecondaires}}</p>
            <h2>Population: </h2>
            <p class="population">{{this.listePays[parseInt(this.contenufiche)-1].population}} hab</p>
            <h2>Langues</h2>
            <p class="langues">{{this.listePays[parseInt(this.contenufiche)-1].langues}}</p>
            <h2>Monnaie</h2>
            <p class="monnaie">{{this.listePays[parseInt(this.contenufiche)-1].monnaie}}</p>
            <h2>Description</h2>
            <p class="spanDescription" v-html="this.listePays[parseInt(this.contenufiche)-1].description"></p>
        </section>        
    </section>     
</template>

<script>
    export default {
        props: {
            listePays:{
                type: Object,
                default: null
            },
            contenufiche:{
                type: String,
                default: null
            },
            zoneChoisie:{
                type: String,
                default: ""
            }
        },
        data() {
            return {
                refImage: "src/assets/images/drapeaux/",
            }
        },
        mounted() {
            },
        methods: {
            
        },
        computed:{

        }, 
        watch: {
            
        }
    }
</script>

