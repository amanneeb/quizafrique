/**
* @author Anaïs Mannée-Batschy <anaismannee@gmail.com>
* @file Quiz Afrique - partie "Page d'accueil"
*@version 0.0.1
*/

function ouvrirQuiz(){
    window.open("../html/quiz.html", "_blank")
};

document.querySelector(".btnQuiz").addEventListener("click", function(){
    ouvrirQuiz()
});