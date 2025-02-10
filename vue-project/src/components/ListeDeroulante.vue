<template>
    <fieldset class="fld_select ctnListeDeroulante">
        <label>Choisir un pays <span class="nomZone"></span></label><br>
        <select  @change="afficherContenuFiche()" class="listeDeroulante">
            <option value="0" selected>Choisir un pays</option>
            <option v-for="pays in listePaysZoneChoisie" :value="pays.index">{{ pays.nom }}</option>
        </select>
    </fieldset>
</template>

<script>
    export default {
        components: {
            
        },
        props: {
            zoneChoisie:{
                type: String,
                default: ""
            },
            listePays:{
                type: Object,
                default: null
            },
            pays:{
                type: Object,
                default: null
            },
            zone:{
                type: String,
                default: ""
            },
        },
        data() {
            return {
                indexPaysSelectionne: "",
            }
        },
        methods: {
            afficherContenuFiche(){
                this.indexPaysSelectionne = document.querySelector(".listeDeroulante").value;
                this.$emit("choisirPays", this.indexPaysSelectionne);
                console.log(this.indexPaysSelectionne);
            },
            
        },
        computed: {
            listePaysZoneChoisie(){
                console.log(this.zoneChoisie)
                if(this.zoneChoisie == ""){
                    return this.listePays
                }else{
                    return this.listePays.filter(pays=>pays.zone == this.zoneChoisie)
                }
            }
        },
        watch: {
            zoneChoisie(newValue, oldValue){
                console.log(newValue)
        }
    }}
</script>