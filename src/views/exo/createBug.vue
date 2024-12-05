<template>
  <div class="container text-center my-5">
    <button class="btn-less bg-danger" @click="less()">-</button>
    <button class="btn-plus bg-success" @click="more()">+</button>
    <p>{{ test() }}</p>
    <p>{{ num }}</p>
  </div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount, ref } from 'vue'

let num = ref(0);
let textBug = ref("Test");

function test(){
  console.log("Truc declanché");
  return textBug;
}

function more(){
  return num.value += 1;
}

function less(){
  return num.value -= 1;
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