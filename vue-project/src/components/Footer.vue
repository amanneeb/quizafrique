<script setup>

</script>

<template>
    <footer>
        <p> © 2022-{{ this.annee }} - Anaïs MB | Quiz Afrique</p>
    </footer>
</template>

<script>
  export default {
      props: {
      },
      data() {
          return {
              annee: "",
          }
      },
      mounted() {
        this.annee = new Date().getFullYear();
      },
      methods: {
        
      }
    }
</script>