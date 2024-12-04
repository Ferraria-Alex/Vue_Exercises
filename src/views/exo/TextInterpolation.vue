<template>
  <div>
    <h2>Text Interpolation</h2>
    <div class="text-center">
      <p>{{ bool }}</p>
      <p>{{ string }}</p>
      <p>{{ tab }}</p>
      <p>{{ num }}</p>
      <p>{{ obj }}</p>
    </div>
  </div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount, ref } from 'vue'

const bool = ref(false);
const string = ref('Memories de quelqun');
const tab = ref(["Un", "Truc", 2, "Thé"]);
const num = ref(15425496);
const obj = ref({name: 'truc', age: 456, true: false});

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