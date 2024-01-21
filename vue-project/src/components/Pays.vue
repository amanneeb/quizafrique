<script>
</script>

<template>
    <p>Page pays</p>
    <section>
        <h1>Choisir un zone géographique</h1>
    </section>
    <section class="nord">
        <div class="nord__filtre">
            <a @click="envoyerVersLocalStorage('nord')" href="./fiche">Nord</a>
        </div>
    </section>
    <section class="ouest">
        <div class="ouest__filtre">
            <a @click="envoyerVersLocalStorage('ouest')" href="./fiche">Ouest</a>
        </div>
    </section>
    <section class="centre">
        <div class="centre__filtre">
            <a @click="envoyerVersLocalStorage('centre')" href="./fiche">Centre</a>
        </div>
    </section>
    <section class="est">
        <div class="est__filtre">
            <a @click="envoyerVersLocalStorage('est')" href="./fiche">Est</a>
        </div>
    </section>
    <section class="sud">
        <div class="sud__filtre">
            <a @click="envoyerVersLocalStorage('sud')" href="./fiche">Sud</a>
        </div>
    </section>
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
        methods: {
            envoyerVersLocalStorage(zone){
                localStorage.setItem("zone", zone);
            }
        },
    }
</script>