<template>
  <div>
    <a href="#" @click="view('home')">Home</a>
    <a href="#" @click="view('counter')">Counter</a>
    <LazyHomeWelcome v-if="page === 'home'" />
    <LazyCounter v-if="page === 'counter'" />
    <!-- <component :is="MyComponent" /> -->
  </div>
</template>

<script setup>
// const MyComponent= shallowRef(resolveComponent("Counter"))
// const MyComponent = ref("counter");

// function toggle() {
//   MyComponent.value = "welcome";
// }
const page = ref("home");
function view(name) {
  page.value = name;
}
</script>
