import { ref } from 'vue'
import { defineStore } from "pinia";
import { useDate } from 'vuetify';


export const useSessionStore = defineStore('session', () => {
	
	const date = ref(new Date())

	function setDate(newDate: any) {
		date.value = new Date(newDate)
	}

	return { date, setDate }
})