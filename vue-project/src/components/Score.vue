<template>
    <section class="sectionScore">
            <h1>Résultat</h1>
            <div class="ctnScore">
                <p class="ctnScore__score"><span class="score">{{ this.resultat }}</span>/10</p>
                <p class="ctnScore__commentaire">{{ this.choixCommentaire }}</p>
            </div>
            <button type="button" class="btnRelancer button" @click="lancerNvllePartie()">Rejouer</button>
        </section>
</template>

<script>
import Quiz from './Quiz.vue';

    export default{
        components: {
            Quiz
        },
        props: {
            tableauAffichage: Array,
            resultat: Number,
        },
        data(){
            return{
                intCptResultat: 0,
                //resultat: localStorage.getItem("resultat"),
                choixCommentaire: null,
                arrCommentaires:[
                    "Beau travail! Tes connaissances de l'Afrique sont vraiment bonnes.",
                    "Pas mal! Tu as quand même quelques connaissances de l'Afrique.",
                    "Il n'est jamais trop tard pour en apprendre plus sur le berceau de l'humanité.",
                ]
            }
        },
        mounted(){
            //this.resultat = localStorage.getItem("resultat");
            if(this.resultat >= 8){
                this.choixCommentaire = this.arrCommentaires[0];
            }else if(this.resultat >= 5){
                this.choixCommentaire = this.arrCommentaires[1];
            }else{
                this.choixCommentaire = this.arrCommentaires[2];
            }
        },
        methods:{
            afficherLeResultat(){
                console.log(this.resultat);
                if(this.resultat >= 8){
                    this.choixCommentaire = this.arrCommentaires[0];
                }else if(this.resultat >= 5){
                    this.choixCommentaire = this.arrCommentaires[1];
                }else{
                    this.choixCommentaire = this.arrCommentaires[2];
                }
            },
            lancerNvllePartie(){
                localStorage.clear();
                this.tableauAffichage[0] = true;
                this.tableauAffichage[2] = false;
                window.location.reload()
            }
        }
    }
</script>