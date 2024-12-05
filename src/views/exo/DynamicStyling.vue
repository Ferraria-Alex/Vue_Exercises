<template>
  <div class="container d-flex justify-content-center align-items-center">
    <div class="card" :style="{backgroundColor: selectCard1 ? 'red' : 'aqua'}" @click="selectionCard(1)">
      <h2 class="card-title">Card</h2>
    </div>
    <div class="card" :style="{backgroundColor: selectCard2 ? 'green' : 'violet'}" @click="selectionCard(2)">
      <h2 class="card-title">Card</h2>
    </div>
  </div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount, ref} from 'vue'

const selectCard1 = ref(false);
const selectCard2 = ref(false);

function selectionCard(uneCard) {
  if (uneCard === 1) {
    selectCard1.value = !selectCard1.value;
  }
  if (uneCard === 2) {
    selectCard2.value = !selectCard2.value;
  }
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