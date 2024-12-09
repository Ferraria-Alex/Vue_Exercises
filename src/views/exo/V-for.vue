<template>
  <div>
    <div class="container d-flex flex-column my-5">
      <h1 class="text-center my-5">ADD YOUR FILM TO THE LIST</h1>
      <input class="flex-grow my-2 p-1" id="film" type="text">
      <button class="btn-primary my-1 align-self-start" @click="addFilm()">Ajouter un film</button>
      <hr>
      <div class="d-flex justify-content-between align-items-center border-start border-primary px-2 py-1 my-1" v-for="(film, index) in filmTab">
        <p class="m-0">{{ index }} - {{ film }}</p>
        <button class="btn-primary"  v-on:click="deleteFilm(index)" > Remove </button>
      </div>
      <hr>
      <p id="message"></p>
    </div>
  </div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount, ref } from 'vue'

let filmTab = ref(["TEST1"]);

function addFilm(){
  let inputText = document.getElementById("film").value;
  filmTab.value.push(inputText);
}

function deleteFilm(index){
  filmTab.value.splice(index, 1);
}

</script>

<style scoped lang="css">
</style>