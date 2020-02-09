<template>
  <div>
    <div>
      <h3 class="sg-h3">Best way go to Centarl World from SCG Bangsue</h3>
      <br/>
    </div>
    <br>
    <iframe width="100%" height= "500px" v-bind:src="src()"></iframe>
    <br>
  </div>
</template>

<script>
const config = require('../../config/config')
console.log('-> config', config)
export default {
  name: 'GoogleMap',
  data () {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 13.804305, lng: 100.538222 },
      markers: [
        {
          position: {
            lat: 13.804305,
            lng: 100.538222
          }
        }
      ],
      places: [],
      routes: [],
      currentPlace: null
    }
  },
  mounted () {
    this.geolocate()
  },
  methods: {
    src () {
      // const result = `http://localhost:3000/api/doscg/finding-best-way`
      return `https://google.com/maps/embed/v1/directions?key=${config.googleApiKey}&origin=${config.latitude},${config.longitude}&destination=CentralWord,Bangkok`
    },
    // receives a place object via the autocomplete component
    setPlace (place) {
      this.currentPlace = place
    },
    addMarker () {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        }
        this.markers.push({ position: marker })
        this.places.push(this.currentPlace)
        this.center = marker
        this.currentPlace = null
      }
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })
    },
    findBestway () {
      this.$store.dispatch('getDirection')
        .then(() => {
          this.src()
          console.log('loaded')
        })
    }
  }
}
</script>
