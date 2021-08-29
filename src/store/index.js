import {createStore} from "vuex";
import pokemonStore from "@/store/modules/pokemon.js" 

export default createStore({
  modules: {
    pokemonStore
  }
});