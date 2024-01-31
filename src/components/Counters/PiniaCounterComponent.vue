<template>
  <div>
    <h1>Pinia Counter</h1>
    <span>Count: {{ count }} </span>
    <span>DoubleCount: {{ doubleCount }} </span>
    <button @click="increment">Increment</button>
  </div>
</template>
<script setup lang="ts">  
import { usePiniaCounterStore } from '@/stores/piniaCounter'
import { storeToRefs } from 'pinia';

const store = usePiniaCounterStore();

const { count, doubleCount } = storeToRefs(store);
const { increment } = store;

</script>
<style scoped>
div {
  display: flex;
  flex-direction: column;
}
</style>