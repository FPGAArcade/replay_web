<template>
  <div>
    <Platforms :platforms="platforms" />
  </div>
</template>

<script>
import Platforms from "./Platforms.vue"

export default {
  data() {
    return {
      platforms: [],
    }
  },

  beforeMount() {
    this.getPlatforms();
  },

  computed: {},

  methods: {
    async getPlatforms() {
      // TODO: [Gary] move to const/config
      let res = await fetch(`https://api.fpgaarcade.com/platforms/`)
      this.platforms = await res.json()
    },
  },

  components: {
    Platforms 
  }
}
</script>
