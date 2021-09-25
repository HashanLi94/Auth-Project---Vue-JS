<template>
  <div>
    <navbar />
    <main class="main">
      <slot />
    </main>
    <footer />
  </div>
</template>

<script>
import Navbar from "../common/Navbar.vue";
import Footer from "../common/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
// @import "../../assets/scss/master.scss";
</style>
