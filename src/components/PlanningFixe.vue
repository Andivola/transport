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
  
  const weekDays = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  export default {
    name: 'PlanningFixe',
    setup() {
      const weeks = [1, 2, 3, 4, 5]; // Example weeks
      const selectedWeek = ref(1);
      const planningTrajets = ref(getPlanningTrajets()); // Fetch trajets from local storage or API
  
      const showWeek = () => {
        // Logic to filter trajets based on selectedWeek
        console.log('Show week:', selectedWeek.value);
      };
  
      // Computed property to filter trajets based on selectedWeek
      const filteredTrajets = computed(() => {
        if (!selectedWeek.value) return [];
        return planningTrajets.value;
      });
  
      return {
        weeks,
        selectedWeek,
        filteredTrajets,
        showWeek,
      };
    }
  };
  
  function getPlanningTrajets() {
    const trajets = getTrajets();
    let plannings = [];
    for (const trajet of trajets) {
      const start = weekDays.findIndex(day => trajet.dateDebut === day);
      const end = weekDays.findIndex(day => trajet.dateFin === day);

      for (let index = start; index <= end; index++) {
        plannings.push({
          ...trajet,
          date: weekDays[index],
        });
      }

    }

    return plannings;
  }

  function getTrajets() {
    // Load items from localStorage
    const storedTrajets = localStorage.getItem("trajets");
    if (storedTrajets) {
      return JSON.parse(storedTrajets);
    }

    return [];
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
  