<template>
  <div class="table-card">
    <h2>Liste des Employés</h2>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Matricule</th>
            <th>Pseudo</th>
            <th>Poste</th>
            <th>Contact</th>
            <th>Code Département</th>
            <th>Adresse</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employe in employes" :key="employe.id">
            <td>{{ employe.nom }}</td>
            <td>{{ employe.prenom }}</td>
            <td>{{ employe.matricule }}</td>
            <td>{{ employe.pseudo }}</td>
            <td>{{ employe.poste }}</td>
            <td>{{ employe.contact }}</td>
            <td>{{ employe.codeDepartement }}</td>
            <td>{{ employe.adresse }}</td>
            <td>
              <button class="btn update" @click="$router.push('/empform/'+employe.id)">✏️</button>
              <button class="btn delete" @click="deleteEmploye(employe.id)">🗑️</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <router-link to="/empform/new" class="btn add">Ajouter +</router-link>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'TableEmploye',
  setup() {
    const employes = ref(getEmploye());

    // Placeholder methods for edit and delete actions
    const updateEmploye = () => {
      
    };

    const deleteEmploye = (id) => {
      localStorage.setItem("employes", JSON.stringify(employes.value.filter((employe) => employe.id !== id)));
      window.location.reload();
    };

    return {
      employes,
      updateEmploye,
      deleteEmploye
    };
  }
};
function getEmploye() {
  // Load items from localStorage
  const storedEmployes = localStorage.getItem("employes");
  if (storedEmployes) {
    return JSON.parse(storedEmployes);
  }

  return [];
}
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

th,
td {
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

h2 {
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