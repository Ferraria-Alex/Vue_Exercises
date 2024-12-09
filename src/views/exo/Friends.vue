<template>
  <one-friend v-for="person in testContactList" :name="person[0]" :email="person[2]" :phone="person[1]"></one-friend>
  <one-friend-bug v-for="person in testContactList" :name="person[0]" :email="person[2]" :phone="person[1]"></one-friend-bug>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount, ref, defineAsyncComponent } from 'vue'

let testContactList = ref({
  'test1':['Test1','00000000','test1@testsinc.com'],
  'test2':['Test2','11100011','test2@testsinc.com'],
  'test3':['Test3','11110000','test3@testsinc.com'],
  'test4':['Test4','21200022','test4@testsinc.com'],
  'test5':['Test5','00124240','test5@testsinc.com']
})

const OneFriend = defineAsyncComponent(()=>import("../../components/shared/OneFriend.vue"));

const OneFriendBug = defineAsyncComponent(()=>import("../../components/shared/OneFriendBug.vue"));

</script>

<style scoped lang="css">
</style>