<template>
  <div>
    <h1>Vuex Counter</h1>
    <span>Count: {{ count }} </span>
    <span>DoubleCount: {{ doubleCount }} </span>
    <span>doubleCountFromState: {{ doubleCountFromState }} </span>
    <button @click="increment">Increment</button>
  </div>
</template>
<script setup lang="ts">
import { useStore } from 'vuex'
import { computed } from 'vue'
const store = useStore()
const count = computed(() => store.state.count)
const doubleCountFromState = computed(() => store.state.doubleCount)
const doubleCount = computed(() => store.getters.doubleCount)
const increment = () => store.commit('increment')
</script>
<style scoped>
div {
  display: flex;
  flex-direction: column;
}
</style>