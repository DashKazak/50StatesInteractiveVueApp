<template>
    <div>
        <p> There are {{states.length}} states and Disctrict of Columbia</p>
        <p> You have visited {{totalVisited}} {{units}}</p>
        <p id="all-visited-message" v-if="areAllVisited"> You have visited all 50 states and Disctrict of Columbia!!!</p>
    </div>
</template>

<script>

export default {
    name:'stateSummary',
    props:{
        states:Array
    },
    computed:{
        totalVisited(){
            let visitedCount = 0
            this.states.forEach( state =>{
                if (state.visited){
                    visitedCount++
                }
            })
            return visitedCount
        },
        units(){
            if (this.totalVisited == 1){
                return 'state'
            } else{
                return 'states'
            }
        },
        areAllVisited(){
            return this.totalVisited === this.states.length
        }
    }
}

</script>

<style>
#all-visited-message{
    color:red;
    font-weight: 600;
}

</style>
