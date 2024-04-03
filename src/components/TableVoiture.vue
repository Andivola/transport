<template>
  <div class="table-card">
    <h2>Liste des Voitures</h2>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Code Transporteur</th>
            <th>Immatriculation</th>
            <th>Conducteur</th>
            <th>Contact</th>
            <th>Aide</th>
            <th>Contact Aide</th>
            <th>Marque</th>
            <th>Capacité</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="voiture in voitures" :key="voiture.id">
            <td>{{ voiture.code }}</td>
            <td>{{ voiture.immatriculation }}</td>
            <td>{{ voiture.conducteur }}</td>
            <td>{{ voiture.contactConducteur }}</td>
            <td>{{ voiture.aide }}</td>
            <td>{{ voiture.contactAide }}</td>
            <td>{{ voiture.marque }}</td>
            <td>{{ voiture.capacite }}</td>
            <td>
              <button class="btn update" @click="$router.push('/voiture/'+voiture.id)">✏️</button>
              <button class="btn delete" @click="deleteVoiture(voiture.id)">🗑️</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <router-link to="/voitureform/new" class="btn add">Ajouter +</router-link>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'TableVoiture',
  setup() {
    // Sample data, you would fetch this from a server or store
    const voitures = ref(getVoiture());

    // Function to edit transporteur (placeholder for actual implementation)
    const updateVoiture = () => {
      
    };

    // Function to delete transporteur (placeholder for actual implementation)
    const deleteVoiture = (id) => {
      localStorage.setItem("voitures", JSON.stringify(voitures.value.filter((voiture) => voiture.id !== id)));
      window.location.reload();
    };

    return {
      voitures,
      updateVoiture,
      deleteVoiture
      // ... other methods
    };
  }
};
function getVoiture() {
 // Load items from localStorage
 const storedVoitures = localStorage.getItem("voitures");
  if (storedVoitures) {
    console.log(storedVoitures);
    return JSON.parse(storedVoitures);
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