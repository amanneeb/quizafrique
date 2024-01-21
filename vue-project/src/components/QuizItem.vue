

<script>
    export default{
        props:{
            couleur:{
                type:String,
            },
            position:{
                type:Number,
            },
        },
        data(){
            return{
                positionRetro: this.position.toString(),
            }
        },
        computed:{
        },
        watch:{
            positionRetro: function(){
                console.log("."+positionRetro + " circle")
                document.querySelector("."+positionRetro + " circle").classList.add(this.couleur)
            }
        }
    }
</script>

<style scoped>
    span{
        margin: 5px 5px;
    }
    .regulier{
        fill: black;
    }
    .correct{
        fill: green;
    }
    .erreur{
        fill: darkred;
    }
</style>