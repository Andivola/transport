<template>
    <div class="vehicle-page">
      <div class="card">
        <form @submit.prevent="submitForm" class="card-body">
          <h2 class="card-header">Information Véhicule</h2>
          
          <div class="form-row">
            <label for="immatriculation">Immatriculation:</label>
            <input type="text" id="immatriculation" v-model="vehicle.immatriculation" required>
          </div>
  
          <div class="form-row">
            <label for="conducteur">Conducteur:</label>
            <input type="text" id="conducteur" v-model="vehicle.conducteur" required>
            <label for="contactConducteur">Contact:</label>
            <input type="text" id="contactConducteur" v-model="vehicle.contactConducteur" required>
          </div>
  
          <div class="form-row">
            <label for="aide">Aide:</label>
            <input type="text" id="aide" v-model="vehicle.aide" required>
            <label for="contactAide">Contact:</label>
            <input type="text" id="contactAide" v-model="vehicle.contactAide" required>
          </div>
  
          <div class="form-row">
            <label for="marque">Marque:</label>
            <input type="text" id="marque" v-model="vehicle.marque" required>
            <label for="capacite">Capacité:</label>
            <input type="text" id="capacite" v-model="vehicle.capacite" required>
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
    name: 'VoitureView',
    setup() {
      const vehicle = ref({
        immatriculation: '',
        conducteur: '',
        contactConducteur: '',
        aide: '',
        contactAide: '',
        marque: '',
        capacite: ''
      });
  
      const submitForm = () => {
        console.log('Form submitted:', vehicle.value);
      };
  
      return {
        vehicle,
        submitForm
      };
    }
  };
  </script>
  
  <style scoped>
  .vehicle-page {
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
    flex-basis: 120px; /* Adjust the width as necessary */
    padding-right: 10px; /* Ensure there's space between label and input */
  }
  
  .form-row input[type="text"] {
    flex: 1;
    min-width: 120px; /* Adjust the minimum width as necessary */
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 0.5rem; /* Adds space between wrapped items */
  }
  
  /* ... other styles ... */
  </style>
  