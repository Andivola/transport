<template>
    <div class="employe-page">
      <div class="card">
        <form @submit.prevent="submitForm" class="card-body">
          <h2 class="card-header">Informations de l'Employé</h2>
          
          <div class="form-row">
            <label for="nom">Nom:</label>
            <input type="text" id="nom" v-model="employe.nom" required>
            <label for="prenom">Prénom:</label>
            <input type="text" id="prenom" v-model="employe.prenom" required>
          </div>
          
          <div class="form-row">
            <label for="matricule">Matricule:</label>
            <input type="text" id="matricule" v-model="employe.matricule" required>
            <label for="pseudo">Pseudo:</label>
            <input type="text" id="pseudo" v-model="employe.pseudo" required>
          </div>
          
          <div class="form-row">
            <label for="poste">Poste:</label>
            <input type="text" id="poste" v-model="employe.poste" required>
            <label for="contact">Contact:</label>
            <input type="text" id="contact" v-model="employe.contact" required>
          </div>
          
          <div class="form-row">
            <label for="adresse">Adresse:</label>
            <input type="text" id="adresse" v-model="employe.adresse" required>
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
    name: 'EmployeView',
    setup() {
      const employe = ref({
        nom: '',
        prenom: '',
        matricule: '',
        pseudo: '',
        poste: '',
        contact: '',
        adresse: ''
      });
  
      const submitForm = () => {
        console.log('Form submitted:', employe.value);
        // Implement form submission logic here (e.g., API call)
      };
  
      return {
        employe,
        submitForm
      };
    }
  };
  </script>
  
  <style scoped>
  .employe-page {
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
  
  justify-content: space-between;
  margin-bottom: 1rem;
}

label{
  padding: 30px;
}

input[type="text"] {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 200px;
}

</style>