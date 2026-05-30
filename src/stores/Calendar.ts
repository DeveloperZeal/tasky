import { defineStore } from "pinia";
import { ref } from "vue";

export const useCalendarStore = defineStore("calendar", () => {
  const now = new Date();
  const year = ref(now.getFullYear());
  const monthIdx = ref(now.getMonth());

  function nextMon() {
    if (monthIdx.value === 11) {
      year.value++;
      monthIdx.value = 0;
    } else {
      monthIdx.value++;
    }
  }

  function prevMon() {
    if (monthIdx.value === 0) {
      year.value--;
      monthIdx.value = 11;
    } else {
      monthIdx.value--;
    }
  }

  return { year, monthIdx, nextMon, prevMon };
});
