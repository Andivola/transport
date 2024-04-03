<template>
  <div class="table-card">
    <h2>Liste des Voitures</h2>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
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
            <td>{{ voiture.immatriculation }}</td>
            <td>{{ voiture.conducteur }}</td>
            <td>{{ voiture.contactConducteur }}</td>
            <td>{{ voiture.aide }}</td>
            <td>{{ voiture.contactAide }}</td>
            <td>{{ voiture.marque }}</td>
            <td>{{ voiture.capacite }}</td>
            <td>
              <button class="btn update">✏️</button>
              <button class="btn delete">🗑️</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <router-link to="/voitureform" class="btn add">Ajouter +</router-link>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'TableVoiture',
  setup() {
    // Sample data, you would fetch this from a server or store
    const voitures = ref(fetchVoiture());

    // Function to edit transporteur (placeholder for actual implementation)
    const updateVoiture = (voiture) => {
      return {
        voiture
      }
    };

    // Function to delete transporteur (placeholder for actual implementation)
    const deleteVoiture = (id) => {
      console.log('Deleting ID:', id);
      // Implement delete logic
    };

    return {
      voitures,
      updateVoiture,
      deleteVoiture
      // ... other methods
    };
  }
};
function fetchVoiture() {
  return [
    // ... sample vehicle data
    {
      id: 1,
      immatriculation: 'XX-123-YY',
      conducteur: 'John Doe',
      contactConducteur: '123456789',
      aide: 'Jane Doe',
      contactAide: '987654321',
      marque: 'Mazda',
      capacite: '20'
    },
    {
      id: 2,
      immatriculation: 'XX-553-YY',
      conducteur: 'Rakoto',
      contactConducteur: '1245656789',
      aide: 'Ranto',
      contactAide: '987896321',
      marque: 'Mercedes',
      capacite: '22'
    },
    // ... more vehicles
  ];
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