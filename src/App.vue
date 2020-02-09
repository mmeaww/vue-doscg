<template>
  <div id="app">
    <header>
      <div class="d-flex flex-column flex-md-row
                  align-items-center p-3 px-md-4 mb-3
                  bg-white border-bottom shadow-sm">
        <router-link class="my-0 mr-md-auto font-weight-normal" :to="{name: 'Home'}">
          <h5 class="text-dark">Assigment DOSCG</h5>
        </router-link>
        <nav class="my-2 my-md-0 mr-md-3">
          <router-link class="p-2 text-dark" :to="{name: 'Bestway'}">
            Finding Best Way
          </router-link>
          <router-link class="p-2 text-dark" :to="{name: 'Resume'}">
            Resume
          </router-link>
        </nav>
      </div>
    </header>
    <main>
      <div class="container bg-light py-5 mt-4">
        <router-view/>
      </div>
    </main>
    <footer class="pt-4 my-md-4 pt-md-3 border-top">
      <div class="row">
        <div class="col-12 col-md text-center mt-3">
          <img class="mb-2" src="./assets/logo.png" alt="" width="24" height="24">
          © 2019 Copyright:
          <router-link class="p-2 text-dark" :to="{name: 'Resume'}">
            Thanyalak  Napanang
          </router-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  a.router-link-exact-active {
    color: #42b983;
    text-decoration: underline;
  }
</style>
