<template>
  <div>
    <Platforms :platforms="platforms" />
  </div>
</template>

<script>
import * as Consts from "src/constants"
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
      let res = await fetch(`${Consts.BASE_URL_REPLAY_API}/platforms/`)
      this.platforms = await res.json()
    },
  },

  components: {
    Platforms 
  }
}
</script>
