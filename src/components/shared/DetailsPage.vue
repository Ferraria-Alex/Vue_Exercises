<template>
  <div class="container py-5 d-flex flex-column align-items-center">
    <h1 class="text-center">Details</h1>
    <div class="card resize">
      <h4 class="card-title">{{ props.id }}</h4>
      <p class="card-text">This is something really fascinating called element {{ props.id }}</p>
      <router-link to="/exo-lesson-router"><button>Retour</button></router-link>
    </div>
  </div>
</template>

<script setup lang='js'>
import { } from 'vue'

let props = defineProps({
  id:{
    type:Number,
    required: true
  }
})

</script>

<style scoped lang="css">

.resize{
  max-width: 500px;
}
</style>