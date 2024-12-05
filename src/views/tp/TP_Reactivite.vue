<template>
  <div>
    <div class="container d-flex justify-content-center align-items-center text-center my-5">
      <button class="btn-less bg-danger" @click="more(1)">+1</button>
      <button class="btn-plus bg-success" @click="more(5)">+5</button>
      <div class="mx-3">{{ num }}</div>
      <div class="mx-1">{{ message }}</div>
    </div>
  </div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount, ref } from 'vue'

let num = ref(0);
let message = ref('')
let random = Math.floor(Math.random()*50+20);

function more(numb){
  return num.value += numb;
}

function reset(){
  random = Math.floor(Math.random()*50+20);
  return num.value = 0;
}

watch(num, (value)=>{
  if (value === random) {
    message = 'YOU WON !!!'
    setTimeout(() => {
      reset(); 
    }, 5000)
  } else if (value > random) {
    message = 'YOU LOST !!!'
    setTimeout(() => {
      reset();
    }, 5000)
  } else if (value < random - 10 || value === 0) {
    message = 'COLD'
  } else {
    message = 'GETTING WARMER'
  }
})

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