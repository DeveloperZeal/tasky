<script setup lang="ts">
import { RouterLink } from "vue-router";
import userAccountImg from "@/assets/img/user-account.jpg";
</script>

<template>
  <nav
    class="glass-card w-full max-w-340 px-5 py-3 flex align-middle items-center justify-between"
  >
    <RouterLink to="/" class="instrument-serif-regular-italic text-[22px]">
      Tasky.
    </RouterLink>


    <RouterLink to="/profile">
      <img
        :src="userAccountImg"
        alt="User Profile Pic"
        class="w-7 h-7 rounded-full"
      />
    </RouterLink>
  </nav>
</template>

<style scoped>
  
</style>
