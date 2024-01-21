<script setup>
    import FichePays from "@/components/FichePays.vue"
</script>

<template>
    <main>
        <img class="zone" src="@/assets/images/afrique_centre.jpg" width="300px" alt="">
        <section>
            <nav>
                <ul>
                    <li><button @click="creerListePaysZone('Nord')" >Nord</button></li>
                    <li><button @click="creerListePaysZone('Ouest')" >Ouest</button></li>
                    <li><button @click="creerListePaysZone('Centre')" >Centre</button></li>
                    <li><button @click="creerListePaysZone('Est')" >Est</button></li>
                    <li><button @click="creerListePaysZone('Sud')" >Sud</button></li>
                </ul>
            </nav>
            <div>
                <fieldset class="fld_select">
                    <label>Choisir un pays <span class="nomZone"></span></label>
                    <select @change="modifierValeurPays()" class="listeDeroulante"></select>
                </fieldset>
                <FichePays v-if="this.zoneGeo !=='' && this.valeurPays !==''" :info="this.valeurPays" :objPays="this.pays"></FichePays>
            </div>
        </section>
    </main>
</template>

<script>
    export default {
        components: {
            
        },
        props: {
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
                zoneGeo: this.zone,
                valeurPays: {
                    type:String,
                    default:""
                },
                objInfoPays:{
                    type:Object,
                },
                refImage:"",
                zoneEnvoyee:localStorage.getItem("zone"),
            }
        },
        mounted() {
            document.querySelector(".listeDeroulante").innerHTML= `<option value=''></option>`;
            switch(this.zoneEnvoyee){
                case "nord":
                document.querySelector(".nomZone").innerHTML="du Nord";
                break;
                case "ouest":
                document.querySelector(".nomZone").innerHTML="de l'Ouest";
                break;
                case "centre":
                document.querySelector(".nomZone").innerHTML="centrale";
                break;
                case "est":
                document.querySelector(".nomZone").innerHTML="de l'Est";
                break;
                case "sud":
                document.querySelector(".nomZone").innerHTML="australe";
                break;
            }
            document.querySelector(".zone").src="/src/assets/images/afrique_"+this.zoneEnvoyee+".jpg";
            for (let intCptDeroulant = 0; intCptDeroulant <= this.pays.length-1; intCptDeroulant++){
                if(this.pays[intCptDeroulant].zone.toLowerCase() === this.zoneEnvoyee){
                    document.querySelector(".listeDeroulante").innerHTML += `<option value='${[intCptDeroulant]}'> ${this.pays[intCptDeroulant].nom}</option>`;
                }
            }                        
        },
        methods: {
            modifierValeurPays(){
                this.valeurPays = document.querySelector(".listeDeroulante").value;
            },
           creerListePaysZone(zone){
                this.zoneGeo=zone;
                this.modifierListePays();
           },
            modifierListePays(){
                const refZoneGeo = document.querySelector(".listeDeroulante");
                const refSpanZone = document.querySelector(".nomZone");
                refZoneGeo.innerHTML= `<option value=''>Choisir un pays de cette région</option>`;
                for (let intCptDeroulant = 0; intCptDeroulant <= this.pays.length-1; intCptDeroulant++){
                    if(this.pays[intCptDeroulant].zone === this.zoneGeo){
                        if(refSpanZone.innerHTML === "" || refSpanZone.innerHTML !== this.zoneGeo){
                            refSpanZone.innerHTML = this.pays[intCptDeroulant].localisation;
                            this.refImage=this.pays[intCptDeroulant].zone.toLowerCase()
                            document.querySelector(".zone").src="/src/assets/images/afrique_"+this.refImage+".jpg";
                        }
                        refZoneGeo.innerHTML += `<option value='${[intCptDeroulant]}'> ${this.pays[intCptDeroulant].nom}</option>`;   
                    }
                }
            }
        },
        computed:{

        }, 
        watch: {
            valeurPays(newValue){
                console.log(newValue)
                console.log(this.valeurPays)
                console.log(this.zoneGeo)
                console.log(this.zone)
            },
            zoneGeo(newValue){
                this.valeurPays='';
                let arrBoutons= document.querySelectorAll('li button')
                arrBoutons.forEach(
                    bouton=>{
                        if(bouton.innerText===newValue){
                            bouton.classList.add('enCours');
                        }else{
                            bouton.classList.remove('enCours');
                        }
                    }
                )
            }
        }
    }
</script>

<style>
.enCours{
    border-bottom: black solid 4px;
}
</style>