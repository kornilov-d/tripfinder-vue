<template>
  <div class = "container">
    <GlMap
    :mapboxGl="mapbox-gl"
    :accessToken="accessToken"
    :mapStyle.sync="mapStyle"
    @load="onMapLoaded" />
  </div>
</template>

<script>

  export default {
    name: 'RouteMap',
    data() {
      return {
        accessToken: 'pk.eyJ1Ijoia29ybmlsb3ZkIiwiYSI6ImNrOTJuZG9hcjAxbTczbG8yNDhlZGZpOWEifQ.EMvlWY1YaawgAIHcY9n5Cw',
        mapStyle: 'mapbox://styles/kornilovd/ckb3rp2vo0uli1ipf98kzhkaf',
      };

    },
    created() {
    this.map = null;
  },
  methods: {
    onMapLoaded(event) {
      // in component
      this.map = event.map;
      // or just to store if you want have access from other components
      this.$store.map = event.map;
    }
  }
  }
</script>

<style scoped>

</style>
