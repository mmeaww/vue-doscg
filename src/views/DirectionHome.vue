
<template>
  <div>
      <!-- <h3 class="sg-h3">Best way go to Centarl World from SCG Bangsue</h3>
      <div class="col-12 col-sm-12 col-md-2 mt-3 text-center">
        <b-button class="center" variant="outline-primary" @click="findBestway">Find ...</b-button>
      </div> -->
      <google-map />
  </div>
</template>

<script>
import GoogleMap from '../components/GoogleMap'
export default {
  name: 'DirectionHome',
  components: {
    GoogleMap
  }
  // methods: {
  //   findBestway () {
  //     this.$store.dispatch('getDirection')
  //       .then(() => {
  //         console.log('loaded')
  //       })
  //   }
  // }
}
</script>

<style scoped>
</style>
