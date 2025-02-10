<script setup>
    import QuizItem from '@/components/QuizItem.vue';
    import JSON from '@/assets/JSON.json'
</script>
<template>
    <main class="mainQuiz">
        <section class="instructions">
            <img class="im" src="@/assets/images/landing_page_image.png"  alt="Dessin du continent africain avec une girafe et un arbre devant coucher de soleil">
            <div>
                <h2>Bienvenue! </h2>
                <p>Prends quelques secondes pour lire les instructions et tu pourras ensuite commencer le test. </p>
                <ol>
                    <li>Clique sur le bouton "Lancer le jeu".</li>
                    <li>L'indice du premier pays s'affichera. Entre ta réponse et appuie sur le bouton "Répondre" pour voir si tu as la bonne réponse.</li>
                    <li> Accède à la prochaine question en appuyant sur le bouton portant le numéro de la question suivante.</li>
                    <li> Une fois les dix questions répondues, ton résultat s'affichera</li>
                    <li> Si tu souhaites commencer une nouvelle partie, appuie sur le bouton "Nouvelle partie".</li>
                </ol>
                <p>Besoin d'un petit coup de pouce? Tu peux ouvrir la page <a class="lienPays" href="/pays">"Pays"</a> pour t'aider.</p>
                <p>Amuse-toi bien! &#128521;</p>
                <button type="button" class="btnLancerJeu button" @click="choisirPays()" >Lancer le jeu</button>
            </div>
        </section>         
    
        <section class="ctnFormRetro" hidden>
            <span class="numQuestion">{{this.intCptQuestion}}</span>
            <div class="ctnLayoutForm">
                <form class="form">
                <p class="indice">{{this.indice}}</p>
                <div class="ctnReponse">
                    <input type="text" class="reponse" v-model="laReponse">
                    <p class="avertissement"> * Le correcteur est sensible au accent</p>
                    <button type="button" class="btnRepondre button" @click="verifierReponse()">Répondre</button>
                </div>
                </form>
                <p class="retroaction" hidden>{{ this.retroaction }}</p>
                <button type="button" class="btnQuestionSuivante boutonSecondaire" @click="afficherQuestion()" hidden>Suivant<span class="numProchaineQuestion"></span></button>
                <div class="reponses">
                    <p>Réponses: </p>
                    <p class="reponses__bonneReponse correct">{{ this.bonneReponse }}</p>
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
            </div>            
        </section>

        <section class="sectionScore" hidden>
            <h2>Résultat</h2>
            <div class="ctnScore">
                <p class="ctnScore__score"><span class="score">{{ this.intCptResultat }}</span>/10</p>
                <p class="ctnScore__commentaire"></p>
            </div>
            <button type="button" class="btnRelancer bouton" @click="lancerNvllePartie()">Rejouer</button>
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
                bonneReponse: "",
            }
        },
        mounted() {
            document.getElementById("app").removeAttribute("class")
            //localStorage.setItem("background", "globe"),
            //document.getElementById("app").classList.add(localStorage.getItem("background"))
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
                document.querySelector(".ctnFormRetro").removeAttribute("hidden");
                document.querySelector(".ctnFormRetro").classList.add("reveleBis");
                document.querySelector(".ctnLayoutForm").classList.add("revele");
                document.querySelector(".instructions").setAttribute("hidden", "hidden");

                this.afficherQuestion();
            },
            afficherQuestion(){
                //this.intCptQuestion++;
                if(this.intCptQuestion > 2){
                    this.intCptQuestion++
                }
                document.querySelector(".btnQuestionSuivante").setAttribute("hidden", "hidden");
                this.laReponse = "";
                this.retroaction = "";
                let intNumQuestion = parseInt(this.intCptQuestion);
                this.indice = this.arrIndicesChoisis[intNumQuestion-1];
                this.bonneReponse = "";
                document.querySelector(".btnRepondre").removeAttribute("disabled")
            },
            verifierReponse(){
                let strReponseMaj = this.laReponse.toUpperCase();
                if(this.arrPaysChoisis[parseInt(this.intCptQuestion)-1] === strReponseMaj){
                    this.retroaction = "Bravo! Passe à la prochaine question.";
                    this.intCptResultat++;
                    this.couleurRetro="correct";
                }else{
                    this.retroaction = "Dommage! Tu auras plus de chance avec la prochaine question.";
                    this.couleurRetro="erreur";
                }
                //this.intCptQuestion++;
                this.bonneReponse = this.arrPaysChoisis[parseInt(this.intCptQuestion)-1];
                document.querySelector(".btnRepondre").setAttribute("disabled", "disabled")
                document.querySelector(".btnQuestionSuivante").removeAttribute("hidden");
                if(this.intCptQuestion < 3){
                    this.intCptQuestion++
                }
            },
            lancerNvllePartie(){
                location.reload();
            },
            renommerBoutonSuivant(){
                document.querySelector(".btnQuestionSuivante").innerText = "Suivant";
            }
        },
        computed:{

        }, 
        watch: {
            intCptQuestion: function(newValue, oldValue){
                console.log("la nouvelle valeur est "+newValue)
                console.log("l'ancienne valeur est "+oldValue)
                if(newValue < 11){
                    document.getElementById(oldValue.toString()).classList.add(this.couleurRetro);
                } 
                if(newValue == 10){
                    document.querySelector(".btnQuestionSuivante").innerText = "Voir les résultats";
                }               
                if(newValue==11){
                    document.querySelector(".sectionScore").removeAttribute("hidden");
                    document.querySelector(".sectionScore").classList.add("revele");
                    document.querySelector(".ctnFormRetro").setAttribute("hidden", "hidden");
                    document.querySelector(".ctnFormRetro").classList.remove("reveleBis");
                    document.querySelector(".ctnLayoutForm").classList.remove("revele");
                    document.querySelector(".btnQuestionSuivante").setAttribute("hidden", "hidden"); 
                    this.intCptQuestion = 0;
                    const refCommentaire = document.querySelector(".ctnScore__commentaire");
                    if(this.intCptResultat === 10){
                        refCommentaire.innerText = "Bravo! C'est un score parfait!";
                    } else {
                        if (this.intCptResultat < 10 && this.intCptResultat >= 7){
                            refCommentaire.innerText = "Beau travail! Tes connaissances de l'Afrique sont vraiment bonnes.";
                        }  
                        if(this.intCptResultat <= 6 && this.intCptResultat >= 4){
                            refCommentaire.innerText = "Pas mal! Tu as quand même quelques connaissances de l'Afrique.";    
                        }  
                        if (this.intCptResultat <= 3){
                            refCommentaire.innerText = "Il n'est jamais trop tard pour en apprendre plus sur le berceau de l'humanité.";
                        }   
                        if(this.intCptResultat === undefined){
                            refCommentaire.innerText = "Did you even try.";
                        }
                    } 
                }
            }
        }
    }
</script>
