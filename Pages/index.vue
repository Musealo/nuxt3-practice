<template>
  <div>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="about">About</NuxtLink>

    <button @click="moveToAbout">Take me to About Page</button>
  </div>
</template>

<script setup>
function moveToAbout() {
  navigateTo("about");
}
</script>
