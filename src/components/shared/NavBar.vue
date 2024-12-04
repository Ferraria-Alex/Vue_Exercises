<template>
    <nav class="navbar navbar-dark bg-dark" aria-label="First navbar example">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/home">Logo</router-link>
            <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="navbar-collapse collapse" id="navbarsExample01" style="">
                <ul class="navbar-nav me-auto mb-2">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/home">Home</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Lessons</a>
                        <ul class="dropdown-menu">
                            <li><router-link class="dropdown-item" to="/lesson-interpolation">Interpolation</router-link></li>
                            <li><router-link class="dropdown-item" to="/lesson-v-html">Directive V-Html</router-link></li>
                            <li><router-link class="dropdown-item" to="/lesson-v-bind">Directive V-Bind</router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Exercises</a>
                        <ul class="dropdown-menu">
                            <li><router-link class="dropdown-item" to="/exo-interpolation">Exo01 - Interpolation</router-link></li>
                            <li><router-link class="dropdown-item" to="/exo-interpolation-functions">Exo02 - Interpolation et Functions</router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">TP</a>
                        <ul class="dropdown-menu">
                          <li><router-link class="dropdown-item" to="/tp-data-binding">TP01 - Data Binding</router-link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup lang='js'>

import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'

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