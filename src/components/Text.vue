<template>
    <button @click="request">按钮</button>
    {{ res }}
</template>
  
  <script lang="ts" setup>
import { ref } from "vue"
import axios from "axios"

const res = ref<any>(null)
const request = async () => {
    res.value = (await axios.delete("/api/lottery/a")).data
}
</script>
  
  <style scoped>
</style>
  