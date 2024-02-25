<template>
  <div class="core-builds">
      <CoreBuild v-for="core in cores" :key="core.id" :core="core" />
  </div>
</template>

<script>
import CoreBuild from "./CoreBuild.vue"

export default {
  props: {
    cores: {
      type: Array
    }
  },
  
  components: {
    CoreBuild
  }
}
</script>

<style scoped>
</style>
