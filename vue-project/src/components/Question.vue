<template>
    <section class="questionnaire" v-if="tableauAffichage[1]" >
            <h1 class="numQuestion"><span>{{this.intCptQuestion}}</span></h1>
            <div class="ctnQuiz">
                <form class="form">
                    <p class="indice">{{this.indices[this.intCptQuestion-1]}}</p>
                    <div class="ctnReponse">
                        <input type="text" class="reponse" v-model="laReponse">
                        <p class="avertissement"> * Le correcteur est sensible au accent</p>
                        <button type="button" class="btnRepondre button" @click="verifierLaReponse()">Répondre</button>
                    </div>
                </form>                
                <button type="button" class="btnQuestionSuivante boutonSecondaire" @click="afficherQuestionSuivante()" hidden>Suivant<span class="numProchaineQuestion"></span></button>
                <div class="reponses" v-show="bonneReponseRevelee">
                    <p>Réponse: </p>
                    <p class="reponses__bonneReponse correct" >{{ this.pays[this.intCptQuestion-1] }}</p>
                </div>
                <div class="resultats">
                    <p>Résultats: </p>                    
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
        <Score v-if="this.afficheScore"  :tableauAffichage="this.arrEtatAffichage" :resultat="this.nbDeReponsesCorrectes"></Score>
</template>

<script>
    import Score from '@/components/Score.vue';
    export default{
        components: {
            Score
        },
        props: {
            tableauAffichage: Array,
            tableauPays: Array,
        },
        data(){
            return{
                intCptResultat: 0,
                arrEtatAffichage: [true, false, false],
                arrPays: JSON,
                indices: JSON.parse(localStorage.getItem("indices")),
                pays: JSON.parse(localStorage.getItem("pays")),
                intCptQuestion: 1,
                nbDeReponsesCorrectes: 0,
                bonneReponse: "",
                bonneReponseRevelee : false,
                couleurRetro: "",
                strArrIndice: "",
                strArrPays: "",
                laReponse: "",
                afficheScore: false,
            }
        },
        methods:{
            verifierLaReponse(){
                if(this.laReponse.toLowerCase() == this.pays[this.intCptQuestion-1].toLowerCase()){
                    this.intCptResultat++;
                    this.nbDeReponsesCorrectes++;
                    this.couleurRetro = "correct";
                }else{
                    this.couleurRetro = "incorrect";
                }
                this.bonneReponseRevelee = true;
                this.afficherRetroactionReponse();
            },
            afficherRetroactionReponse(){
                document.querySelector(".btnRepondre").setAttribute("disabled", "disabled")
                document.querySelector(".btnQuestionSuivante").removeAttribute("hidden");
                document.getElementById(this.intCptQuestion).classList.add(this.couleurRetro);
            },
            afficherQuestionSuivante(){
                this.laReponse = "";
                this.bonneReponseRevelee = false;
                document.querySelector(".btnRepondre").removeAttribute("disabled");
                document.querySelector(".reponses__bonneReponse").classList.add(this.couleurRetro);
                document.querySelector(".btnQuestionSuivante").setAttribute("hidden", "hidden");
                this.intCptQuestion++;    
                if(this.intCptQuestion == 11){
                    localStorage.setItem("resultat", this.nbDeReponsesCorrectes)
                    this.tableauAffichage[1] = false;
                    this.tableauAffichage[2] = true;
                    this.intCptQuestion = 1;
                    this.afficheScore = true;
                }
            }
        }
    }
</script>