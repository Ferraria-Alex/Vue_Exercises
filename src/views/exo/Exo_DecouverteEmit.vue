<template>
  <div>
    <emit v-for="person in lesAmis" :key="person.id" :id="person.id" :name="person.name" :email="person.email" :phone="person.phone" :premium="person.premium" @mon-event-premium="truc"></emit>
  </div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount, ref, defineAsyncComponent } from 'vue'

const lesAmis = ref([
    {
        id: 'lasticot',
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: true
    },
    {
        id: 'kimonoSurUnFrigo',
        name: "Steven Seagal",
        phone: '+338765477',
        email: 'steven@seagal.com',
        premium: true
    }
]);

function truc(id){
  const found = lesAmis.value.find((element) => element.id == id)
  console.log(found);
}


const emit = defineAsyncComponent(()=>import("../../components/shared/decouverteEmit.vue"));

</script>

<style scoped lang="css">
</style>