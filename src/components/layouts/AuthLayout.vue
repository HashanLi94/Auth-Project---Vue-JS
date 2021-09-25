<template>
  <div>
    <main class="main">
      <slot />
    </main>
    <footer />
  </div>
</template>

<script>
import Footer from "../common/Footer.vue";
export default {
  components: { Footer },
};
</script>

<style></style>
