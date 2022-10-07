<template>
  <div>
    <p>Welcome Dennis</p>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "sidebar",
  // inline middleware
  // middleware: () => {
  //   // const auth = useAuth();
  //   // return auth.value.isAuthenticated;
  //   // console.log("Hello from middleware");
  // },
  middleware: ["auth"],
});
</script>
