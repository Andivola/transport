<template>
    <div class="trajet-page">
      <div class="card">
        <form @submit.prevent="submitForm" class="card-body">
          <h2 class="card-header">Information Trajet</h2>
          
          <div class="form-row">
            <label for="typeTrajet">Type Trajet:</label>
            <input type="text" id="typeTrajet" v-model="trajet.typeTrajet" required>
            <small class="input-hint">F= Fixe, V= Variable, S= Spécial</small>
          </div>
          
          <div class="form-row">
            <label for="codeTrajet">Code Trajet:</label>
            <input type="text" id="codeTrajet" v-model="trajet.codeTrajet" required>
            <label for="libelle">Libellé:</label>
            <input type="text" id="libelle" v-model="trajet.libelle" required>
          </div>
          
          <div class="form-row">
            <label for="lieuDepart">Lieu de départ:</label>
            <input type="text" id="lieuDepart" v-model="trajet.lieuDepart" required>
            <label for="lieuArrivee">Lieu d'arrivé:</label>
            <input type="text" id="lieuArrivee" v-model="trajet.lieuArrivee" required>
          </div>
          
          <div class="form-row">
            <label for="heureDepart">Heure de départ:</label>
            <input type="time" id="heureDepart" v-model="trajet.heureDepart" required>
            <label for="heureArrivee">Heure d'arrivé:</label>
            <input type="time" id="heureArrivee" v-model="trajet.heureArrivee" required>
          </div>
          
          <div class="form-row">
            <label for="distance">Distance:</label>
            <input type="text" id="distance" v-model="trajet.distance" required>
          </div>
          
          <div class="form-actions">
            <button type="submit" class="btn">Enregistrer</button>
            <button type="button" class="btn secondary">Afficher liste</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'TrajetView',
    setup() {
      const trajet = ref({
        typeTrajet: '',
        codeTrajet: '',
        libelle: '',
        lieuDepart: '',
        lieuArrivee: '',
        heureDepart: '',
        heureArrivee: '',
        distance: ''
      });
  
      const submitForm = () => {
        console.log('Form submitted:', trajet.value);
        // Here you would typically handle the form submission,
        // like sending the data to a server.
      };
  
      return {
        trajet,
        submitForm
      };
    }
  };
  </script>
  
  <style scoped>
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
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
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
    flex-basis: 120px; /* Adjust as needed */
  }
  
  .form-row input[type="text"],
  .form-row input[type="time"] {
    flex: 1;
    min-width: 120px; /* Adjust as needed */
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
  </style>
  