<template>
  <div>
    <h1>Options</h1>
    <input type="text" v-model="greeting" />
    <p>Uppercase: {{ uppercaseGreeting }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      greeting: 'Hello, World!' as string
    }
  },
  computed: {
    uppercaseGreeting(): string {
      return (this.greeting as string).toUpperCase()
    }
  },
  watch: {
    greeting(newValue: string, oldValue: string) {
      console.log(`Watch: Greeting changed from ${oldValue} to ${newValue}`)
    }
  },
  mounted() {
    console.log('Options API: Component is mounted')
  },
  created() {
    console.log('Options API: Component is created')
  }
})
</script>
