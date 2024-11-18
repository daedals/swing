<template>
  <v-app id="inspire">
    <ApplicationBar/>
    <v-main class="bg-grey-lighten-3">
    <v-container>
      <v-row>
        <NavigationPanel/>
      <v-col>
        <v-sheet
        min-height="70vh"
        rounded="lg"
        >
        <DayComponentMax/>
        </v-sheet>
      </v-col>
      </v-row>
    </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import DayComponentMax from './components/DayComponentMax.vue';
import NavigationPanel from './components/NavigationPanel.vue';

// import ApplicationBar from './components/ApplicationBar.vue';

</script>