<template>
<div>
    <div>
        <state-summary v-bind:states="states"></state-summary>
    </div>
    <div class="state-list-container">
        <div class="state-container" v-for="state in states" v-bind:key="state.name">
        <state-detail 
            v-bind:state="state"
            v-on:update-visited="updateVisited"
            ></state-detail>
        </div>
    </div>
</div>
</template>

<script>
//list of states, what is the front page of the app. From there the user can go to Detail and from there we can see the summary of how many states the user has visited. 
import stateDetail from './stateDetail.vue'
import stateSummary from './stateSummary.vue'

export default {
    components: { 
        stateDetail,
        stateSummary 
    },
    name:'stateList',
    data(){
       return{
           //array of states
           states:[]
       } 
    },
    mounted(){
        this.fetchAllStates()
    },
    methods:{
        //loading all the 51 states from the database. With sequelize
        fetchAllStates(){
                this.$stateService.getAllStates().then(states => {
                    this.states = states
            })
            .catch( err => {
                alert('Sorry, can\'t fetch state list')
                console.error(err)
            })
                
        },
        //checking the visited checkmark
        updateVisited(stateName, visited){
            this.$stateService.setVisited(stateName, visited).then(()=>
            {
                this.fetchAllStates()
            })
            .catch(err =>{
                alert('Sorry, can\'t update state')
                console.error(err)
            })

        }
    }
}
</script>

<style scoped>
.state-list-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.state-container{
    margin: 1rem;
}
</style>
