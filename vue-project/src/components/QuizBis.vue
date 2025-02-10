<template >
    <section v-if="tableauAffichage[0]" class="instructions">
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
</template>

<script>
    export default{
        components: {
            
        },
        props: {
            tableauAffichage: Array,
            tableauPays: Array
        },
        data(){
            return{
                intCptResultat: 0,
                pays: JSON,
                arrPositionChoisie: [],
                arrIndicesChoisis : [],
                arrPaysChoisis : [],
                intCompteurPays : 0,
                intCompteur : 0,
                intCptQuestion: 1,
                intCptResultat : 0,
            }
        },
        methods:{
            choisirPays(){
                localStorage.clear();
                let intNbPays = Object.keys(this.tableauPays).length;

                //Créer un tableau contenant toutes les positions aléatoires possibles
                while(this.intCompteurPays < intNbPays){
                    this.arrPositionChoisie[this.intCompteurPays] = (this.intCompteurPays+1);
                    this.intCompteurPays++;
                }

                //Remplir les tableaux des indices et des réponses
                while(this.intCompteur < 10){
                    let intPositionPaysChoisi = Math.floor(Math.random()* this.arrPositionChoisie.length);
                    let intPaysChoisi = this.arrPositionChoisie[intPositionPaysChoisi];
                    this.arrIndicesChoisis[this.intCompteur] = this.tableauPays[intPaysChoisi].indice;
                    this.arrPaysChoisis[this.intCompteur] = this.tableauPays[intPaysChoisi].nom;
                    this.arrPositionChoisie.splice(intPositionPaysChoisi, 1)
                    this.intCompteur++;
                }

                localStorage.setItem("indices", JSON.stringify(this.arrIndicesChoisis));
                localStorage.setItem("pays", JSON.stringify(this.arrPaysChoisis));

               //Afficher la section question
                this.tableauAffichage[0] = false;
                this.tableauAffichage[1] = true;
            },
        }
    }
</script>