<template>
  <div class="trajet-page">
    <div class="card">
      <h2 class="card-header">Trajet Informations</h2>

      <form @submit.prevent="submitForm" class="card-body">
        <div class="form-row together">
          <label for="dateDebut">Trajet du:</label>
          <select v-model="trajet.dateDebut" id="dateDebut" required>
            <option v-for="date in dates" :key="date" :value="date">{{ date }}</option>
          </select>
          <label for="dateFin">au:</label>
          <select v-model="trajet.dateFin" id="dateFin" required>
            <option v-for="date in dates" :key="date" :value="date">{{ date }}</option>
          </select>
        </div>

        <div class="form-row">
          <label for="typeTrajet">Type Trajet:</label>
          <input type="text" id="typeTrajet" v-model="trajet.typeTrajet" required>
          <small class="input-hint">F= Fixe, V= Variable, S= Spécial</small>
        </div>

        <div class="form-row">
          <label for="codeTrajet">Code Trajet:</label>
          <input type="text" id="codeTrajet" v-model="trajet.codeTrajet" required>

        </div>

        <div style="display: flex; gap: 16px; margin: 8px 0;">
          <label for="voiture">Voiture:</label>
          <select style="flex: 1; height: 2rem;" id="code" v-model="trajet.voiture" required>
            <option v-for="voiture in getVoitures()" :key="voiture.immatriculation" :value="voiture.immatriculation">
              {{ voiture.immatriculation }}
            </option>
          </select>
        </div>

        <div class="form-row">
          <label for="libelle">Libellé:</label>
          <input type="text" id="libelle" v-model="trajet.libelle" required>
        </div>

        <div class="together">
          <div class="form-row">
            <label for="lieuDepart">Lieu de départ:</label>
            <input type="text" id="lieuDepart" v-model="trajet.lieuDepart" required>

          </div>

          <div class="form-row">
            <label for="lieuArrivee">Lieu d'arrivé:</label>
            <input type="text" id="lieuArrivee" v-model="trajet.lieuArrivee" required>
          </div>
        </div>


        <div class="form-row">
          <label for="heureDepart">Heure de départ:</label>
          <input type="time" id="heureDepart" v-model="trajet.heureDepart" required>

        </div>

        <div class="form-row">
          <label for="heureArrivee">Heure d'arrivé:</label>
          <input type="time" id="heureArrivee" v-model="trajet.heureArrivee" required>
        </div>

        <div class="form-row">
          <label for="distance">Distance:</label>
          <input type="text" id="distance" v-model="trajet.distance" required>
        </div>

        <div class="form-row">
          <label for="employes">Employés:</label>

          <select id="employes" v-model="trajet.employes" multiple>
            <option v-for="employe in employes" :key="employe.id" :value="employe.pseudo">
              {{ employe.pseudo }}
            </option>
          </select>
        </div>

        <div class="form-actions">
          <button type="submit" class="btn">Enregistrer</button>
          <button type="button" class="btn secondary" @click="$router.push('/trajet')">Afficher liste</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'TrajetView',
  setup() {
    const route = useRoute();
    const trajet = ref(route.params.id === 'new'
      ? {
        dateDebut: '',
        dateFin: '',
        typeTrajet: '',
        codeTrajet: '',
        voiture: '',
        libelle: '',
        lieuDepart: '',
        lieuArrivee: '',
        heureDepart: '',
        heureArrivee: '',
        distance: '',
        employes: []
      }
      : getTrajet(route.params.id ?? -1));

    const calendarDays = [
      'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'
    ];

    const dates = computed(() => {
      const today = new Date();
      const days = [];
      for (let i = 0; i < 7; i++) {
        const date = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
        const dayName = calendarDays[date.getDay()];
        days.push(dayName);
      }
      return days;
    });

    const selectedDateDebut = ref('');
    const selectedDateFin = ref('');

    const employes = ref(getEmployees());

    const submitForm = () => {
      if (route.params.id === 'new') {
        createTrajet(trajet);
      } else {
        updateTrajet(trajet);
      }

      window.location.reload();
    };

    const getVoitures = () => {
      const storedItems = localStorage.getItem("voitures");
      const departments = JSON.parse(storedItems) ?? [];

      return departments;
    };


    return {
      dates,
      selectedDateDebut,
      selectedDateFin,
      trajet,
      employes,
      submitForm,
      getVoitures,
    };
  }
};
function createTrajet(trajet) {
  const storedItems = localStorage.getItem("trajets");
  const trajets = JSON.parse(storedItems) ?? [];
  const maxId = trajets.length === 0 ? 1 : trajets?.reduce((max, obj) => {
    return obj.id > max ? obj.id : max;
  }, -Infinity);

  trajets.push({ ...trajet.value, id: maxId + 1 });
  localStorage.setItem("trajets", JSON.stringify(trajets));
}

function updateTrajet(trajet) {
  const storedItems = localStorage.getItem("trajets");
  const trajets = JSON.parse(storedItems) ?? [];
  let index = trajets.findIndex(obj => obj.id === trajet.value.id);

  if (index !== -1) {
    trajets[index] = trajet.value;
  }

  localStorage.setItem("trajets", JSON.stringify(trajets));
}

function getTrajet(id) {
  const storedItems = localStorage.getItem("trajets");
  const trajets = JSON.parse(storedItems) ?? [];
  const filteredTrajet = trajets.find((trajet) => trajet.id === parseInt(id));

  return filteredTrajet ? filteredTrajet : {
    dateDebut: '',
    dateFin: '',
    typeTrajet: '',
    codeTrajet: '',
    voiture: '',
    libelle: '',
    lieuDepart: '',
    lieuArrivee: '',
    heureDepart: '',
    heureArrivee: '',
    distance: '',
    employes: []
  };
}

function getEmployees() {
  const storedItems = localStorage.getItem("employes");
  const employees = JSON.parse(storedItems) ?? [];

  return employees;
}
</script>

<style scoped>
/* .together {
  display: flex;
} */

.trajet-page {
  display: flex;
  justify-content: center;
  padding: 2rem;
}

.card {
  width: 100%;
  max-width: 600px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card-header {
  text-align: center;
}

.card-body {
  padding: 1rem;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 1rem;
}

.form-row label {
  margin-right: 1rem;
  flex-basis: 120px;
  /* Adjust as needed */
}

.form-row input[type="text"],
.form-row input[type="time"] {
  flex: 1;
  min-width: 120px;
  /* Adjust as needed */
  padding: 0.5rem;
  margin-bottom: 0.5rem;
}

.input-hint {
  display: block;
  font-size: 0.75rem;
  color: #666;
  margin-top: 0.25rem;
}

.form-actions {
  display: flex;
  justify-content: flex-start;
  margin: 25px;
}

.btn {
  padding: 0.5rem 1rem;
  margin-right: 15px;
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

.btn.secondary {
  background-color: #7f8c8d;
}

.btn.secondary:hover {
  background-color: #707b7c;
}

label {
  margin-left: 10px;
}
</style>