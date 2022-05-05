<template>
<div class="state-map">

    <h2>You clicked: {{state.name}} </h2>
    <p v-if="state.visited">You have visited this state</p>
    <p v-else>You have not visited this state</p>
    <p>{{ fact }} </p>
    <div id="map-container" v-if="dataReady">
        <l-map ref="map" v-on:ready="onMapReady" v-bind:center="mapCenter" v-bind:zoom="state.zoom">
            <l-tile-layer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; openstreetmap contributors">
            </l-tile-layer>
        </l-map>
    </div>   
</div>

</template>
<script>

import {LMap,LTileLayer} from '@vue-leaflet/vue-leaflet'
export default {
    name:'stateMap',
    components:{
        LMap,LTileLayer
    },
    data(){
        return{
            state:{},
            dataReady:false,
            mapReady:false,
            fact:''
        }
    },
    mounted(){
        // Vue calls the mounted() hook when your component is added to the DOM. It is most often used to send an HTTP request to fetch data that the component will then render.
        this.state.name = this.$route.params.state //this.state.name = /map/Minnesota if we click on Minnesota
        this.fetchStateData()
        this.stateFact()
    },
    methods:{
        fetchStateData(){
            this.$stateService.getOneState(this.state.name)
            .then(state=>{
                this.state=state
                this.dataReady=true
            }).catch( err=>{
                //404
                if(err.response && err.response.status === 404){
                    this.state.name = this.$router.push({name: 'PageNotFound'}) //send the user to the 404 component
                }
                //500
                else{
                    alert('Sorry, something went wrong on our side')
                    console.error(err)//for the dev
                }
            })
        },
        onMapReady(){
            this.mapReady = true
        },
        setMapView(){
            if (this.mapReady && this.dataReady){
                //todo make sure map shows correct place and zoom level
                this.$ref.map.leafletObject.setView(this.mapCenter,this.zoom)
            }
        },
        stateFact(){
            
            this.$stateService.getStateFact(this.state.name)
                .then(fact=>{
                    console.log(fact)
                    this.fact = fact['fact']
                    // this.state.name= stateName
                    
                    
                })
            
        }
    },
    computed:{
        mapCenter(){
            return [this.state.lat, this.state.lon]
        }
    }

}

</script>

<style scoped>
#map-container{
    height:30rem;
}
</style>
