<template>
  <div>
    <CoreCard :core="core" @select-core="$event => $emit('select-core', $event)" />
    <CoreBuilds :cores="cores" />
  </div>
</template>

<script>
import CoreBuilds from "./CoreBuilds.vue"
import CoreCard from "./CoreCard.vue"

export default {
  emits: ['select-core'],
  props: {
    selectedCore: {
      type: String
    },
    selectedPlatform: {
      type: String
    }
  },

  data() {
    return {
      core: {},
      cores: []
    }
  },

  beforeMount() {
    this.getCore()
  },

  methods: {
    async getCore() {
      let platform = this.selectedPlatform
      let core = this.selectedCore
      // TODO: [Gary] move to const/config
      let res = await fetch(`https://api.fpgaarcade.com/builds?platforms=${platform}&buildType=core&cores=${core}&desc=true`)
      let json = await res.json()
      this.core = json[0]
      this.cores = json
    }
  },

  components: {
    CoreBuilds,
    CoreCard
  }

}
</script>

<style scoped>
</style>
