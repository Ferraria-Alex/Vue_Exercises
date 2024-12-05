<template>
  <div class="container d-flex flex-column">
    <input class="my-2" type="text" v-model="firstTitle" :keyup="detect()">
    <h2 class="my-2" :class="{maClassHello: classToggle1, maClassWorld: classToggle2, hide: classToggle3}" >Hello World!!! Dynamic Class</h2>
    <input class="my-2" type="text" v-model="secondTitle">
    <h2 class="my-2" :style="{backgroundColor: secondTitle}">Hello World!!! Dynamic Style</h2>
    <button class="my-2" @click="hide()"> HIDE THE 1ST TITLE </button>
  </div>
</template>

<script setup lang='js'>
  import { ref } from 'vue'

  let classToggle1 = ref(false);
  let classToggle2 = ref(false);
  let classToggle3 = ref(false);
    
  let firstTitle = ref('');
  let secondTitle = ref('');

  function detect(){
    if(firstTitle.value === "Hello"){
      classToggle1.value = true;
    } else {
      classToggle1.value = false;
    }

    if(firstTitle.value === "World"){
      classToggle2.value = true;
    } else {
      classToggle2.value = false;
    }
  }

  function hide(){
    classToggle3.value = !classToggle3.value
  }


</script>

<style scoped lang="css">

.hide{
  display: none;
}

.maClassWorld {
  background-color: bisque;
  color: aqua;
}

.maClassHello {
  background-color: beige;
  color: brown;
}

</style>