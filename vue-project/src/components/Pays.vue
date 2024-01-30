<script>
</script>

<template>
    <div class="zone">
        <section class="titre">
            <h1 class="titre__h1">Choisir un zone géographique</h1>
        </section>
        <section class="nord">
            <img class="nord__image" src="../assets/images/afrique_nord.jpg" alt="paysage d'Afrique du Nord">
            <div class="nord__filtre" >
                <a @click="envoyerVersLocalStorage('nord')" href="./fiche">Nord</a>
            </div>
        </section>
        <section class="ouest">
            <img class="ouest__image" src="../assets/images/afrique_ouest.jpg" alt="paysage d'Afrique de l'Ouest">
            <div class="ouest__filtre">
                <a @click="envoyerVersLocalStorage('ouest')" href="./fiche">Ouest</a>
            </div>
        </section>
        <section class="centre">
            <img class="centre__image" src="../assets/images/afrique_centre.jpg" alt="paysage d'Afrique centrale">
            <div class="centre__filtre">
                <a @click="envoyerVersLocalStorage('centre')" href="./fiche">Centre</a>
            </div>
        </section>
        <section class="est">
            <img class="est__image" src="../assets/images/afrique_est.jpg" alt="paysage d'Afrique de l'Est">
            <div class="est__filtre">
                <a @click="envoyerVersLocalStorage('est')" href="./fiche">Est</a>
            </div>
        </section>
        <section class="sud">
            <img class="sud__image" src="../assets/images/afrique_sud.jpg" alt="paysage d'Afrique du sud">
            <div class="sud__filtre">
                <a @click="envoyerVersLocalStorage('sud')" href="./fiche">Sud</a>
            </div>
        </section>
    </div>
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
        },
        data() {
            return {
            }
        },
        mounted() {
            document.getElementById("app").removeAttribute("class"),
            localStorage.setItem("background", "vide"),
            document.getElementById("app").classList.add(localStorage.getItem("background"))
        },
        methods: {
            envoyerVersLocalStorage(zone){
                localStorage.setItem("zone", zone);
            }
        },
    }
</script>
