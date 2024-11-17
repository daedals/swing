<template>
	<v-navigation-drawer min-width="auto">
		<v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
		<v-divider></v-divider>
		<v-container fluid class="flex-container">
			<v-date-picker
				show-adjacent-months hide-header
				id="date-picker"
				width="100%"
			></v-date-picker>
		</v-container>
		<v-divider></v-divider>
		<v-list-item link title="List Item 1"></v-list-item>
		<v-list-item link title="List Item 2"></v-list-item>
		<v-list-item link title="List Item 3"></v-list-item>
	</v-navigation-drawer>
</template>
  
<script setup lang="ts">
	//
</script>

<style>
  #date-picker .v-date-picker-controls {
    justify-content: end;
    padding-inline-start: 0px;
    padding-inline-end: 0px;
    transform: scale(0.8, 0.8);
  }
  #date-picker .v-date-picker-month {
    transform: scale(0.745, 0.745);
    margin: -36px 0 -36px 0;
  }
</style>