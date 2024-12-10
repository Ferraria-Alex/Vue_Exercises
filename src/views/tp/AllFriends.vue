<template>
  <div>
    <one-friend v-for="person in lesAmis" :keyId="person.id" :name="person.name" :email="person.email" :phone="person.phone" :premium="person.premium"></one-friend>
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

const OneFriend = defineAsyncComponent(()=>import("../../components/shared/LastOneFriend.vue"));

</script>

<style scoped lang="css">
</style>