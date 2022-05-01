<template>
<div class="state-map">

    <h2>You clicked: {{state.name}} </h2>
    <p v-if="state.visited">You have visited this state</p>
    <p v-else>You have not visited this state</p>
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
            mapReady:false
        }
    },
    mounted(){
        this.state.name = this.$route.params.state
        this.fetchStateData()
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
                    this.state.name = '?' //TODO: improve ui
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
