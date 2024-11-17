<template>
	<v-card :title="date" :subtitle="weekday">
		<day-gantt :employees="employees"/>
	</v-card>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	const date = ref("16. August 2024")
	const weekday = "Monday"
	
const employees = ref([
	{
		name: "Alice",
		shifts: [
			{ start: "08:30", end: "14:00" },
		],
		color: "#123456"
	},
	{
		name: "Bob",
		shifts: [
			{ start: "9:15", end: "15:00" },
		],
		color: "#234567"
	},
	{
		name: "Caleb",
		shifts: [
			{ start: "14:00", end: "18:30" },
		],
		color: "#345678"
	},
])
</script>