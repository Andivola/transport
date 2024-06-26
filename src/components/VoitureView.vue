<template>
  <div class="voiture-page">
    <div class="card">
      <form @submit.prevent="submitForm" class="card-body">
        <h2 class="card-header">Voiture Informations</h2>

        <div style="display: flex; gap: 16px; margin: 8px 0;">
          <label for="code">Code Transporteur:</label>
          <select style="flex: 1; height: 2rem;" id="code" v-model="voiture.code" required>
            <option v-for="transporteur in getTransporteurs()" :key="transporteur.code" :value="transporteur.code">
              {{ transporteur.code }}
            </option>
          </select>
        </div>

        <div class="form-row">
          <label for="immatriculation">Immatriculation:</label>
          <input type="text" id="immatriculation" v-model="voiture.immatriculation" required>
        </div>

        <div class="form-row">
          <label for="conducteur">Conducteur:</label>
          <input type="text" id="conducteur" v-model="voiture.conducteur" required>
          <label for="contactConducteur">Contact:</label>
          <input type="text" id="contactConducteur" v-model="voiture.contactConducteur" required>
        </div>

        <div class="form-row">
          <label for="aide">Aide:</label>
          <input type="text" id="aide" v-model="voiture.aide" required>
          <label for="contactAide">Contact:</label>
          <input type="text" id="contactAide" v-model="voiture.contactAide" required>
        </div>

        <div class="form-row">
          <label for="marque">Marque:</label>
          <input type="text" id="marque" v-model="voiture.marque" required>
          <label for="capacite">Capacité:</label>
          <input type="text" id="capacite" v-model="voiture.capacite" required>
        </div>

        <div class="form-actions">
          <button type="submit" class="btn">Enregistrer</button>
          <button type="button" class="btn secondary" @click="$router.push('/voiture')">Afficher liste</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'VoitureView',
  setup() {
    const route = useRoute();
    const voiture = ref(route.params.id === 'new' 
      ? {
      code: '',
      immatriculation: '',
      conducteur: '',
      contactConducteur: '',
      aide: '',
      contactAide: '',
      marque: '',
      capacite: ''
    }
    : getVoiture(route.params.id ?? -1));

    const submitForm = () => {
      if (route.params.id === 'new') {
        createVoiture(voiture);
      } else {
        updateVoiture(voiture);
      }
      
      window.location.reload();
    };

    const getTransporteurs = () => {
      const storedItems = localStorage.getItem("transporteurs");
      const departments = JSON.parse(storedItems) ?? [];

      return departments;
    };

    return {
      voiture,
      submitForm,
      getTransporteurs,
    };
  }
};
function createVoiture(voiture) {
  const storedItems = localStorage.getItem("voitures");
  const voitures = JSON.parse(storedItems) ?? [];
  const maxId = voitures.length === 0 ? 1 : voitures?.reduce((max, obj) => {
      return obj.id > max ? obj.id : max;
  }, -Infinity);

  voitures.push({...voiture.value, id: maxId + 1});
  localStorage.setItem("voitures", JSON.stringify(voitures));
}

function updateVoiture(voiture) {
  const storedItems = localStorage.getItem("voitures");
  const voitures = JSON.parse(storedItems) ?? [];
  let index = voitures.findIndex(obj => obj.id === voiture.value.id);

  if (index !== -1) {
    voitures[index] = voiture.value;
  }

  localStorage.setItem("voitures", JSON.stringify(voitures));
}

function getVoiture(id) {
  const storedItems = localStorage.getItem("voitures");
  const voitures = JSON.parse(storedItems) ?? [];
  const filteredVoiture = voitures.find((voiture) => voiture.id === parseInt(id));

  return filteredVoiture ? filteredVoiture : {
    code: '',
    immatriculation: '',
      conducteur: '',
      contactConducteur: '',
      aide: '',
      contactAide: '',
      marque: '',
      capacite: ''
  };
}
</script>

<style scoped>
.voiture-page {
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

.form-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.form-row label {
  flex-basis: 120px;
  /* Adjust the width as necessary */
  padding-right: 10px;
  /* Ensure there's space between label and input */
}

.form-row input[type="text"] {
  flex: 1;
  min-width: 120px;
  /* Adjust the minimum width as necessary */
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  /* Adds space between wrapped items */
}

/* ... other styles ... */
</style>