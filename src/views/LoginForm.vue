<template>
    <div class="login-form">
      <form @submit.prevent="login" class="form-signin">
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <div v-if="error" class="alert alert-danger">{{ error }}</div>
        <label for="inputUsername" class="sr-only">Username</label>
        <input type="text" v-model="username" id="inputUsername" class="form-control" placeholder="Username" required autofocus>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" v-model="password" id="inputPassword" class="form-control" placeholder="Password" required>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';

  export default {
    name: 'LoginForm',
    data() {
      return {
        username: 'admin',
        password: 'admin',
        error: ''
      };
    },
    methods: {
      async login() {
        try {
          // Perform login logic here, for example, using Axios to send a POST request
          const response = await axios.post('/login', {
            username: this.username,
            password: this.password,
            _csrf_token: '{{ csrf_token("authenticate") }}' // Add CSRF token if needed
          });
          // Handle successful login, for example, redirect to another page
          console.log('Login successful:', response.data);
          this.$router.push('/home'); // Redirect to dashboard or another page
        } catch (error) {
          // Handle login error
          console.error('Login error:', error);
          this.error = 'Invalid username or password. Please try again.';
        }
      }
    }
  };
  </script>
  
  <style>
  /* Add custom styles here if needed */
  .login-form {
    max-width: 330px;
    margin: auto;
    padding: 15px;
  }
  .form-signin {
    position: relative;
    box-sizing: border-box;
    margin-bottom: 10px;
  }
  .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
  }
  .btn {
    display: block;
    width: 100%;
    padding: 10px;
  }
  </style>
  