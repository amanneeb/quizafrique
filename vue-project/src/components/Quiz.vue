<script setup>
    import QuizItem from '@/components/QuizItem.vue';
    import JSON from '@/assets/JSON.json'
</script>
<template>
    <main class="mainQuiz">
        <div class="instructions">
            <h1>Quiz</h1>
            <p>Bienvenue! <br>
                Prends quelques secondes pour lire les instructions et tu pourras ensuite commencer le test. 
            </p>
            <ol>
                <li>Clique sur le bouton "Lancer le jeu".</li>
                <li>L'indice du premier pays s'affichera. Entre ta réponse et appuie sur le bouton "Répondre" pour voir si tu as la bonne réponse.</li>
                <li> Accède à la prochaine question en appuyant sur le bouton portant le numéro de la question suivante.</li>
                <li> Une fois les dix questions répondues, ton résultat s'affichera</li>
                <li> Si tu souhaites commencer une nouvelle partie, appuie sur le bouton "Nouvelle partie".</li>
            </ol>
            <p>Besoin d'u petit coup de pouce? Tu peux ouvrir la page <a class="lienPays" href="/pays">"Pays"</a> pour t'aider.</p>
            <p>Amuse-toi bien! &#128521;</p>
            <button type="button" class="btnLancerJeu" @click="choisirPays()" >Lancer le jeu</button>
        </div>         
    
        <div class="ctnFormRetro" hidden>
            <h2 class="titreQuiz" >Question <span class="numQuestion">{{this.intCptQuestion}}</span></h2>
            <img class="indiceDrapeau" src="" alt="drapeau pays" hidden>
            <form class="form">
                <p class="indice">{{this.indice}}</p>
                <div class="ctnReponse">
                    <input type="text" class="reponse" v-model="laReponse">
                    <button type="button" class="btnRepondre" @click="verifierReponse()">Répondre</button>
                </div>
                <p class="avertissement"> * Le correcteur est sensible au accent</p>
            </form>
            <p class="retroaction">{{ this.retroaction }}</p>
            <div class="reponses">
            <p>Réponses</p>
            <span id="1">&#9679;</span>
            <span id="2">&#9679;</span>
            <span id="3">&#9679;</span>
            <span id="4">&#9679;</span>
            <span id="5">&#9679;</span>
            <span id="6">&#9679;</span>
            <span id="7">&#9679;</span>
            <span id="8">&#9679;</span>
            <span id="9">&#9679;</span>
            <span id="10">&#9679;</span>
        </div>
        
        <section class="sectionSuivant" hidden>
            <button type="button" class="btnQuestionSuivante" @click="afficherQuestion()">Suivant<span class="numProchaineQuestion"></span></button>
        </section>
        </div>

        <section class="sectionScore" hidden>
            <h2>Voici ton résultat</h2>
            <p><span class="score">{{ this.intCptResultat }}</span>/10</p>
            <p class="commentaire"></p>
            <button type="button" class="btnResultat">Voir les résultats</button>
            <button type="button" class="btnRelancer" @click="lancerNvllePartie()">Rejouer</button>
        </section>   
                  
    </main>       
</template>

<script>
    export default {
        components: {
            QuizItem,
        },
        props: {
            
        },
        data() {
            return {
                pays: JSON,
                arrPositionChoisie: [],
                arrIndicesChoisis : [],
                arrPaysChoisis : [],
                intCompteurPays : 0,
                intCompteur : 0,
                intCptQuestion: 1,
                intCptResultat : 0,
                indice:"",
                laReponse:"",
                retroaction:"",
                couleurRetro: "regulier",
            }
        },
        mounted() {
        },
        methods: {
            choisirPays(){
                let intNbPays = Object.keys(this.pays).length;
                //Créer un tableau contenant toutes les positions aléatoires possibles
                while(this.intCompteurPays < intNbPays){
                    this.arrPositionChoisie[this.intCompteurPays] = (this.intCompteurPays+1);
                    this.intCompteurPays++;
                }

                //Remplir les tableaux des indices et des réponses
                while(this.intCompteur < 10){
                    let intPositionPaysChoisi = Math.floor(Math.random()* this.arrPositionChoisie.length);
                    let intPaysChoisi = this.arrPositionChoisie[intPositionPaysChoisi];
                    this.arrIndicesChoisis[this.intCompteur] = this.pays[intPaysChoisi].indice;
                    this.arrPaysChoisis[this.intCompteur] = this.pays[intPaysChoisi].nom;
                    this.arrPositionChoisie.splice(intPositionPaysChoisi, 1)
                    this.intCompteur++;
                }

                //Afficher la section question
                document.querySelector(".ctnFormRetro").removeAttribute("hidden")
                document.querySelector(".instructions").setAttribute("hidden", "hidden")

                this.afficherQuestion()
            },
            afficherQuestion(){
                document.querySelector(".sectionSuivant").setAttribute("hidden", "hidden");
                this.laReponse = "";
                this.retroaction = "";
                let intNumQuestion = parseInt(this.intCptQuestion);
                this.indice = this.arrIndicesChoisis[intNumQuestion-1];
            },
            verifierReponse(){
                let strReponseMaj = this.laReponse.toUpperCase();
                if(this.arrPaysChoisis[parseInt(this.intCptQuestion)-1] === strReponseMaj){
                    this.retroaction = "Bravo! Passe à la prochaine question.";
                    this.intCptResultat++;
                    this.couleurRetro="correct"
                }else{
                    this.retroaction = "Dommage! Tu auras plus de chance avec la prochaine question.";
                    this.couleurRetro="erreur"
                }
                this.intCptQuestion++;
                document.querySelector(".sectionSuivant").removeAttribute("hidden");
            },
            lancerNvllePartie(){
                location.reload();
            }
        },
        computed:{

        }, 
        watch: {
            intCptQuestion: function(newValue, oldValue){
                newValue
                document.getElementById(oldValue.toString()).classList.add(this.couleurRetro);
                
                if(newValue==11){
                    document.querySelector(".sectionScore").removeAttribute("hidden")
                    document.querySelector(".ctnFormRetro").setAttribute("hidden", "hidden")
                    document.querySelector(".sectionSuivant").setAttribute("hidden", "hidden") 
                    this.intCptQuestion = 0;
                }
            }
        }
    }
</script>

<style scoped>
    


    .instructions,
    .ctnFormRetro,
    .sectionScore{
        border-top: #000 solid 1px;
    }
    .avertissement{
        font-size: .8em;
        font-style: italic;
    }
    .correct{
        color: green;
    }
    .erreur{
        color: darkred;
    }
</style>