<script setup>
    import FichePays from "@/components/FichePays.vue";
    import Footer from "@/components/Footer.vue";
</script>

<template>
    <main class="mainFiche">
        <div class="imageZone imgNord"></div>
        <section class="ctn_fiche">
            <nav class="nav">
                <ul class="zoneGeo">
                    <li class="zoneGeo__item"><button @click="creerListePaysZone('Nord')">Nord</button></li>
                    <li class="zoneGeo__item"><button @click="creerListePaysZone('Ouest')">Ouest</button></li>
                    <li class="zoneGeo__item"><button @click="creerListePaysZone('Centre')">Centre</button></li>
                    <li class="zoneGeo__item"><button @click="creerListePaysZone('Est')">Est</button></li>
                    <li class="zoneGeo__item"><button @click="creerListePaysZone('Sud')">Sud</button></li>
                </ul>
            </nav>
            <div class="corpsFiche">
                <fieldset class="fld_select">
                    <label>Choisir un pays <span class="nomZone"></span></label><br>
                    <select  @change="modifierValeurPays()" class="listeDeroulante">
                    </select>
                </fieldset>
                <FichePays v-if="this.zoneGeo !=='' && this.valeurPays !==''" :info="this.valeurPays" :objPays="this.pays"></FichePays>
            </div>
        </section>
    </main>    
    <Footer></Footer>
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
            document.getElementById("app").removeAttribute("class");
            localStorage.setItem("background", "vide");
            document.getElementById("app").classList.add(localStorage.getItem("background"))                      
        },
        methods: {
            modifierValeurPays(){
                this.valeurPays = document.querySelector(".listeDeroulante").value;
                console.log(this.valeurPays)
            },
           creerListePaysZone(zone){
                this.zoneGeo=zone;
                localStorage.setItem("zone",this.zoneGeo)
                this.modifierListePays();
                if(this.zoneGeo == "" || this.zoneGeo == undefined){
                    this.changerImageLaterale("nord");
                }else{
                    this.changerImageLaterale(this.zoneGeo);
                }
           },
            modifierListePays(){
                const refZoneGeo = document.querySelector(".listeDeroulante");
                const refSpanZone = document.querySelector(".nomZone");
                const refSectionPays = document.querySelector(".sectionPays");
                refZoneGeo.innerHTML= `<option value=''>Choisir un pays de cette région</option>`;
                for (let intCptDeroulant = 0; intCptDeroulant <= this.pays.length-1; intCptDeroulant++){
                    if(this.pays[intCptDeroulant].zone === this.zoneGeo){
                        if(refSpanZone.innerHTML === "" || refSpanZone.innerHTML !== this.zoneGeo){
                            refSpanZone.innerHTML = this.pays[intCptDeroulant].localisation;
                        }
                        if(intCptDeroulant == 0){
                            refZoneGeo.innerHTML += `<option value='${[intCptDeroulant]}' selected="selected"> ${this.pays[intCptDeroulant].nom}</option>`;  
                        }else{
                            refZoneGeo.innerHTML += `<option value='${[intCptDeroulant]}'> ${this.pays[intCptDeroulant].nom}</option>`;  
                        }
                    }
                }                
            },
            changerImageLaterale(area){
                document.querySelector(".imageZone").classList.remove(document.querySelector(".imageZone").classList[1]);
                document.querySelector(".imageZone").classList.add("img"+area);
                this.valeurPays='';
                let arrBoutons= document.querySelectorAll('.zoneGeo li button')
                document.querySelectorAll('.zoneGeo button').forEach(
                    bouton=>{
                        if(bouton.className.indexOf(this.zoneGeo) != -1){
                            bouton.classList.remove('enCours');
                        }
                        if(bouton.innerHTML.toLowerCase() == localStorage.getItem("zone").toLowerCase()){
                            bouton.classList.add('enCours');
                            console.log("le bouton cliqué est " + bouton.innerHTML.toLowerCase() + " et la variable zonegeo est " + this.zoneGeo)
                        }
                    }
                )
            }
        },
        computed:{

        }, 
        watch: {
            valeurPays(newValue){
                console.log(newValue)
                console.log(this.valeurPays)
                console.log(this.zoneGeo)
                console.log(this.zoneEnvoyee)
            },
            zoneGeo(newValue){
                this.valeurPays='';
                let arrBoutons= document.querySelectorAll('.nav .zoneGeo button')
                arrBoutons.forEach(
                    bouton=>{
                        console.log("la nouvelle valeur est: " + this.zoneGeo.toLowerCase())
                        bouton.classList.remove('enCours');
                        if(bouton.innerText.toLowerCase() === newValue.toLowerCase()){
                            bouton.classList.add('enCours');
                        }
                    }
                )
            }
        }
    }
</script>

