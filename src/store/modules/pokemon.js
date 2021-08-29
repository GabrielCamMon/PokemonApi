import { GETALLPOKEMONS} from "@/store/types/types.js";
import { getPokemonsByIdApi} from "../../api/axios"

export default  {
  namespaced: true,
  state: {
    pokemons: []
  },

  mutations: {
    [GETALLPOKEMONS]: (state, payload) => {state.pokemons.push(payload)}
  },

  actions: {
    [GETALLPOKEMONS]: async ({ commit }) => {
        for (let i=1,p = getPokemonsByIdApi;i<=20;i++){
          p(i).then( (response)=> {
            // handle success
            console.log(response);
            commit(GETALLPOKEMONS,response.data)
          })
          .catch(error => {
            // handle error
            console.log(error);
          })
            
        }
     
       
    
    }
  },

//   getters: {
//     [GET_COUNTER2]: state => state.counter2
//   }
};