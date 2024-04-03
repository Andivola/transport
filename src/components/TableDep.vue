<template>
  <div class="table-card">
    <h2>Liste des départements</h2>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>CODE</th>
            <th>NAME</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="departement in departements" :key="departement.id">
            <td>{{ departement.code }}</td>
            <td>{{ departement.nom }}</td>
            <td>
              <button  class="btn update" @click="$router.push('/departement/'+departement.id)">✏️</button>
              <button class="btn delete" @click="deleteDepartement(departement.id)">🗑️</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <router-link to="/departement/new" class="btn add">Ajouter +</router-link>
  </div>
</template>


<script>
import { ref } from 'vue';
//   import { useRouter } from 'vue-router';

export default {
  name: 'TableDep',
  setup() {
    // Sample data, you would fetch this from a server or store
    const departements = ref(getDepartments());

    const updateDepartement = () => {
    };

    const deleteDepartement = (id) => {
      localStorage.setItem("departements", JSON.stringify(departements.value.filter((department) => department.id !== id)));
      window.location.reload();
    };

    return {
      departements,
      updateDepartement,
      deleteDepartement
    };
  }
};

function getDepartments() {
  // Load items from localStorage
  const storedDepartments = localStorage.getItem("departements");
  if (storedDepartments) {
    console.log(storedDepartments);
    return JSON.parse(storedDepartments);
  }

  return [];
  // return [
  //   { id: 1, code: 'D001', nom: 'Ressources Humaines' },
  //   { id: 2, code: 'D002', nom: 'Finances' },
  //   // ... more departements
  // ];
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