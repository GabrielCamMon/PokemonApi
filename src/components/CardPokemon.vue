<template>
<div>
    <a-row>
       <a-space v-for="item in poke" :key="item.id" direction="vertical" :size="16">
        <a-col>
          <a-card  hoverable style="width: 240px" >
            <template v-slot:cover>
              <img  
                alt="example"
                :src="item.sprites.front_default"
              />
            </template> 
            <a-card-meta :title="item.name">
              <template v-slot:description>
                weight : {{item.weight}}
              </template>
            </a-card-meta>
          </a-card>
      </a-col>
       </a-space>
    </a-row>
  </div>

</template>
<script>
import {toRefs} from "vue"

export default {
  props:["pokemons"],
  setup(props){
      const {pokemons}= toRefs(props)

      return{
        poke:pokemons
      }
  }
}
</script>
<style lang="">
    
</style>