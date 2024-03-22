<template>
    <div class="table-card">
      <h2>Department Index</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>CODE</th>
              <th>NAME</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="departement in departements" :key="departement.id">
              <td>{{ departement.id }}</td>
              <td>{{ departement.code }}</td>
              <td>{{ departement.nom }}</td>
              <td>
                <button class="btn edit">✏️</button>
                <button class="btn delete">🗑️</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <router-link to="/departement" class="btn add">Ajouter +</router-link>
    </div>
  </template>
  
  
  <script>
  import { ref } from 'vue';
//   import { useRouter } from 'vue-router';
  
  export default {
    name: 'TableDep',
    setup() {
    //   const router = useRouter();
      const departements = ref([
        // ... your departments data
      ]);
  
      // ... setup functions
  
      return {
        departements,
        // ... other setup functions
      };
    }
  };
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
  
  th, td {
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
    background-color: #5c6bc0;
    color: white;
  }
  
  .btn.edit {
    background-color: #ffca28; /* Yellow */
  }
  
  .btn.delete {
    background-color: #ef5350; /* Red */
  }
  
  .btn.add {
    background-color: #66bb6a; /* Green */
    color: white;
    text-decoration: none;
    padding: 0.5em 1em;
    margin: 1em 0;
    display: inline-block;
  }
  </style>
  