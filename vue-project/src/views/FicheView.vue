<template>
    <main class="mainFiche" >
        <NavigationPays @changerZone="modifierZone" :zoneChoisie="this.zone"></NavigationPays>
        <div class="ctnImgZone"></div>
        <div class="ctnPrincipal">         
            <ListeDeroulante @choisirPays="modifierContenuFiche" :listePays="this.arrPays" :zoneChoisie="this.zone" ></ListeDeroulante>
            <FicheBis :contenufiche="this.paysChoisi" :listePays="this.arrPays" :zoneChoisie="this.zone"></FicheBis>
        </div> 
        <Footer></Footer>       
    </main>
</template>

<script>
    import FicheBis from '@/components/FicheBis.vue';
    import ListeDeroulante from '@/components/ListeDeroulante.vue';
    import NavigationPays from '@/components/NavigationPays.vue';
    import ImageAside from '@/components/ImageAside.vue';
    import Footer from '@/components/Footer.vue';
    import JSON from '@/assets/JSON.json';

    export default {
        components: {
            FicheBis,
            ListeDeroulante,
            ImageAside,
            Footer,
            NavigationPays
        },
        props: {
            
        },
        data() {
            return {
                arrPays: JSON,
                zone: "",
                formatImg: "",
                paysChoisi: "",
                zoneSelectionnee: "",
                width: window.innerWidth,
            }
        },
        methods: {
            modifierZone(nouvelleZone){
                this.zone = nouvelleZone;
            },
            modifierContenuFiche(nouveauPays){
                this.paysChoisi = nouveauPays;
            },
        },
        computed: {
            
        },
        watch: {
            zone(newValue, oldValue){
                this.zoneSelectionnee = newValue;
                if(document.querySelector(".ctnImgZone").classList.length == 2){
                    document.querySelector(".ctnImgZone").classList.remove(document.querySelector(".ctnImgZone").classList[1]);
                }
                document.querySelector(".ctnImgZone").classList.add("ctnImgZone--"+newValue.toLowerCase());
            },
        }
    }
</script>