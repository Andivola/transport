<template>
    <div class="planning-page">
      <div class="card">
        <h2 class="card-header">Planning Fixe</h2>
  
        <div class="form-row">
          <label for="selectedWeek">Num Semaine:</label>
          <select v-model="selectedWeek" id="selectedWeek">
            <option v-for="week in weeks" :key="week" :value="week">{{ week }}</option>
          </select>
          <button @click="showWeek" class="btn">Show Week</button>
        </div>
  
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Code Trajet</th>
                <th>Voiture</th>
                <th>Libellé</th>
                <th>Lieu de départ</th>
                <th>Lieu d'arrivé</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="trajet in filteredTrajets" :key="trajet.id">
                <td>{{ trajet.date }}</td>
                <td>{{ trajet.codeTrajet }}</td>
                <td>{{ trajet.voiture }}</td>
                <td>{{ trajet.libelle }}</td>
                <td>{{ trajet.lieuDepart }}</td>
                <td>{{ trajet.lieuArrivee }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  
  export default {
    name: 'PlanningFixe',
    setup() {
      const weeks = [1, 2, 3, 4, 5]; // Example weeks
      const selectedWeek = ref('');
      const trajets = ref(getTrajets()); // Fetch trajets from local storage or API
  
      const showWeek = () => {
        // Logic to filter trajets based on selectedWeek
        console.log('Show week:', selectedWeek.value);
      };
  
      // Computed property to filter trajets based on selectedWeek
      const filteredTrajets = computed(() => {
        if (!selectedWeek.value) return [];
        return trajets.value.filter(trajet => trajet.week === selectedWeek.value);
      });
  
      return {
        weeks,
        selectedWeek,
        filteredTrajets,
        showWeek
      };
    }
  };
  
  function getTrajets() {
    // Example function to fetch trajets from local storage or API
    return [
      { id: 1, date: '2024-04-01', codeTrajet: 'TR001', voiture: 'Car1', libelle: 'Trajet 1', lieuDepart: 'Paris', lieuArrivee: 'Lyon', week: 1 },
      { id: 2, date: '2024-04-03', codeTrajet: 'TR002', voiture: 'Car2', libelle: 'Trajet 2', lieuDepart: 'Lyon', lieuArrivee: 'Marseille', week: 1 },
      { id: 3, date: '2024-04-10', codeTrajet: 'TR003', voiture: 'Car3', libelle: 'Trajet 3', lieuDepart: 'Marseille', lieuArrivee: 'Nice', week: 2 },
      { id: 4, date: '2024-04-15', codeTrajet: 'TR004', voiture: 'Car4', libelle: 'Trajet 4', lieuDepart: 'Nice', lieuArrivee: 'Toulouse', week: 2 },
      // Add more trajets as needed
    ];
  }
  </script>
  
  <style scoped>
  .planning-page {
    display: flex;
    justify-content: center;
    padding: 2rem;
  }
  
  .card {
    width: 100%;
    max-width: 800px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  
  .card-header {
    text-align: center;
  }
  
  .form-row {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .form-row label {
    margin-right: 1rem;
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
    background-color: #f2f2f2;
  }
  
  .btn {
    padding: 0.5rem 1rem;
    margin-left: 1rem;
    color: white;
    background-color: #9b59b6;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .btn:hover {
    background-color: #8e44ad;
  }
  </style>
  