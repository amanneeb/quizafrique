<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  
</script>

<template>
  <header>
      <RouterLink @click="changerUrl('')" to="/"><img alt="Vue logo" class="logo" src="@/assets/images/landing_page_image.png" width="50" height="50" /></RouterLink>
      <nav class="navPrincipale">
        <RouterLink @click="changerUrl('pays')" to="/pays">Pays</RouterLink>
        <RouterLink @click="changerUrl('quiz')" to="/quiz">Quiz</RouterLink>
      </nav>
  </header>
  <RouterView />
</template>

<script>
  export default {
        components: {
            
        },
        props: {
            
        },
        data() {
            return {
                url : "",
            }
        },
        mounted() {

        },
        methods: {
          changerUrl(nomLien){
            this.url = nomLien
          }
        },
        computed:{

        }, 
        watch: {
            url(newValue, oldValue){
              document.querySelectorAll(".navPrincipale > a").forEach(
                lien=>{
                  if(lien.href.indexOf("pageEnCours") != -1){
                    lien.classList.remove("pageEnCours");
                  }
                  if(lien.href.indexOf(this.url) != -1){
                    lien.classList.add("pageEnCours");
                  }
                }
              )
            }
        }
    }

</script>

