import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cards:[
            {title: "Harry Potter", subtitle: "Pedra Filosofal", author:"J.K.Rowling", date:"07/26/1997", pages:"223", genre:"Romance/Fantasia", image:"hp1.jpg", note:"4.7", description:"Quando bebê, Harry Potter fora deixado na porta de seus tios maternos Petúnia Dursley (irmã mais velha de Lillian) e Válter Dursley. Harry Potter cresceu na casa dos seus tios, que escondiam a verdade sobre sua família"},  
            {title: "Harry Potter", subtitle: "Camara Secreta", author:"J.K.Rowling", date:"07/26/1997", pages:"223", genre:"Romance/Fantasia", note:"4.7", description:"Quando bebê, Harry Potter fora deixado na porta de seus tios maternos Petúnia Dursley (irmã mais velha de Lillian) e Válter Dursley. Harry Potter cresceu na casa dos seus tios, que escondiam a verdade sobre sua família"},  
            {title: "Harry Potter", subtitle: "Prisioneira de Azkaban", author:"J.K.Rowling", date:"07/26/1997", pages:"223", genre:"Romance/Fantasia", note:"4.7", description:"Quando bebê, Harry Potter fora deixado na porta de seus tios maternos Petúnia Dursley (irmã mais velha de Lillian) e Válter Dursley. Harry Potter cresceu na casa dos seus tios, que escondiam a verdade sobre sua família"},  
            {title: "Harry Potter", subtitle: "Calice de Fogo", author:"J.K.Rowling", date:"07/26/1997", pages:"223", genre:"Romance/Fantasia", note:"4.7", description:"Quando bebê, Harry Potter fora deixado na porta de seus tios maternos Petúnia Dursley (irmã mais velha de Lillian) e Válter Dursley. Harry Potter cresceu na casa dos seus tios, que escondiam a verdade sobre sua família"},  
            {title: "Harry Potter", subtitle: "Ordem da Fenix", author:"J.K.Rowling", date:"07/26/1997", pages:"223", genre:"Romance/Fantasia", note:"4.7", description:"Quando bebê, Harry Potter fora deixado na porta de seus tios maternos Petúnia Dursley (irmã mais velha de Lillian) e Válter Dursley. Harry Potter cresceu na casa dos seus tios, que escondiam a verdade sobre sua família"},  
            {title: "Harry Potter", subtitle: "Enigma do Principe", author:"J.K.Rowling", date:"07/26/1997", pages:"223", genre:"Romance/Fantasia", note:"4.7", description:"Quando bebê, Harry Potter fora deixado na porta de seus tios maternos Petúnia Dursley (irmã mais velha de Lillian) e Válter Dursley. Harry Potter cresceu na casa dos seus tios, que escondiam a verdade sobre sua família"},  
            {title: "Harry Potter", subtitle: "Reliquias 1", author:"J.K.Rowling", date:"07/26/1997", pages:"223", genre:"Romance/Fantasia", note:"4.7", description:"Quando bebê, Harry Potter fora deixado na porta de seus tios maternos Petúnia Dursley (irmã mais velha de Lillian) e Válter Dursley. Harry Potter cresceu na casa dos seus tios, que escondiam a verdade sobre sua família"},  
            {title: "Harry Potter", subtitle: "Reliquias 2", author:"J.K.Rowling", date:"07/26/1997", pages:"223", genre:"Romance/Fantasia", note:"4.7", description:"Quando bebê, Harry Potter fora deixado na porta de seus tios maternos Petúnia Dursley (irmã mais velha de Lillian) e Válter Dursley. Harry Potter cresceu na casa dos seus tios, que escondiam a verdade sobre sua família"},  
        ],
    },
    mutations: {
    },
    actions: {
    },
    getters: {
    }
  })