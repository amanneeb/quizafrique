<template>
    <nav class="nav">
        <ul class="zoneGeo">
            <li class="zoneGeo__item"><button @click="creerListePaysZone('Nord')">Nord</button></li>
            <li class="zoneGeo__item"><button @click="creerListePaysZone('Ouest')">Ouest</button></li>
            <li class="zoneGeo__item"><button @click="creerListePaysZone('Centre')">Centre</button></li>
            <li class="zoneGeo__item"><button @click="creerListePaysZone('Est')">Est</button></li>
            <li class="zoneGeo__item"><button @click="creerListePaysZone('Sud')">Sud</button></li>
        </ul>
    </nav>
</template>
<script> 
    export default {
        components: {
            
        },
        props: {
            zoneChoisie:{
                type: String,
                default: ""
            }
        },
        data() {
            return {
                
            }
        },
        mounted() {
            
        },
        methods: {
            creerListePaysZone(nomZone){
                switch(nomZone){
                    case "Nord":
                        this.$emit("changerZone", "Nord");
                        break;
                    case "Ouest":
                        this.$emit("changerZone", "Ouest");
                        break;
                    case "Centre":
                        this.$emit("changerZone", "Centre");
                        break;
                    case "Est":
                        this.$emit("changerZone", "Est");
                        break;
                    case "Sud":
                        this.$emit("changerZone", "Sud");
                        break;
                }
            }
        },
        computed: {
            
        },
        watch: {
            zoneChoisie(newValue, oldValue){
                console.log(newValue);
                document.querySelectorAll(".zoneGeo__item").forEach(zone=>{
                    if(zone.textContent == newValue){
                        zone.classList.add("zoneGeo__item--active");
                    }else{
                        if(zone.classList.contains("zoneGeo__item--active")){
                            zone.classList.remove("zoneGeo__item--active");
                        }
                    }
                });
            }
        }
    }
</script>