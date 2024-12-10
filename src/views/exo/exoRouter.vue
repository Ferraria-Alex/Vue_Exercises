<template>
  <div class="container py-5">
    <p class="text-center">Phrase instructive</p>
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center p-2 ps-3" v-for="item in items">
        <p class="m-0">{{ item.name }}</p>
        <router-link :to="`/details/${item.id}`"><button>Details</button></router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'

const items = [
  { id: 1, name: 'Élément 1' },
  { id: 2, name: 'Élément 2' },
  { id: 3, name: 'Élément 3' },
  { id: 44, name: 'Élément 44' }
];

</script>

<style scoped lang="css">
</style>