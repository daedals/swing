<template>
	<v-container fluid class="flex-container">
			<v-date-picker
				show-adjacent-months hide-header
				id="date-picker"
				width="100%"
				v-model="date"
			></v-date-picker>
		</v-container>
</template>

<script setup lang="ts">
	import { computed } from 'vue';
	import { useSessionStore } from '@/stores/app';

	const store = useSessionStore()

	// const { date } = toRefs(useSessionStore())
	const date = computed({
  		get: () => store.date,
  		set: (val: any) => store.setDate(val)
	})
</script>

<style scoped>
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