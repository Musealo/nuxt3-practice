<template>
  <div class="grid grid-cols-4 gap-4 mt-10">
    <nuxt-link to="/iphone/iphone-12" class="shadow-lg text-center">
      <h1>Iphone 12</h1>
      <div class="flex border rounded-lg justify-center">
        <img width="200" src="/image/iphone12.png" alt="" />
      </div>
    </nuxt-link>
    <nuxt-link
      to="/iphone/iphone-12-pro"
      class="shadow-lg border rounded-lg text-center"
    >
      <h1>Iphone 12 pro</h1>
      <div class="flex justify-center">
        <img width="200" src="/image/iphone12pro.jpg" alt="" />
      </div>
    </nuxt-link>
  </div>
</template>

<script setup>
useHead({
  title: "Nuxt3 - iPhones",
});
</script>
