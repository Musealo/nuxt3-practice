<template>
  <main class="user-layout bg-gray-500">
    <article class="sidebar">
      <p>Dashboard</p>
      <p>Settings</p>
    </article>
    <section>
      <slot></slot>
    </section>
  </main>
</template>

<style>
.sidebar {
  display: flex;
  flex-direction: column;
}
.user-layout {
  display: flex;
}
</style>
