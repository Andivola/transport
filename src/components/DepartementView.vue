<template>
  <div class="department-page">
    <div class="card">
      
      <form @submit.prevent="submitForm" class="card-body">
        <h2 class="card-header">Département Informations</h2>
        <div class="form-row">
          <label for="codeDepartement">Code Département:</label>
          <input type="text" id="codeDepartement" v-model="departement.code" required>
        </div>
        <div class="form-row">
          <label for="nomDepartement">Nom Département:</label>
          <input type="text" id="nomDepartement" v-model="departement.nom" required>
        </div>
          <input type="text" id="id" v-model="departement.id" hidden>
        <div class="form-actions">
          <button type="submit" class="btn">Enregistrer</button>
          <button type="button" class="btn secondary" @click="$router.push('/')">Afficher liste</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'DepartementView',
  setup() {
    const route = useRoute();

    const departement = ref(route.params.id === 'new' 
      ? {
          code: '',
          nom: ''
        }
      : getDepartment(route.params.id ?? -1));

    const submitForm = () => {
      if (route.params.id === 'new') {
        createDepartment(departement);
      } else {
        updateDepartment(departement);
      }
      
      window.location.reload();
    };

    return {
      departement,
      submitForm
    };
  }
};

function createDepartment(department) {
  const storedItems = localStorage.getItem("departements");
  const departements = JSON.parse(storedItems) ?? [];
  const maxId = departements.length === 0 ? 1 : departements?.reduce((max, obj) => {
      return obj.id > max ? obj.id : max;
  }, -Infinity);

  departements.push({...department.value, id: maxId + 1});
  localStorage.setItem("departements", JSON.stringify(departements));
}

function updateDepartment(department) {
  const storedItems = localStorage.getItem("departements");
  const departements = JSON.parse(storedItems) ?? [];
  let index = departements.findIndex(obj => obj.id === department.value.id);

  if (index !== -1) {
    departements[index] = department.value;
  }

  localStorage.setItem("departements", JSON.stringify(departements));
}

function getDepartment(id) {
  const storedItems = localStorage.getItem("departements");
  const departments = JSON.parse(storedItems) ?? [];
  const filteredDepartment = departments.find((department) => department.id === parseInt(id));

  return filteredDepartment ? filteredDepartment : {
      code: '',
      nom: ''
  };
}
</script>

<style scoped>
.department-page {
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
