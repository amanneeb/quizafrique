
<template>
    <div class="infoPays">
        <div class="ctn_pays_drapeau">
            <img class="drapeau" :src="this.refImage+objPays[info].drapeau" width="100px" alt="">
            <h2 class="pays">{{objPays[info].nom}}</h2>
        </div>
        <div class="ctn_info" >
            <p class="capitale">Capitale: <span class="spanCapitale">{{objPays[info].capitale}}</span></p>
            <p class="villesSecondaires">Ville(s) secondaire(s): <span class="spanVillesSecondaires">{{objPays[info].villesSecondaires}}</span></p>
            <p class="population">Population: <span class="spanPopulation">{{objPays[info].population}}</span> hab</p>
            <p class="langues">Langues: <span class="spanLangues">{{objPays[info].langues}}</span></p>
            <p class="monnaie">Monnaie: <span class="spanMonnaie">{{objPays[info].monnaie}}</span></p>
            <p class="description">Description: <span class="spanDescription">{{objPays[info].description}}</span></p>
            <p class="sources">Sources: <span class="spanSources">{{objPays[info].sources}}</span></p>
        </div>
    </div>
</template>

<script>
    export default {
        
        components: {
            
        },
        props: {
            info:{
                type:String,
            },
            objPays:{
                type:Object,
            }
        },
        data() {
            return {
                intInfo:parseInt(this.info),
                refImage:"src/assets/images/drapeaux/",
            }
        },
        mounted() {
                        
        },
        methods: {
            
        },
        computed:{

        }, 
        watch: {
            info(){
                console.log(this.info)
                console.log(this.objPays)
            },
            refImage(newValue){
                newValue;
                document.querySelector(".drapeau").src="/src/assets/images/drapeaux/afrique_"+this.objPays[this.intInfo].zone+".jpg";
            }
        }
    }
</script>