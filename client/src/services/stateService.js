import axios from "axios"
export default{
    //API calls 
    getAllStates(){
        return axios.get('/api/states').then(response =>{
            return response.data
        })
    },

    setVisited(stateName,visited){
        let requestData={visited:visited}
        return axios.patch('/api/states/' + stateName,requestData).then(response =>{
            return response.data
        })
    },

    getOneState(stateName){
        return axios.get('/api/state/'+ stateName ).then(response =>{
            return response.data
        })
    },

    //In your Vue client, add a function to the StateService.js file that will make a request to your new API route.
    getAllVisitedStates(){
        return axios.get('/api/states/visited').then(response =>{
            return response.data
        })
    },
    getStateFact(stateName){
        return axios('https://state-facts.herokuapp.com/api/fact/'+ stateName).then(response =>{
            return response.data
        })
    }

}
