<template>
  <div id="app">
    <div class="header">
      <router-link to="/popular-repos">Hot repos</router-link>
      <router-link to="/new">Most commented issues</router-link>
      <router-link to="/show">What is Dan Abramov working on?</router-link>
      <router-link to="/ask">Custom search</router-link>
      <router-link to="/job">Vue jobs</router-link>
    </div>
    <router-view class="view"></router-view>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
