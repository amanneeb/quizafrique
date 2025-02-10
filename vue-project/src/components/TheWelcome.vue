<script setup>

</script>

<template>
<main class="accueil">
  <img src="@/assets/images/landing_page_image.png"  alt="Dessin du continent africain avec une girafe et un arbre devant coucher de soleil">
  <section>
    <h1>Quiz Afrique</h1>
    <p>Un espace ludique pour apprendre et tester tes connaissances sur le continent africain.</p>
    <div class="ctnBoutons">
      <a class="button" href='./quiz'>Démarrer le quiz</a>
      <a class="button" href='./pays'>Découvrir les pays</a>
    </div>
  </section>
</main>
   
</template>

<script>
  export default {
      props: {
      },
      data() {
          return {
              
          }
      },
      mounted() {
        document.getElementById("app").removeAttribute("class");
        localStorage.setItem("background", "globe");
        document.getElementById("app").classList.add(localStorage.getItem("background"));
      },
      methods: {
        
      }
    }
</script>