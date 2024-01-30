<script setup>

</script>

<template>
<main class="accueil">
  <section class="test">
      <p class="test__p">Test tes connaissances sur le continent africain</p>
      <button type="button" class="btnQuiz"><a href='./quiz'>Démarrer le quiz</a></button>
  </section>
  <section class="pays">
      <p class="pays__p">Apprends en plus sur le continent africain</p>
      <button type="button" class="btnPays"><a href='./pays'>Découvrir les pays</a></button>
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