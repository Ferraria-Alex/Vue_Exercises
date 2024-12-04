<template>
  <div>
    <h2 class="text-center my-2">TP - DataBinding - Profile User</h2>
    <div class="card text-center container my-2" style="width: 18rem;">
      <img class="card-img-top object-fit-cover" width="100px" height="200px" src="../../assets/drpepper.png" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{ name }}</h5>
        <input type="text" name="name1" :value="name">
        <p class="card-text">Age: {{ age }}</p>
        <br>
        <p class="card-text">Age + 10: {{ agePlus10(age) }}</p>
        <br>
        <p class="card-text">Nombre Fétiche: {{ nombreFetiche() }}</p>
      </div>
    </div>
</div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount, ref } from 'vue'

let name = ref("Dr. Pepper");
let age = ref(25);

function agePlus10(age){
  return age + 10;
}

function nombreFetiche(){
  return Math.floor(Math.random()*10000000) + 100000000
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