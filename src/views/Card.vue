<template>
  <div>
    <h1>{{thistitle}}</h1>
    <v-row>
      <v-col
        v-for="(data,n) in events"
        :key="n"
        cols="12"
        sm="6"
        md="4"
        xs="2"
      >
        <MyCard :cardid="n" :cardCode="data.code" :cardDescription="data.description" :cardImage="data.image" :cardRate="data.rate" :cardSymbol="data.symbol" :cardFloat="data.rate_float"></MyCard>
        
      </v-col>
    </v-row>

  </div>
</template>

<script>

import MyCard from '../components/MyCard'
import Store from '../store'

export default {
  name: 'Card',
  data(){
    return{
      card: Store.state.cards,
      size: Store.state.cards.length,
      titleview: Store.state.title,
    }
  },

  computed:{
    MyCards(){
      return Store.state.cards
    },
    thistitle(){
      return Store.getters.bigTitle
    },
    events(){
      return Store.state.events
    }
  },

  components: {
    MyCard,
  },

  async created(){
    Store.dispatch("fetchEvents") 
  }
}
</script>
