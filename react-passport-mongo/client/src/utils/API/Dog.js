import axios from "axios";

export default{
    getDogs: function() {
        return axios.get("/dogs/")
    },
    createDog: function(dogData){
        return axios.post("/dogs/")
    },
    updateDog: function(dogData){
        return axios.put("/dogs/" + id)
    }
};