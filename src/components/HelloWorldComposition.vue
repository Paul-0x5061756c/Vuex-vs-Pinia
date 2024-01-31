<template>
  <div>
    <h1>Composition</h1>
    <input type="text" v-model="greeting" />
    <p>Uppercase: {{ uppercaseGreeting }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'

// similair to created() in Options API
console.log('Composition API: Component is created')

const greeting = ref('Hello, World!' as string)

const uppercaseGreeting = computed(() => {
  return greeting.value.toUpperCase()
})

watch(greeting, (newValue, oldValue) => {
  console.log(`Watch: Greeting changed from ${oldValue} to ${newValue}`)
})

onMounted(() => {
  console.log('Composition API: Component is mounted')
})
</script>
