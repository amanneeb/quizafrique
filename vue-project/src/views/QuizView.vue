<template>
    <main class="mainQuiz">
        <QuizBis :tableauAffichage="this.arrEtatAffichage" :tableauPays="this.arrPays"></QuizBis>    
        <Question :tableauAffichage="this.arrEtatAffichage"></Question>
        <Footer></Footer>
    </main>
    
</template>

<script>
    import QuizBis from '@/components/QuizBis.vue';
    import Footer from '@/components/Footer.vue';
    import JSON from '@/assets/JSON.json'
    import Question from '@/components/Question.vue';
    export default{
        components: {
            QuizBis,
            Question,
            Footer
        },
        data(){
            return{
                intCptResultat: 0,
                arrEtatAffichage: [true, false, false],
                arrPays: JSON,
                arrPaysChoisis : [],
                arrIndicesChoisis : [],
            }
        },
        methods:{
            recevoirResultat(resultatFinal) {
                this.intCptResultat = resultatFinal;
                console.log(this.intCptResultat);
            }   
        }
    }
</script>