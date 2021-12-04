import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cards:[
            {subtitle: "Harry Potter", title: "Pedra Filosofal", author:"J.K.Rowling", date:"07/26/1997", pages:"223", genre:"Romance/Fantasia", image:"hp1.jpg", note:"4.7", description:"Quando bebê, Harry Potter fora deixado na porta de seus tios maternos Petúnia Dursley (irmã mais velha de Lillian) e Válter Dursley. Harry Potter cresceu na casa dos seus tios, que escondiam a verdade sobre sua família"},  
        ],
        title:"Coin Rate: ",
        events: [],
    },
    mutations: {
        SET_EVENTS(state, payload){
            state.events = payload
        }
    },
    actions: {
        fetchEvents({commit}){
            console.log("fetchEvents")
            Axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => {
                    const payload = response.data.bpi
                    console.log(payload)
                    commit('SET_EVENTS',payload)
                })
            .catch(error=>{console.log(error)})
        }
    },
    getters: {
        bigTitle(state){
            return state.title.toUpperCase()
        }
    }
  })