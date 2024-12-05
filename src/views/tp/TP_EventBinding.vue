<template>
  <div class="container my-3 text-center">
    <input id="in1" type="text" @keyup="type()">
    <p id="p1"></p>
    <input id="in2" type="text" @keyup="iftype($event.key)">
    <p id="p2"></p>
    <input type="button" value="Alert" @click="alerted()">
  </div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount} from 'vue'

function type(){
  let p1 = document.getElementById("p1");
  p1.innerText = document.getElementById("in1").value;
}

function iftype(key){
  if(key === "Escape"){
    let p2 = document.getElementById("p2");
    p2.innerText = document.getElementById("in2").value;
  }
}

function alerted(){
  alert("Alerted!");
}

const props = defineProps({
  // v-model
  modelValue: {
    default: '',
  },
});

const emit = defineEmits({
  // v-model event with validation
  'update:modelValue': (value) => value !== null,
});

const value = computed({
  get () {
    return props.modelValue;
  },
  set (value) {
    emit('update:modelValue', value);
  },
});

const stopWatch = watch(
  () => props.modelValue, async (_newValue, _oldValue) => {
    // do something
  },
  {
    immediate: true
  }
);

onMounted(() => {
});

onUpdated(() => {
});

onBeforeUnmount(() => {
  stopWatch();
});

</script>

<style scoped lang="css">
</style>