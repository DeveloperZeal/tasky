<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div
    class="min-h-screen bg-[radial-gradient(circle_at_top,#0353a4_0%,#000_85%)]"
  >
    <RouterView />
    <h1>Hello world</h1>

    <!-- <div class="h-64 w-64 bg-[radial-gradient(circle,#3b82f6,#1e3a8a)]"></div>
    <div class="bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.6),_transparent_70%)] h-96"></div> -->
  </div>
</template>
