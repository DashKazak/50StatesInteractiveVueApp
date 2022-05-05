<template>
    
<div class="state-container">
    <ul v-for="state in states" v-bind:key="state.name">
        <li>{{ state.name }}</li>
    </ul>
</div>
</template>
<script>
export default {
    name:'statesVisited',
    data(){
        return {
            states: []
        }  
    },
    mounted(){
        this.listOfVisitedStates()
    },
    methods:{
        listOfVisitedStates(){
            this.$stateService.getAllVisitedStates().then(states => {
                this.states = states
        })
        .catch( err => {
            alert('Sorry, can\'t fetch state list')
                console.error(err)
            })
        }
    }
}

</script>
<style scoped>

</style>