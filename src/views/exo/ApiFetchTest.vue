<template>
  <div>
    <div class="container text-center my-2">
      <h3>Pokemons</h3>
      <p v-for="(poke, index) in pokemons" :key="index">{{ poke.name }}</p>
    </div>
  </div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount, ref } from 'vue'

let pokemons = ref([]);

async function fetchPokemon(){
  try{
    let res = await fetch('https://pokeapi.co/api/v2/pokemon/');
    let data = await res.json();
    pokemons.value = ref(data.results);
    console.log(data.results)
  }catch(error){
    console.error(error);
  }
}

async function fetchMeteo(){

}

onMounted(() => {
  fetchPokemon();
});

onUpdated(()=>{
})

onBeforeUnmount(() => {
  console.log('Page Change?');
});

</script>

<style scoped lang="css">
</style>