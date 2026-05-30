<script setup lang="ts">
import { computed } from "vue";
import type { DateType } from "@/types/Date";
import { useCalendarStore } from "@/stores/Calendar";
import { storeToRefs } from "pinia";

const days = ["S", "M", "T", "W", "T", "F", "S"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const calendar = useCalendarStore();

const today = new Date();

const { year, monthIdx } = storeToRefs(calendar);

const { nextMon, prevMon } = calendar;

const dates = computed<DateType[]>(() => {
  const firstDay = new Date(year.value, monthIdx.value, 1).getDay();
  const DaysInMonth = new Date(year.value, monthIdx.value + 1, 0).getDate();
  const DaysInLastMonth = new Date(year.value, monthIdx.value, 0).getDate();

  const result: DateType[] = [];

  for (let i = 1; i <= firstDay; i++) {
    result.push({
      date: DaysInLastMonth - firstDay + i,
      isCurrentMonth: false,
    });
  }

  for (let i = 1; i <= DaysInMonth; i++) {
    result.push({
      date: i,
      isCurrentMonth: true,
      today:
        today.getDate() === i &&
        today.getMonth() === monthIdx.value &&
        today.getFullYear() === year.value,
    });
  }

  const length = result.length;

  // for (let i = 1; i <= 42 - result.length; i++) {
  //   result.push({
  //     date: i,
  //     isCurrentMonth: false,
  //   });
  // }

  for (let i = 1; i <= 42 - length; i++) {
    result.push({
      date: i,
      isCurrentMonth: false,
    });
  }

  console.log(result);

  return result;
});
</script>

<template>
  <div class="dm-sans text-center">
    <div
      class="flex items-center justify-between text-[14px] mb-2 px-3 font-bold"
    >
      <button class="cal-nav-btn" @click.prevent="prevMon"><</button>
      <div class="flex gap-1">
        <p>{{ months[monthIdx] }}</p>
        <p>{{ year }}</p>
      </div>
      <!-- <button>Today</button> -->
      <button class="cal-nav-btn" @click.prevent="nextMon">></button>
    </div>
    <div class="grid grid-cols-7 gap-2">
      <div v-for="(day, index) in days" :key="index" class="days">
        {{ day }}
      </div>
      <div v-for="(date, index) in dates" :key="index">
        <span
          v-if="date.isCurrentMonth"
          class="curr-month-date date"
          :class="{ today: date.today }"
        >
          {{ date.date }}
        </span>
        <span v-else class="prev-month-date date">
          {{ date.date }}
        </span>
      </div>
    </div>
  </div>
</template>
