<template>
    <div class="calendrier-card">
      <div class="card">
        <h2 class="card-header">Calendrier</h2>
        <div class="card-body">
          <label for="selectYear">Select Year:</label>
          <select v-model="selectedYear" id="selectYear" class="form-control">
            <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
          </select>
          <div class="table-responsive">
            <table class="table table-bordered mt-3">
              <thead>
                <tr>
                  <th scope="col">Num Semaine</th>
                  <th scope="col">Date Debut</th>
                  <th scope="col">Date Fin</th>
                  <th scope="col">Année</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(week, index) in weeks" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ week.start.toDateString() }}</td>
                  <td>{{ week.end.toDateString() }}</td>
                  <td>{{ week.year }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CalendrierView',
    data() {
      return {
        selectedYear: new Date().getFullYear(),
        years: [2022, 2023, 2024, 2025, 2026], // Example years, modify as needed
      };
    },
    computed: {
      weeks() {
        const weeks = [];
        const startDate = new Date(this.selectedYear, 0, 1); // January 1st of selected year
        let currentDate = new Date(startDate);
        const endDate = new Date(this.selectedYear, 11, 31); // December 31st of selected year
  
        while (currentDate <= endDate) {
          if (currentDate.getDay() === 1 || weeks.length === 0) { // Check if it's Monday or first week
            const startOfWeek = new Date(currentDate);
            const endOfWeek = new Date(currentDate.setDate(currentDate.getDate() + 6)); // Add 6 days for end of the week
  
            weeks.push({
              start: new Date(startOfWeek),
              end: new Date(endOfWeek),
              year: startOfWeek.getFullYear(),
            });
          }
  
          currentDate.setDate(currentDate.getDate() + 1); // Move to next day
        }
  
        return weeks;
      },
    },
  };
  </script>
  
  <style scoped>
  .calendrier-card {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .table-responsive {
    overflow-x: auto;
  }
  
  .table-bordered {
    border: 1px solid #dee2e6;
  }
  
  .table thead th,
  .table tbody td {
    border: 1px solid #dee2e6;
  }
  </style>
  