/**
* @author Anaïs Mannée-Batschy <anaismannee@gmail.com>
* @file Quiz Afrique - partie "Quiz"
*@version 0.0.1
*/

let intCptQuestion = 1;
let intCptResultat = 0;
let intCompteurPays = 0;
let intCompteur = 0;
let strNumQuestion = "";
const arrPositionChoisie = [];
const arrIndicesChoisis = [];
const arrPaysChoisis = [];
const refSectionScore = document.querySelector(".sectionScore");
const refChampScore = document.querySelector(".score");
const refRetroaction = document.querySelector(".retroaction");
const refChampReponse = document.querySelector(".reponse");
const refBtnRepondre = document.querySelector(".btnRepondre");
const refBtnLancer = document.querySelector(".btnLancerJeu");
const refNumQuestion = document.querySelector(".numQuestion");
const refSectionSuivant = document.querySelector(".sectionSuivant");
const refProchaineQuestion = document.querySelector(".numProchaineQuestion");
const refListePays = document.querySelector(".listePays");
const refForm = document.querySelector("form");
const refCtnQuestionnaire = document.querySelector(".ctnFormRetro")
const refIndice = document.querySelector(".indice");
const refInstructions = document.querySelector(".instructions");
let intNumQuestion = parseInt(refNumQuestion.innerText);

/**
 * Ouvrir la page "pays" dans un nouvel onglet
 */
 function ouvrirLienPagePays(){
    window.open("./pays.html", "_blank")
}

/**
 * Sélectionner les pays et les indices associés avant de démarrer le jeu
 */
function choisirPays(){
    let intNbPays = Object.keys(objJSONPays).length;
    while(intCompteurPays < intNbPays){
        arrPositionChoisie[intCompteurPays] = (intCompteurPays+1);
        intCompteurPays++;
    }
    while(intCompteur < 10){
        let intPositionPaysChoisi = Math.floor(Math.random()* arrPositionChoisie.length);
        let intPaysChoisi = arrPositionChoisie[intPositionPaysChoisi];
        arrIndicesChoisis[intCompteur] = objJSONPays["pays"+intPaysChoisi].indice;
        arrPaysChoisis[intCompteur] = objJSONPays["pays"+intPaysChoisi].nom;
        arrPositionChoisie.splice(intPositionPaysChoisi, 1)
        intCompteur++;
    }
    refCtnQuestionnaire.style.display = "block";
    refBtnLancer.style.display = "none";
    refInstructions.style.display = "none";    
    document.querySelector(".titreQuiz").style.display = "block";
}

/**
* Faire apparaitre la nouvelle question
*/
function afficherQuestion(){
    refBtnRepondre.removeAttribute("disabled");
    refChampReponse.removeAttribute("disabled");
    refSectionSuivant.style.display = "none";
    refRetroaction.innerText = "";
    document.querySelector(".reponse").value = "";
    refNumQuestion.innerText = intCptQuestion;
    refProchaineQuestion.innerText = intCptQuestion+1;
    strNumQuestion = document.querySelector(".numQuestion").innerText;
    let intNumQuestion = parseInt(strNumQuestion);
    refIndice.innerText = arrIndicesChoisis[intNumQuestion-1];
}

/**
* Corriger la réponse donnée
*/
function verifierReponse(){
    
    let strReponseMaj = refChampReponse.value.toUpperCase();
    strNumQuestion = document.querySelector(".numQuestion").innerText;
    let intNumQuestion = parseInt(strNumQuestion);
    let strBonneReponse = arrPaysChoisis[intNumQuestion-1];
    
    if(strBonneReponse === strReponseMaj){
        refRetroaction.innerText = "Bravo! Passe à la prochaine question.";
        intCptResultat++;
        refChampScore.innerText = intCptResultat;
        console.log("nb bonne réponse :" + (intCptResultat));
    } else{
        refRetroaction.innerText = "Dommage! Tu auras plus de chance avec la prochaine question.";       
    }
    refBtnRepondre.setAttribute("disabled", "true");
    refChampReponse.setAttribute("disabled", "true");
    refSectionSuivant.removeAttribute("hidden");
    refSectionSuivant.style.display = "block";
    afficherListePays();
    if(refNumQuestion.innerText === "10"){
        afficherScore();
    }
}

/**
* Changer le numéro de la question affichée (titre) et la question suivante(bouton)
*/
function changerNumQuestion(){
    intCptQuestion++;
    refNumQuestion.innerText = intCptQuestion;
    refProchaineQuestion.innerText = intCptQuestion+1;
}

/**
* Afficher les pays dont les indices ont déjà été donnés
*/
function afficherListePays(){
    document.querySelector(".ctnListe").style.display = "block";
    strNumQuestion = document.querySelector(".numQuestion").innerText;
    let intNumQuestion = parseInt(strNumQuestion);
    let refListeLi = document.querySelectorAll("li")
    let refDernierLi = refListeLi[refListeLi.length-1];
    if(refRetroaction.innerText === "Bravo! Passe à la prochaine question."){
        refListePays.innerHTML += `<li>${arrPaysChoisis[intNumQuestion-1]} &#9989; </li>`;
        //refDernierLi.style.color = "green";
    } else{
        refListePays.innerHTML += `<li>${arrPaysChoisis[intNumQuestion-1]} &#x274C; </li>`;
        //refDernierLi.style.color = "red";
    }
}

/**
* Ouvrir la dernière section et afficher le résultat final
*/
function afficherScore(){
    refCtnQuestionnaire.style.display = "none";
    refSectionSuivant.style.display = "none";
    refSectionScore.style.display = "flex";
    document.querySelector(".titreQuiz").style.display = "none";    
    let intResultat = parseInt(refChampScore.innerText);
    const refCommentaire = document.querySelector(".commentaire");

    if(intResultat === 10){
        refCommentaire.innerText = "Tu as eu un score parfait. Bravo!";
    } else {
        if (intResultat < 10 && intResultat >= 7 ){
            refCommentaire.innerText = "Beau travail! Tes connaissances de l'Afrique sont vraiment bonnes.";
        }  
        if(intResultat <= 6 && intResultat >= 4 ){
            refCommentaire.innerText = "Pas mal! Tu as quand même quelques connaissances de l'Afrique.";    
        }  
        if (intResultat <= 3){
            refCommentaire.innerText = "Il n'est jamais trop tard pour en apprendre plus sur le berceau de l'humanité.";
        }   
        if(intResultat === undefined){
            refCommentaire.innerText = "Did you even try.";
        }
    } 
}

/**
 * Rafraichir la page et retourner à l'état initial
 */
function lancerNvllePartie(){
    location.reload()
}



document.querySelector(".btnRepondre").addEventListener("click", function(){
    verifierReponse();
});
document.querySelector(".btnQuestionSuivante").addEventListener("click", function(){
    changerNumQuestion();
    afficherQuestion();
    
});
document.querySelector(".btnLancerJeu").addEventListener("click", function(){
    choisirPays();
    afficherQuestion(); 
});

document.querySelector(".btnRelancer").addEventListener("click", function(){
    lancerNvllePartie();
});
document.querySelector(".lienPays").addEventListener("click", function(){
    ouvrirLienPagePays();
});
