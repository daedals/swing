<template>
	<v-container fluid class="time-view">
		<!-- Time Header -->
		<v-row class="time-header">
			<v-col
				v-for="hour in hours"
				:key="hour"
				class="time-interval"
			>
				{{ hour }}
			</v-col>
		</v-row>

		<!-- Employee Shifts -->
		<v-row 
			class="employee-rows" v-for="employee in employees"
			:key="employee.name">
			<v-col>
				<!-- Shift Bars -->
				<div class="shifts">
					<div
						v-for="shift in employee.shifts"
						:key="shift.start"
						class="shift-bar"
						:style="calculateShiftStyle(shift.start, shift.end, employee.color)"
					>
						{{ employee.name }} {{ shift.start }} - {{ shift.end }}
					</div>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";

// Example hours and employee shift data
// const hours = Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, "0")}:00`);
const hours = ref([
	'8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
])

const props = defineProps(['employees'])
const employees = props.employees

// Function to calculate shift bar position and size
const calculateShiftStyle = (start: string, end: string, color: string) => {
	const start_hours_minutes = start.split(":");
	const start_hour = parseInt(start_hours_minutes[0], 10)
	const start_minutes = start_hours_minutes[1] ? parseInt(start_hours_minutes[1], 10) : 0;
	const start_dec = start_hour + start_minutes/60

	const end_hours_minutes = end.split(":");
	const end_hour = parseInt(end_hours_minutes[0], 10)
	const end_minutes = end_hours_minutes[1] ? parseInt(end_hours_minutes[1], 10) : 0;
	const end_dec = end_hour + end_minutes/60

	const startPercent = ((start_dec - 8) / 11) * 100;
	const widthPercent = ((end_dec - start_dec) / 11) * 100;

	return {
		left: `${startPercent}%`,
		width: `${widthPercent}%`,
		"background-color": color,
	};
}

</script>

<style scoped>

.time-interval {
	flex: 1;
	text-align: left;
	font-size: 16px;
	color: #666;
	border-right: 1px solid #ccc;
	border-left: 1px solid #ccc;
}

.employee-row {
	display: flex;
	align-items: center;
	margin-bottom: 16px;
}

.shifts {
	flex: 1;
	position: relative;
	height: 60px;
	background-color: #292929;
}

.shift-bar {
	position: absolute;
	top: 0;
	bottom: 0;
	/* background-color: #6200ea; */
	color: #cccccc;
	text-align: center;
	line-height: 60px;
	border-radius: 4px;
}
</style>
