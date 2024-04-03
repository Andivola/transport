<template>
  <div class="etat-view">
    <div class="card">
      <div class="card-header">
        <h2 style="text-align: center;">Fiche de transport</h2>
        <div class="week-details">
          <label for="numSemaine">Num Semaine:</label>
          <span>{{ numSemaine }}</span>
          <span v-if="startDate && endDate" style="text-align: center;"> du {{ startDate }} au {{ endDate }}</span>
        </div>
        <div class="autofill-info">
          <div>
            <label for="immatriculation">Immatriculation:</label>
            <span>{{ immatriculation }}</span>
          </div>
          <div>
            <label for="marque">Marque:</label>
            <span>{{ marque }}</span>
          </div>
          <div>
            <label for="capacite">Capacité:</label>
            <span>{{ capacite }}</span>
          </div>
          <div>
            <label for="transporteur">Transporteur:</label>
            <span>{{ transporteur }}</span>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="etat-table">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Code</th>
                <th>Libellé</th>
                <th>Lieu départ</th>
                <th>Lieu arrivé</th>
                <th>Heure départ</th>
                <th>Heure arrivé</th>
                <th>Km dep</th>
                <th>Km ar</th>
                <th>Nb Passager</th>
                <th>Situation</th>
              </tr>
            </thead>
            <tbody>
              <!-- Loop through data and populate table rows -->
              <tr v-for="etat in etats" :key="etat.id">
                <td>{{ etat.date }}</td>
                <td>{{ etat.code }}</td>
                <td>{{ etat.libelle }}</td>
                <td>{{ etat.lieuDepart }}</td>
                <td>{{ etat.lieuArrivee }}</td>
                <td>{{ etat.heureDepart }}</td>
                <td>{{ etat.heureArrivee }}</td>
                <td>{{ etat.kmDep }}</td>
                <td>{{ etat.kmAr }}</td>
                <td>{{ etat.nbPassager }}</td>
                <td>{{ etat.situation }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'EtatView',
  setup() {
    // Sample data for table rows, replace with actual data fetching
    const etats = ref([
      { id: 1, date: '2024-06-01', code: 'C001', libelle: 'Trajet 1', lieuDepart: 'Point A', lieuArrivee: 'Point B' },
      // Add more etats as needed
      { id: 1, date: '2024-06-02', code: 'C001', libelle: 'Trajet 1', lieuDepart: 'Point A', lieuArrivee: 'Point B' },
      { id: 1, date: '2024-06-03', code: 'C001', libelle: 'Trajet 1', lieuDepart: 'Point A', lieuArrivee: 'Point B' },
      // Add more etats as needed
    ]);

    // Sample data for autofill
    const numSemaine = ref('22');
    const startDate = ref('2024-06-01');
    const endDate = ref('2024-06-07');
    const immatriculation = ref('ABC123');
    const marque = ref('Example Marque');
    const capacite = ref('5');
    const transporteur = ref('John Doe');

    return {
      etats,
      numSemaine,
      startDate,
      endDate,
      immatriculation,
      marque,
      capacite,
      transporteur
    };
  }
};
</script>

<style scoped>
/* Add your component styles here */
.etat-view {
  display: flex;
  justify-content: center;
  padding: 2rem;
}

.card {
  width: 100%;
  max-width: 800px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card-header {
  background-color: #f0f0f0;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
}

.card-body {
  padding: 1rem;
}

.week-details {
  margin-bottom: 1rem;
}

.autofill-info {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.autofill-info div {
  flex: 1 1 50%;
}

.autofill-info label {
  font-weight: bold;
}

.etat-table table {
  width: 100%;
  border-collapse: collapse;
}

.etat-table th,
.etat-table td {
  padding: 0.5rem;
  border: 1px solid #ccc;
}

.etat-table th {
  background-color: #f0f0f0;
  font-weight: bold;
}

.etat-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.etat-table tbody tr:hover {
  background-color: #e6e6e6;
}
</style>