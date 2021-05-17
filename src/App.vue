<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background: #1A1714;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  border: 0;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
@media (min-width: 1400px){
  .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {
      max-width: 1140px !important;
  }
}
</style>
