<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div
    id="main"
    class="h-screen flex flex-col items-center gap-3 lg:px-8 lg:py-6 md:px-8 md:py-5 px-4 py-4 text-white bg-[radial-gradient(circle_at_top,#0353a4_0%,#000_85%)]"
  >
    <RouterView />
  </div>
</template>
