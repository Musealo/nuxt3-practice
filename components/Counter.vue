<template>
  <div>
    <button @click="increment">Increment</button>
    <p>{{ count }}</p>
    <button @click="decrement">decrement</button>
  </div>
</template>

<script setup>
// option API Vue 2
// export default {
//   data() {
//     return {
//       count: 0,
//     };
//   },
//   methods: {
//     increment() {
//       this.count++
//     },

//     decrement() {
//       this.count--
//     }
//   },
// };
// VUE 3 composition API
const count = ref(0);
function increment() {
  count.value++;
}
function decrement() {
  count.value--;
}
</script>
