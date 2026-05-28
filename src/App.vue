<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div
    id="main"
    class="min-h-screen flex flex-col items-center 
    gap-3
    lg:px-10 lg:py-12 
    md:px-8 md:py-10
    px-6 py-6
    text-white 
    bg-[radial-gradient(circle_at_top,#0353a4_0%,#000_85%)]"
  >
    <RouterView />
  </div>
</template>
