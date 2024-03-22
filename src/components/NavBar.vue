<template>
  <div class="sidebar">
    <h1 class="sidebar-header">Transport</h1>
    <nav class="nav-menu">
      <router-link class="nav-item" to="/">Employé</router-link>
      <router-link class="nav-item" to="/trajet">Trajet</router-link>
      <router-link class="nav-item" to="/voiture">Voiture</router-link>
      <router-link class="nav-item" to="/voiture">Transporteur</router-link>
      <router-link class="nav-item" to="/voiture">Département</router-link>
      <router-link class="nav-item" to="/voiture">Calendrier</router-link>
      <router-link class="nav-item" to="/voiture">Etat</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #ffffff;
  color: black;
  padding: 20px;
}

.sidebar-header {
  padding: 10px 0;
  text-align: center;
  border-bottom: 1px solid #4e5d6c;
  margin-bottom: 20px;
}

.nav-menu {
  display: flex;
  flex-direction: column;
  padding: 0;
}

.nav-item {
  padding: 10px 15px;
  text-decoration: none;
  color: black;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-item:hover  {
  background-color: #9b59b6;
}
</style>
