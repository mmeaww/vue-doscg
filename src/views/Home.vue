<template>
  <div class="home">
    <div class="text-center">
      <img alt="logo" class="logo" src="../assets/logo.png">
    </div>
    <WelcomePage/>
  </div>
</template>

<script>
// @ is an alias to /src
import WelcomePage from '@/components/WelcomePage.vue'

export default {
  name: 'home',
  components: {
    WelcomePage
  }
}
</script>
<style scoped>
.logo {
    max-height: 150px;
}
</style>
