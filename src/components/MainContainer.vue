<script setup lang="ts">
import SideBar from "@/components/SideBar.vue";
import TasksContainer from "./TasksContainer.vue";
</script>

<template>
  <div class="w-full max-w-340 flex-1 flex gap-3 overflow-hidden">
    <SideBar />
    <TasksContainer />
  </div>
</template>
