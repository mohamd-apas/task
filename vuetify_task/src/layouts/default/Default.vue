<template>
  <v-app>


      <v-row>
        <v-col cols="2">
          <default-bar />
        </v-col>
        <v-col cols="9">
          <router-view />
        </v-col>
      </v-row>
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
</script>
