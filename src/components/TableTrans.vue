<template>
  <div class="table-card">
    <h2>Liste des Transporteurs</h2>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Raison Sociale</th>
            <th>Contact</th>
            <th>Adresse</th>
            <th>NIF</th>
            <th>STAT</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transporteur in transporteurs" :key="transporteur.id">
            <td>{{ transporteur.code }}</td>
            <td>{{ transporteur.raisonSociale }}</td>
            <td>{{ transporteur.contact }}</td>
            <td>{{ transporteur.adresse }}</td>
            <td>{{ transporteur.nif }}</td>
            <td>{{ transporteur.stat }}</td>
            <td>
              <button class="btn update" @click="$router.push('/transform/'+transporteur.id)">✏️</button>
              <button class="btn delete" @click="deleteEmploye(employe.id)">🗑️</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <router-link to="/transform/new" class="btn add">Ajouter +</router-link>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'TableTrans',
  setup() {
    // Example data, you'd fetch this from a server or store in a real app
    const transporteurs = ref(getTransporteur());

    // Function to edit transporteur (placeholder for actual implementation)
    const updateTransporteur = () => {
      
    };

    // Function to delete transporteur (placeholder for actual implementation)
    const deleteTransporteur = (id) => {
      localStorage.setItem("transporteurs", JSON.stringify(transporteurs.value.filter((transporteur) => transporteur.id !== id)));
      window.location.reload();
    };

    return {
      transporteurs,
      updateTransporteur,
      deleteTransporteur
    };
  }
};
function getTransporteur() {
  // Load items from localStorage
  const storedTransporteurs = localStorage.getItem("transporteurs");
  if (storedTransporteurs) {
    console.log(storedTransporteurs);
    return JSON.parse(storedTransporteurs);
  }

  return [];
}
</script>

<style scoped>
.table-card {
  background: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 2rem;
  padding: 1rem;
}

/* Add your global table styling here */
.table-container {
  padding: 1em;
}

.table-wrapper {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1em;
}

th,
td {
  text-align: left;
  padding: 0.5em;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #eee;
}

tbody tr:nth-child(odd) {
  background-color: #f9f9f9;
}

.btn {
  padding: 0.5em 1em;
  margin-right: 0.5em;
  cursor: pointer;
  border: none;
  border-radius: 0.25em;

  color: white;
}

h2 {
  text-align: center;
}

.btn.add {
  background-color: #9b59b6;
  color: white;
  text-decoration: none;
  padding: 0.5em 1em;
  margin: 1em 0;
  display: inline-block;
}

.btn:hover {
  background-color: #8e44ad;
}
</style>