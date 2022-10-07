<template>
  <div class="grid grid-cols-4 gap-4 mt-10">
    <nuxt-link
      v-for="iphone in iphones"
      :key="iphone"
      to="`/iphone/${iphone}`"
      class="shadow-lg text-center"
    >
      <h1>{{ iphone }}</h1>
      <div class="flex border rounded-lg justify-center">
        <img width="200" src="`/image/${{iphone}}.png`" alt="" />
      </div>
    </nuxt-link>
  </div>
</template>

<script setup>
useHead({
  title: "Nuxt3 - iPhones",
});

// const iphones = ["iphone-12", "iphone12pro"];

const { data } = useFetch("/api/iphones");
console.log(data.value);
const iphones = data;
</script>
