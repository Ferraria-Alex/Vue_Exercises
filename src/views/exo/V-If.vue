<template>
  <div>
    <div class="container d-flex flex-column my-5">
      <h1 class="text-center my-5">ADD YOUR PERSONAL TAGS TO A LIST</h1>
      <input class="flex-grow my-2 p-1" id="film" type="text">
      <button class="btn-primary my-1 align-self-start" @click="addFilm()">Ajouter une tag</button>
      <hr>
      <ul id="list" class="list-group">
        <div class="d-flex align-items-center flex-wrap ">
          <li class="anim m-0 list-group-item border border-2 border-success rounded-2 px-2 py-1 m-1" v-for="(film, index) in filmTab" v-on:click="deleteFilm(index)" v-on:mouseover="change(index)" v-on:mouseleave="change(index)">{{ film }}</li>
        </div>
      </ul>
      <hr>
      <button class="btn-primary" v-if="toggle"  v-on:click="hide()">Afficher la liste des tags</button>
      <button class="btn-primary" v-else v-on:click="hide()">Masquer la liste des tags</button>
    </div>
  </div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount, ref } from 'vue'

let filmTab = ref(["TEST1"]);
let toggle = ref(false);

function addFilm(){
  let inputText = document.getElementById("film").value;
  filmTab.value.push(inputText);
}

function deleteFilm(index){
  filmTab.value.splice(index, 1);
}

function hide(){
  document.getElementById("list").classList.toggle("d-none");
  toggle.value = !toggle.value;
}

function change(index){
  let listElements = document.getElementsByClassName("anim");
  listElements[index].classList.toggle("border-success");
  listElements[index].classList.toggle("delete");
  listElements[index].classList.toggle("border-danger");
}

</script>

<style scoped lang="css">
.delete:hover{
  background-color: red;
  color: white;
}
</style>