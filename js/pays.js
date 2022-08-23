/**
* @author Anaïs Mannée-Batschy <anaismannee@gmail.com>
* @file Quiz Arique - partie "Information pays"
*@version 0.0.1
*/

const refHeader = document.querySelector(".header");
const refZoneGeo = document.querySelector("[name=cardinaux]:checked");
const refLocalisation = document.querySelector(".localisation");
const refLegende = document.querySelector(".legendePhoto");
const refReference = document.querySelector(".referencePhoto")
const refExplication = document.querySelector(".explication")
const refSectionListe = document.querySelector(".fld_select")
const refListe = document.querySelector(".listeDeroulante");
const refOption = document.querySelector("option");
const refFicheInfo = document.querySelector(".infoPays");
const refBtnGauche = document.querySelector(".btn_gauche");
const refBtnDroit = document.querySelector(".btn_droite");

/**
 * Sélectionner au hasard l'image initiale
 */
 function choisirImageInitiale(){
    let intNumHasard = Math.floor((Math.random()*5)+1)
    if(intNumHasard === 1){
        afficherImageNord();
    } 
    if (intNumHasard === 2){
        afficherImageOuest();
    }
    if(intNumHasard === 3){
        afficherImageCentre();
    }
    if (intNumHasard === 4){
        afficherImageEst();
    }
    if (intNumHasard === 5){
        afficherImageSud();
    }
}

/**
 * Faire apparaitre la liste déroulante
 */
 function afficherListeDeroulante(){
    const refZone = document.querySelector("[name=cardinaux]:checked");
    if(refZone !== ""){
        refSectionListe.style.display = "flex";
        document.querySelector(".zone").innerText = refZone.value;
    }    
}

/**
 * Sélectionner les pays à insérer dans la liste déroulante
 */
 function selectionnerListeDeroulante(){
    let intNbPays = Object.keys(objJSONPays).length;
    //effacerPays();
    refListe.innerHTML = `<option></option>`;
    for (let intCptDeroulant = 1; intCptDeroulant <= intNbPays; intCptDeroulant++){
        let strPays = "pays"+intCptDeroulant;
        const refZoneGeo = document.querySelector("[name=cardinaux]:checked");
        if(objJSONPays[strPays].localisation === refZoneGeo.value){
            refListe.innerHTML += `<option> ${objJSONPays["pays"+intCptDeroulant].nom}</option>`;
        }
    }
}

/**
 * Faire apparaitre la fiche information
 */
 function revelerFicheInfo(){
    if(refLocalisation.innerText === ""){
        refFicheInfo.style.display = "none";
    } else{
        refFicheInfo.style.display = "flex";
        refExplication.setAttribute("hidden", "true");
    }
}

/**
 * Insérer les informations dans les champs appropriés
 */
function afficherInfo(){
    let intNbPays = Object.keys(objJSONPays).length;
    for (let intCpt = 1; intCpt <= intNbPays; intCpt++){
        let strNumPays = "pays"+intCpt;
        let strPaysSelectionne = objJSONPays[strNumPays].nom;
        if (strPaysSelectionne === refListe.value){
            document.querySelector(".carte").src=`../images/cartes/${objJSONPays[strNumPays].drapeau}`;
            document.querySelector(".drapeau").src=`../images/drapeaux/${objJSONPays[strNumPays].drapeau}`;
            document.querySelector(".drapeau").alt= objJSONPays[strNumPays].alt;
            refLocalisation.innerText = objJSONPays[strNumPays].localisation;
            document.querySelector(".pays").innerText = strPaysSelectionne;
            document.querySelector(".spanCapitale").innerText = objJSONPays[strNumPays].capitale;
            document.querySelector(".spanVillesSecondaires").innerText = objJSONPays[strNumPays].villesSecondaires;
            document.querySelector(".spanPopulation").innerText = objJSONPays[strNumPays].population;
            document.querySelector(".spanLangues").innerText = objJSONPays[strNumPays].langues;
            document.querySelector(".spanMonnaie").innerText = objJSONPays[strNumPays].monnaie;
            document.querySelector(".spanSources").innerHTML = objJSONPays[strNumPays].sources;
        }
    }
    changerEntete()
    revelerFicheInfo()
}

/**
 * Modifier l'image d'en-tête
 */
function changerEntete(){
    if(refLocalisation.innerText === "AFRIQUE DU NORD"){
        afficherImageNord();
    }else{
        if(refLocalisation.innerText == "AFRIQUE DE L'OUEST"){
            afficherImageOuest();
        }
        if(refLocalisation.innerText === "AFRIQUE CENTRALE"){
            afficherImageCentre();
        }
        if(refLocalisation.innerText === "AFRIQUE DE L'EST"){
            afficherImageEst();
        }
        if(refLocalisation.innerText === "AFRIQUE AUSTRALE"){
            afficherImageSud();
        }
    }
}

/**
 * Afficher image et légendes : Afrique du nord
 */
function afficherImageNord(){
    refHeader.style.backgroundImage = "url(../images/afrique_nord.jpg)";
    refHeader.style.backgroundPosition = "0px 0px";
    refHeader.style.backgroundSize = "cover";
    refLegende.innerText = "Carthage, Tunisie";
    refLegende.style.textShadow = "black 1px 1px";
    refReference.innerHTML = 'Photo by <a href="https://unsplash.com/@christian80gabi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Christian Gabi</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
    refReference.style.color = "white";
    refReference.style.textShadow = "black 1px 1px";
}

/**
 * Afficher image et légendes : Afrique de l'ouest
 */
function afficherImageOuest(){
    refHeader.style.backgroundImage = "url(../images/afrique_ouest.jpg)";
    refHeader.style.backgroundPosition = "center";
    refHeader.style.backgroundSize = "cover";
    refLegende.innerText = "Dakar, Sénégal";
    refLegende.style.textShadow = "none";
    refLegende.style.color = "rgb(29, 21, 11)";
    refReference.innerHTML = 'Photo by <a href="https://unsplash.com/@tongni?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">D AD</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
    refReference.style.color = "rgb(29, 21, 11)";
}

/**
 * Afficher images et légendes : Afrique centrale
 */
function afficherImageCentre(){
    refHeader.style.backgroundImage = "url(../images/afrique_centrale.jpg)";
    refHeader.style.backgroundPosition = "center";
    refHeader.style.backgroundSize = "cover";
    refLegende.innerText = "Libreville, Gabon";
    refLegende.style.textShadow = "none";
    refLegende.style.color = "white";
    refReference.innerHTML = 'Photo by <a href="https://unsplash.com/@raphaelito?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ralph Messi</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    refReference.style.color = "white";
}

/**
 * Afficher images et légendes : Afrique de l'est
 */
function afficherImageEst(){
    refHeader.style.backgroundImage = "url(../images/afrique_est.jpg)";
    refHeader.style.backgroundPosition = "center left";
    refHeader.style.backgroundSize = "cover";
    refLegende.innerText = "Tanzanie";
    refLegende.style.textShadow = "none";
    refReference.innerHTML = 'Photo by <a href="https://unsplash.com/@fresonneveld?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Fré Sonneveld</a> on <a href="https://unsplash.com/photos/wdMWMHXUpsc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    refReference.style.color = "white";
}

/**
 * Afficher images et légendes : Afrique australe
 */
function afficherImageSud(){
    refHeader.style.backgroundImage = "url(../images/afrique_australe.jpg)";
    refHeader.style.backgroundPosition = "0px 0px";
    refHeader.style.backgroundSize = "cover";
    refLegende.innerText = "Madisa Camp, Namibie";
    refLegende.style.color = "white";
    refLegende.style.textShadow = "none";
    refReference.innerHTML = 'Photo by <a href="https://unsplash.com/@claudiopiacentino?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Claudio Piacentino</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
    refReference.style.color = "white";
}



window.addEventListener("load", function(){
    choisirImageInitiale();
});
document.querySelector(".fld_cardinaux").addEventListener("click", function(){
    afficherListeDeroulante();
    selectionnerListeDeroulante();
});
document.querySelector(".fld_select").addEventListener("click", function(){
    afficherInfo();
    supprimerFleche()
});
