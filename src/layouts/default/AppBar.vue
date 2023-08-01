<script setup>
import { RouterLink } from 'vue-router'

</script>


<template>
  <header>

    <div>


      <nav>

        <div class="header-nav">
          <p>Online Store Inventory Management</p>
        </div>
        <RouterLink to="/inentory">Inentory</RouterLink>
        <RouterLink to="/logout">Logout</RouterLink>
      </nav>


    </div>
  </header>
</template>



<style>
nav {
  display: flex;
  flex-direction: column;
  position: fixed;


  align-items: center;
  background-color: #f1f1f1;
  height: 100vh;
  width: 250px;
  border: 1px solid #ccc;
}

.header-nav{
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  text-align: center;
  padding: 8px;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

nav a {
  text-decoration: none;
  color: #444;
  font-size: 18px;
  padding: 8px;
  margin: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 200px;
  text-align: center;
}

nav a:hover {
  background-color: #ddd;
  color: black;
}

nav a.router-link-active {
  background-color: #007bff;
  color: white;
}

</style>
