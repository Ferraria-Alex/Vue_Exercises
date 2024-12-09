<template>
  <div>
    <div class="container my-4 bg-primary-subtle rounded-1 p-3">
      <div class="bg-white rounded-1 my-1 px-2">
        <h1>{{ props.name }}</h1>
      </div>
      <div class="d-flex my-1">
        <button class="btn-primary flex-grow-1" v-if="toggle" v-on:click="hide()">Afficher les infos</button>
        <button class="btn-primary flex-grow-1" v-else v-on:click="hide()">Masquer les infos</button>
      </div>
      <div v-if="toggle" class="d-flex flex-column my-1">
        <ul class="list-group">
          <li class="list-group-item">{{ props.email }}</li>
          <li class="list-group-item">{{ props.phone }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount, ref } from 'vue'

let toggle = ref(false);
const props = defineProps(['name', 'email', 'phone']);

function hide(){
  toggle.value = !toggle.value;
}

</script>

<style scoped lang="css">
</style>