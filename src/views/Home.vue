<template>

      <div class="logopo">
         <img :src="logo" :height="128" />
      </div>
<div class="content-container">
  <card-pokemon :pokemons = "pokemons"/>
</div>
</template>

<script>

import {onMounted, computed} from "vue"
import { useStore} from "vuex"

import CardPokemon from '../components/CardPokemon.vue'
import logo from "../assets/pokemon.png"
export default {
  components: { CardPokemon },
  name: 'Home',
  props: {
    msg: String
  },
  setup(){
    const store =  useStore()
    const pokemons =computed(()=>store.state.pokemonStore.pokemons)
    onMounted(() => {
        store.dispatch("pokemonStore/GETALLPOKEMONS")
  })

    return{
      pokemons,
      logo
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
