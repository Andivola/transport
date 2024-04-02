<template>
  <div id="app">
    <NavBar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style scoped>
#app {
  display: flex;
  background-color: #f7f7f7f6;
}

.content {
  margin-left: 250px; /* same as sidebar width */
  padding: 20px;
  width: calc(100% - 250px); /* subtract sidebar width */
}
</style>
<style>
 body{
  background-color: #f7f7f7f6;
 }
</style>