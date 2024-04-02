<template>
    <div class="table-card">
      <h2>Liste des Trajets</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Type Trajet</th>
              <th>Code Trajet</th>
              <th>Libellé</th>
              <th>Lieu de départ</th>
              <th>Lieu d'arrivé</th>
              <th>Heure de départ</th>
              <th>Heure d'arrivé</th>
              <th>Distance</th>
              <th>Employés</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="trajet in trajets" :key="trajet.id">
              <td>{{ trajet.typeTrajet }}</td>
              <td>{{ trajet.codeTrajet }}</td>
              <td>{{ trajet.libelle }}</td>
              <td>{{ trajet.lieuDepart }}</td>
              <td>{{ trajet.lieuArrivee }}</td>
              <td>{{ trajet.heureDepart }}</td>
              <td>{{ trajet.heureArrivee }}</td>
              <td>{{ trajet.distance }}</td>
              <td>
              <!-- Assuming trajet.employes is an array of employee names -->
                <span v-if="trajet.employes.length">{{ trajet.employes.join(', ') }}</span>
                <span v-else>No Employees</span>
              </td>
              <td>
                <button class="btn edit">✏️</button>
                <button class="btn delete">🗑️</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <router-link to="/trajform" class="btn add">Ajouter +</router-link>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'TableTrajet',
    setup() {
      const trajets = ref([
      // Sample data, update with actual data fetching
      { 
        id: 1, 
        typeTrajet: 'F', 
        codeTrajet: 'T001', 
        libelle: 'Trajet Fixe 1', 
        lieuDepart: 'Point A', 
        lieuArrivee: 'Point B', 
        heureDepart: '08:00', 
        heureArrivee: '10:00', 
        distance: '120km', 
        employes: ['John Doe', 'Jane Smith'] // Array of employee names
      },
      // ... other trajets
    ]);
  
      // Placeholder methods for edit and delete actions
      const editTrajet = (trajet) => {
        console.log('Edit:', trajet);
        // Implement edit logic
      };
  
      const deleteTrajet = (id) => {
        console.log('Delete ID:', id);
        // Implement delete logic
      };
  
      return {
        trajets,
        editTrajet,
        deleteTrajet
      };
    }
  };
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
  
  th, td {
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
  
  h2{
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